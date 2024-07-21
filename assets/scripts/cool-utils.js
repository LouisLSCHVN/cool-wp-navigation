export const SELECTORS = {
    ADMIN_MENU: '#adminmenu',
    WP_BODY: '#wpbody',
    ADMIN_LINKS: '#adminmenu a',
    CONTENT_LINKS: '#wpbody a',
    SUBMIT_BUTTONS: 'input[type="submit"], button[type="submit"]',
    WP_WRAP: '#wpbody-content',
};

const dontWorkYet = [
    "/wp-admin/site-editor.php",
]

export const isSafeUrl = (url) => {
    try {
        const currentDomain = window.location.hostname;
        const urlObj = new URL(url, window.location.origin);

        if (dontWorkYet.includes(urlObj.pathname)) return false;

        return urlObj.hostname === currentDomain
    } catch (error) {
        console.error("Error checking URL safety:", error);
        return false;
    }
};

export const showErrorMessage = (message) => {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'notice notice-error settings-error is-dismissible';
    errorDiv.textContent = message;
    errorDiv.setAttribute('role', 'alert');
    document.querySelector(SELECTORS.WP_WRAP).insertAdjacentElement('afterbegin', errorDiv);
    setTimeout(() => errorDiv.remove(), 5000);
};

export const showNotification = (message) => {
    const notificationDiv = document.createElement('div');
    notificationDiv.className = 'notice notice-success settings-error is-dismissible';
    notificationDiv.textContent = message;
    notificationDiv.setAttribute('role', 'status');
    document.querySelector(SELECTORS.WP_WRAP).insertAdjacentElement('afterbegin', notificationDiv);
    setTimeout(() => notificationDiv.remove(), 10000);
};

export const updateTag = (currentDom, newDom) => {
    const htmlTags = ['title', 'meta', 'link', 'style'];

    htmlTags.forEach(tag => {
        const currentTags = Array.from(currentDom.head.getElementsByTagName(tag));
        const newTags = Array.from(newDom.head.getElementsByTagName(tag));

        currentTags.forEach(currentTag => {
            if (!newTags.some(newTag => newTag.isEqualNode(currentTag))) {
                currentTag.remove();
            }
        });

        newTags.forEach(newTag => {
            if (!currentTags.some(currentTag => currentTag.isEqualNode(newTag))) {
                currentDom.head.appendChild(newTag.cloneNode(true));
            }
        });
    });

    const currentScripts = Array.from(currentDom.head.getElementsByTagName('script'));
    const newScripts = Array.from(newDom.head.getElementsByTagName('script'));

    newScripts.forEach(newScript => {
        if (!currentScripts.some(currentScript => currentScript.src === newScript.src)) {
            const script = document.createElement('script');
            script.src = newScript.src;
            document.head.appendChild(script);
        }
    });
};