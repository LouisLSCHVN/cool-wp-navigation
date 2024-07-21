export const resetVueApp = () => {
    if (window.vueApp) {
        window.vueApp.$destroy();
        window.vueApp = null;
    }
    if (window.createApp) {
        window.createApp();
    }
}

export const waitForScripts = () => {
    return new Promise(resolve => {
        const checkScripts = () => {
            if (document.querySelectorAll('script[src]').length === 0) {
                resolve();
            } else {
                setTimeout(checkScripts, 50);
            }
        };
        checkScripts();
    });
};