/**
 * TODO:
 * - [X] When no e.target.parentElement (in changeCurrentState) handle properly
 * - [X] Make a wpcontent specific handling for every link that is in wp-admin/
 * - [X] Add Cache Map
 * - [X] Add Show Error Methods
 * - [X] Add is safeURL method
 * - [X] Add roleback if this dosn't work
 * - [ ] Vite app not working, they just don't start for some reasons ?? Handle that
 * - [ ] Make a list of urls that just replace the html tag
 * - [ ] Make submit button ajax and notification handling
 * - [ ] Do the same for themes and add the clientCache with options
 */

/** IMPORST **/
import { showNotification, showErrorMessage, updateTag, isSafeUrl, SELECTORS } from './cool-utils.js';
import { CoolClientCache } from './cool-client-cache.js';
// import { resetVueApp, waitForScripts } from "./cool-scripts-handler.js";

const clientCache = new CoolClientCache();

document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    listenToPopState();

    window.history.replaceState({ path: window.location.href }, '', window.location.href);
});

export const setupNavigation = () => {
    setupNavigationForAdminMenu();
    setupNavigationForAdminContent();

    // Not ready yet
    setupForm();
};

const setupForm = () => {
    const forms = document.querySelectorAll('form:not(.ajax-processed)')
    forms.forEach(form => {
        form.addEventListener('submit', handleSubmit);
        form.classList.add('ajax-processed');
    })
}

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
    const form = e.target;

    const formData = new FormData(form);
    formData.append('action', 'wp_admin_ajax_form_submit');
    formData.append('nonce', wpAjaxFormsData.nonce);

    form.classList.add('cool-nav-loading');

    try {
        const response = await fetch(wpAjaxFormsData.ajaxurl, {
            method: 'POST',
            body: formData,
            credentials: 'same-origin'
        });
        console.log("Response from form : ", response);

        if (!response.ok) throw new Error("Error submitting form!");

        // Lire le contenu de la réponse
        const responseText = await response.text();
        console.log("Response content:", responseText);

        let responseData;
        try {
            responseData = JSON.parse(responseText);
        } catch (error) {
            console.log("Response is not JSON, using text content");
            responseData = { success: true, data: { message: responseText } };
        }

        if (responseData.success) {
            showNotification(responseData.data.message || "Form submitted successfully!");

            if (responseData.data && responseData.data.redirect) {
                const page = clientCache.get(responseData.data.redirect);
                if (page) clientCache.clearSingle(responseData.data.redirect);
                await navigate(responseData.data.redirect);
            }
        } else {
            showErrorMessage(responseData.data.message || "An error occurred");
        }

    } catch (error) {
        console.error("Error:", error);
        showErrorMessage(error.message);
    } finally {
        form.classList.remove('cool-nav-loading');
    }
};
const navigate = async (url) => {
    console.log('Navigating to:', url);
    const wpBody = document.querySelector(SELECTORS.WP_BODY);
    wpBody.classList.add('cool-nav-loading');

    try {
        const html = await cacheOrFetch(url);
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const content = doc.querySelector(SELECTORS.WP_BODY);
        wpBody.innerHTML = content.innerHTML;

        updateTag(document, doc);
        setupNavigationForAdminContent();
        setupForm();

        wpBody.classList.remove('cool-nav-loading');
        console.log("Content updated with response from: ", url);

        window.history.pushState({ path: url }, '', url);
    } catch (error) {
        console.error('Navigation error:', error);
        wpBody.classList.remove('cool-nav-loading');
    }
};

const changeWpMenuState = (e) => {
    // Static classes
    const MENU_TOP = 'menu-top'
    const CURRENT = 'current';
    const WP_HAS_CURRENT_SUBMENU = 'wp-has-current-submenu';
    const WP_NOT_CURRENT_SUBMENU = 'wp-not-current-submenu';

    // Prevent double click
    if(!e.currentTarget) console.log("No current target");
    if(e.currentTarget.classList.contains(CURRENT)) return;

    // Remove other styles
    const current = Array.from(document.getElementsByClassName(CURRENT));
    const hasCurrentSubmenu = Array.from(document.getElementsByClassName(WP_HAS_CURRENT_SUBMENU));

    current.forEach(el => el.classList.remove(CURRENT));
    hasCurrentSubmenu.forEach(el => {
        el.classList.remove(WP_HAS_CURRENT_SUBMENU);
        el.classList.add(WP_NOT_CURRENT_SUBMENU);
    });

    // Add styles
    const a = e.currentTarget.classList.contains(MENU_TOP)
        ? e.currentTarget.parentNode.querySelector('ul li ul a')
        : e.target.closest('a');
    if(!a) return;

    const li = a.parentElement
    const ul = li.parentElement
    const container = ul.parentElement
    const parentContainer = container.parentElement

    a.classList.add(CURRENT)
    li.classList.add(CURRENT)

    container.classList.remove(WP_NOT_CURRENT_SUBMENU)
    container.classList.add(WP_HAS_CURRENT_SUBMENU)

    parentContainer.classList.remove(WP_NOT_CURRENT_SUBMENU)
    parentContainer.classList.add(WP_HAS_CURRENT_SUBMENU)
}

const listenToPopState = () => {
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.path) {
            navigate(event.state.path);
        }
    });
}
