import {SELECTORS, showNotification} from "./cool-wp-utils.js";
import {HandleTags} from "./cool-tags-handle.js";
import {setupNavigationForAdminContent} from "../cool-admin-navigation.js";
import {setupThemeNavigation} from "../cool-theme-navigation.js";

import { CoolClientCache } from "./cool-client-cache.js";

const clientCache = new CoolClientCache();

export const listenToPopState = () => {
    window.addEventListener('popstate', async (event) => {
        if (event.state && event.state.path) {
            await adminNavigation(event.state.path);
        }
    });
}


// FUNCTION FOR ADMIN AREA
export const adminNavigation = async (url) => {
    console.log('Navigating to:', url);
    const wpBody = document.querySelector(SELECTORS.WP_BODY);
    wpBody.classList.add('cool-nav-loading');

    try {
        const res = await fetch(url);
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const content = doc.querySelector(SELECTORS.WP_BODY);
        wpBody.innerHTML = content.innerHTML;

        new HandleTags(document, doc);

        setupNavigationForAdminContent();

        wpBody.classList.remove('cool-nav-loading');
        console.log("Content updated with response from: ", url);

        //reloadScripts(document);

        window.history.pushState({ path: url }, '', url);
    } catch (error) {
        console.error('Navigation error:', error);
        showNotification('An error occurred while navigating');
        wpBody.classList.remove('cool-nav-loading');
    }
};

export const changeWpMenuState = (e) => {
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

// FUNCTION FOR THEMES
export const changeLinkState = (e) => {
    const a = e.target.closest('a');
    if(!a) return;

    const links = document.querySelectorAll(SELECTORS.THEME_LINKS);
    links.forEach(link => link.classList.remove('cool-current-link'));

    a.classList.add('cool_current_link');
}

export const themeNavigation = async (url) => {
    console.log('Navigating to:', url);
    const body = document.body
    body.classList.add('cool-nav-loading');

    try {
        const html = await clientCache.cacheOrFetch(url);
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const content = doc.body;
        body.innerHTML = content.innerHTML;

        new HandleTags(document, doc);

        setupThemeNavigation();

        body.classList.remove('cool-nav-loading');
        console.log("Content updated with response from: ", url);

        window.history.pushState({ path: url }, '', url);
    } catch (error) {
        console.error('Navigation error:', error);
        body.classList.remove('cool-nav-loading');
    }
};