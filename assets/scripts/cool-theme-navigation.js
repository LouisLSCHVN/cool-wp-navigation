import {isSafeThemeUrl, SELECTORS} from "./utils/cool-wp-utils.js";
import {changeLinkState, themeNavigation, listenToPopState} from "./utils/cool-navigation-utils.js";

document.addEventListener('DOMContentLoaded', () => {
    setupThemeNavigation();
    listenToPopState()
});

export const setupThemeNavigation = () => {
    const links = document.querySelectorAll(SELECTORS.THEME_LINKS + `:not(${SELECTORS.ADMIN_BAR} a)`);
    links.forEach(link => link.addEventListener('click', async (e) => {
        const url = e.target.closest('a').href;
        if(!isSafeThemeUrl(url)) return;
        e.preventDefault();
        changeLinkState(e);
        await themeNavigation(url);
    }));
}