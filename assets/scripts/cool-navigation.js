/**
 * TODO:
 * - [X] When no e.target.parentElement (in changeCurrentState) handle properly
 * - [ ] Vite app not working, they just don't start for some reasons ?? Handle that
 * - [X] Make a wpcontent specific handling for every link that is in wp-admin/
 * - [ ] Make a list of urls that just replace the html tag
 * - [ ] Make submit button ajax and notification handling
 * - [ ] Refactor code that repeats (setupNavigationForAdminMenu, setupNavigationForAdminContent)
 * - [ ] Add Cache Map
 * - [X] Add Show Error Methods
 * - [X] Add is safeURL method
 * - [ ] Add roleback if this dosn't work
 */

/** IMPORST **/
import {showNotification, showErrorMessage, updateTag, isSafeUrl, SELECTORS} from './cool-utils.js';
import { CoolClientCache } from './cool-client-cache.js';
import { resetVueApp, waitForScripts } from "./cool-scripts-handler.js";

const clientCache = new CoolClientCache();

document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    listenToPopState();
});

export const setupNavigation = () => {
    setupNavigationForAdminMenu();
    setupNavigationForAdminContent();
    setupSubmitButtons();
};

export const setupSubmitButtons = () => {
    const submitButtons = document.querySelectorAll(SELECTORS.SUBMIT_BUTTONS);
    submitButtons.forEach(button => button.addEventListener('click', handleSubmit));
};

export const setupNavigationForAdminMenu = () => {
    const adminLinks = document.querySelectorAll(SELECTORS.ADMIN_LINKS);
    adminLinks.forEach(link => link.addEventListener('click', async (e) => {
        if(!isSafeUrl(e.target.href)) return;
        e.preventDefault();
        changeWpMenuState(e);
        await navigate(e.target.closest('a').href);
    }));
}

export const setupNavigationForAdminContent = () => {
    const contentLinks = document.querySelectorAll(SELECTORS.CONTENT_LINKS);
    console.log("Content links for content", contentLinks)
    contentLinks.forEach(link => link.addEventListener('click', async (e) => {
        if(!isSafeUrl(e.target.href)) return;
        e.preventDefault();
        await navigate(e.target.closest("a").href);
    }));
}

const cacheOrFetch = async (url) => {
    const cachedHtml = clientCache.get(url);
    if (cachedHtml) {
        console.log('Serving from cache:', url);
        return cachedHtml;
    }

    console.log('Fetching:', url);
    const response = await fetch(url);
    const html = await response.text();
    clientCache.set(url, html);
    return html;
};


const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    if(!form) return

    const formData = new FormData(form);
    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData
        });
        console.log("Response from form : ", response)
        if (!response.ok) throw new Error("Error submitting form!");
        showNotification("Form submitted successfully!");
        clientCache.clear()
    } catch (error) {
        showErrorMessage(error.message);
    }
};

const navigate = async (url) => {
    const wpBody = document.querySelector(SELECTORS.WP_BODY);
    wpBody.classList.add('cool-nav-loading');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
        const html = await cacheOrFetch(url);
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const content = doc.querySelector(SELECTORS.WP_BODY);
        wpBody.innerHTML = content.innerHTML;

        // Handling the head tags
        updateTag(document, doc);
        // await waitForScripts();
        //  resetVueApp();

        setupNavigationForAdminContent();

        wpBody.classList.remove('cool-nav-loading');
        console.log("Content updated with response from: ", url);

        window.history.pushState({ path: url }, '', url);
    } catch (error) {
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
};

const changeWpMenuState = (e) => {
    console.log("Change WP Menu State", e.currentTarget);

    // Static classes
    const MENU_TOP = 'menu-top';
    const CURRENT = 'current';
    const WP_HAS_CURRENT_SUBMENU = 'wp-has-current-submenu';
    const WP_NOT_CURRENT_SUBMENU = 'wp-not-current-submenu';

    // Prevent double click
    if (!e.currentTarget || e.currentTarget.classList.contains(CURRENT)) return;

    // Remove other styles
    const current = Array.from(document.getElementsByClassName(CURRENT));
    const hasCurrentSubmenu = Array.from(document.getElementsByClassName(WP_HAS_CURRENT_SUBMENU));

    current.forEach(el => el.classList.remove(CURRENT));
    hasCurrentSubmenu.forEach(el => {
        el.classList.remove(WP_HAS_CURRENT_SUBMENU);
        el.classList.add(WP_NOT_CURRENT_SUBMENU);
    });

    let a, li, container, parentContainer;

    if (e.currentTarget.classList.contains(MENU_TOP)) {
        a = e.currentTarget;
        li = a.parentElement;
        container = li;
        parentContainer = container.parentElement;
    } else return

    if (a) a.classList.add(CURRENT);
    if (li) li.classList.add(CURRENT);

    if (container) {
        container.classList.remove(WP_NOT_CURRENT_SUBMENU);
        container.classList.add(WP_HAS_CURRENT_SUBMENU);
    }

    if (parentContainer && parentContainer !== container) {
        parentContainer.classList.remove(WP_NOT_CURRENT_SUBMENU);
        parentContainer.classList.add(WP_HAS_CURRENT_SUBMENU);
    }
}

const listenToPopState = () => {
    window.addEventListener('popstate', (event) => (event.state) ?? navigate(event.state.path));
}
