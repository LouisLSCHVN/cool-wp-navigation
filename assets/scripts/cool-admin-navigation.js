/**
 * TODO:
 * - [X] When no e.target.parentElement (in changeCurrentState) handle properly
 * - [X] Make a wpcontent specific handling for every link that is in wp-admin/
 * - [X] Add Cache Map
 * - [X] Add Show Error Methods
 * - [X] Add is safeURL method
 * - [X] Add roleback if this dosn't work
 * - [X] Make a list of urls that just replace the html tag
 * - [X] Vite app not working, they just don't start for some reasons ?? Handle that
 * - [ ] Do the same for themes and add the clientCache with options
 * - [ ] Make the buttons work again, like show more etc..
 * - [ ] Make the history work again
 * - [ ] Make transition on admin menu
 */

/** IMPORST **/
import {SELECTORS, isSafeAdminUrl} from './utils/cool-wp-utils.js';
import {adminNavigation, changeWpMenuState} from "./utils/cool-navigation-utils.js";

document.addEventListener('DOMContentLoaded', () => {
    setupAdminNavigation();
    listenToPopState();

    window.history.replaceState({ path: window.location.href }, '', window.location.href);
});

export const setupAdminNavigation = () => {
    setupNavigationForAdminMenu();
    setupNavigationForAdminContent();
};

export const setupNavigationForAdminMenu = () => {
    const adminLinks = document.querySelectorAll(SELECTORS.ADMIN_LINKS);
    adminLinks.forEach(link => link.addEventListener('click', async (e) => {
        const url = e.target.closest('a').href;
        if(!isSafeAdminUrl(url)) return;
        e.preventDefault();
        changeWpMenuState(e);
        await adminNavigation(url);
    }));
}

export const setupNavigationForAdminContent = () => {
    const contentLinks = document.querySelectorAll(SELECTORS.CONTENT_LINKS);
    console.log("Content links for content", contentLinks)
    contentLinks.forEach(link => link.addEventListener('click', async (e) => {
        const url = e.target.closest('a').href;
        if(!isSafeAdminUrl(url)) return;
        e.preventDefault();
        await adminNavigation(url);
    }));
}