export class HandleTags {
    constructor(currentDom, newDom) {
        this.currentDom = currentDom;
        this.newDom = newDom;
        this.init();
    }

    init() {
        const tags = ['link', 'meta', 'title', 'style'];
        this.updateTag(tags);
        this.handleScripts();
    }

    updateTags(tags) {
        tags.forEach(tag => this.updateTag(tag));
    }

    updateTag(tag) {
        const currentTags = Array.from(this.currentDom.getElementsByTagName(tag));
        const newTags = Array.from(this.newDom.getElementsByTagName(tag));

        currentTags.forEach(currentTag => {
            if (!newTags.some(newTag => newTag.isEqualNode(currentTag))) {
                currentTag.remove();
            }
        });

        newTags.forEach(newTag => {
            if (!currentTags.some(currentTag => currentTag.isEqualNode(newTag))) {
                this.currentDom.head.appendChild(newTag.cloneNode(true));
            }
        });
    }

    isEquivalentScript(a, b) {
        return a.src === b.src && a.textContent === b.textContent;
    }

    isEquivalentTag(a, b) {
        if (a.tagName !== b.tagName) return false;

        const attrs1 = a.attributes;
        const attrs2 = b.attributes;

        if (attrs1.length !== attrs2.length) return false;

        for (let i = 0; i < attrs1.length; i++) {
            const attr1 = attrs1[i];
            const attr2 = attrs2.getNamedItem(attr1.name);

            if (!attr2 || attr1.value !== attr2.value) {
                return false;
            }
        }
        return true;
    };

    handleScripts() {
        const currentScripts = Array.from(this.currentDom.getElementsByTagName('script'));
        const newScripts = Array.from(this.newDom.getElementsByTagName('script'));

        newScripts.forEach(newScript => {
            if (!currentScripts.some(currentScript => this.isEquivalentScript(currentScript, newScript))) {
                const script = document.createElement('script');
                Array.from(newScript.attributes).forEach(attr => {
                    script.setAttribute(attr.name, attr.value);
                });
                if (newScript.type) script.type = newScript.type;
                script.textContent = newScript.textContent;
                this.currentDom.head.appendChild(script);
            }
        });
    }
}