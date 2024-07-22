// Cache client side configuration
const CACHE_CONFIG = {
    MAX_SIZE: 100,
    TTL: 1000 * 60 * 10,
    STORAGE_KEY: 'cool-wp-cache'
};

// Class to manage cache (local storage)
export class CoolClientCache {
    constructor() {
        this.cache = new Map();
        this.loadFromLocalStorage();
    }

    set(url, html) {
        const timestamp = Date.now();
        if (this.cache.size >= CACHE_CONFIG.MAX_SIZE) {
            const oldestKey = this.getOldestCacheKey();
            if (oldestKey) this.cache.delete(oldestKey);
        }
        this.cache.set(url, {html, timestamp});
        this.saveToLocalStorage();
    }

    get(url) {
        const cached = this.cache.get(url);
        if (!cached) return null;

        const age = Date.now() - cached.timestamp;
        if (age > CACHE_CONFIG.TTL) {
            this.cache.delete(url);
            this.saveToLocalStorage();
            return null;
        }

        return cached.html;
    }

    clear() {
        this.cache.clear();
        this.saveToLocalStorage();
        console.log('Cache cleared');
    }

    clearSingle(url) {
        this.cache.delete(url);
        this.saveToLocalStorage();
        console.log('Cache cleared for:', url);
    }

    getOldestCacheKey() {
        let oldestKey = null;
        let oldestTime = Infinity;

        for (const [key, value] of this.cache.entries()) {
            if (value.timestamp < oldestTime) {
                oldestKey = key;
                oldestTime = value.timestamp;
            }
        }

        return oldestKey;
    }

    saveToLocalStorage() {
        const serialized = JSON.stringify(Array.from(this.cache.entries()));
        localStorage.setItem(CACHE_CONFIG.STORAGE_KEY, serialized);
    }

    loadFromLocalStorage() {
        const serialized = localStorage.getItem(CACHE_CONFIG.STORAGE_KEY);
        if (serialized) {
            const parsed = JSON.parse(serialized);
            this.cache = new Map(parsed);

            // Clear expired cache
            for (const [url, {timestamp}] of this.cache.entries()) {
                if (Date.now() - timestamp > CACHE_CONFIG.TTL) {
                    this.cache.delete(url);
                }
            }
        }
    }
    async cacheOrFetch(url) {
        const cachedHtml = this.get(url);
        if (cachedHtml) {
            return cachedHtml;
        }

        const response = await fetch(url);
        const html = await response.text();
        this.set(url, html);
        return html;
    };
}