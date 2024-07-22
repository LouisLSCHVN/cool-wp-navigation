export const SELECTORS = {

    // WORDPRESS ADMIN
    ADMIN_MENU: '#adminmenu',
    WP_BODY: '#wpbody',
    ADMIN_LINKS: '#adminmenu a',
    CONTENT_LINKS: '#wpbody a',
    SUBMIT_BUTTONS: 'input[type="submit"], button[type="submit"]',
    WP_WRAP: '#wpbody-content',

    // THEMES
    ADMIN_BAR: '#wpadminbar',
    THEME_LINKS: 'a',
};

const dontWorkYet = [
    "/wp-admin/site-editor.php",
    "/wp-admin/post-new.php",
    "action=edit",
]

export const isSafeAdminUrl = (url) => {
    try {
        console.log("Checking URL safety:", url);

        const currentDomain = window.location.hostname;
        const urlObj = new URL(url, window.location.origin);

        console.log("URL object:", urlObj);

        if (urlObj.hostname !== currentDomain) {
            console.log("URL rejected: different domain");
            return false;
        }

        if (!urlObj.pathname.startsWith('/wp-admin/')) {
            console.log("URL rejected: not in wp-admin");
            return false;
        }

        for (const path of dontWorkYet) {
            if (path.startsWith('/') && urlObj.pathname === path) {
                console.log("URL rejected: exact path match in dontWorkYet");
                return false;
            }
        }

        const searchParams = new URLSearchParams(urlObj.search);
        for (const param of dontWorkYet) {
            if (!param.startsWith('/') && searchParams.has(param.split('=')[0])) {
                const value = param.split('=')[1];
                if (!value || searchParams.get(param.split('=')[0]) === value) {
                    console.log("URL rejected: query parameter match in dontWorkYet");
                    return false;
                }
            }
        }

        console.log("URL accepted as safe");
        return true;

    } catch (error) {
        console.error("Error checking URL safety:", error);
        return false;
    }
};

export const isSafeThemeUrl = (url) => {
    try {
        console.log("Checking URL safety:", url);

        const currentDomain = window.location.hostname;
        const urlObj = new URL(url, window.location.origin);

        console.log("URL object:", urlObj);

        if (urlObj.hostname !== currentDomain) {
            console.log("URL rejected: different domain");
            return false;
        }

        if (urlObj.pathname.startsWith('/wp-admin/')) {
            console.log("URL rejected: in wp-admin");
            return false;
        }

        console.log("URL accepted as safe");
        return true;

    } catch (error) {
        console.error("Error checking URL safety:", error);
        return false;
    }

}

export const showErrorMessage = (message) => {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'notice notice-error settings-error is-dismissible';
    errorDiv.textContent = message;
    errorDiv.setAttribute('role', 'alert');
    document.querySelector(SELECTORS.WP_WRAP).insertAdjacentElement('afterbegin', errorDiv);
    setTimeout(() => errorDiv.remove(), 20000);
};

export const showNotification = (message) => {
    const notificationDiv = document.createElement('div');
    notificationDiv.className = 'notice notice-success settings-error is-dismissible';
    notificationDiv.textContent = message;
    notificationDiv.setAttribute('role', 'status');
    document.querySelector(SELECTORS.WP_WRAP).insertAdjacentElement('afterbegin', notificationDiv);
    setTimeout(() => notificationDiv.remove(), 20000);
};