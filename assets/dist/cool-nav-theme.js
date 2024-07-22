(()=>{"use strict";var e={d:(t,o)=>{for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{r:()=>u});const t="#wpbody",o=["/wp-admin/site-editor.php","/wp-admin/post-new.php","action=edit"],a=e=>{try{console.log("Checking URL safety:",e);const t=window.location.hostname,a=new URL(e,window.location.origin);if(console.log("URL object:",a),a.hostname!==t)return console.log("URL rejected: different domain"),!1;if(!a.pathname.startsWith("/wp-admin/"))return console.log("URL rejected: not in wp-admin"),!1;for(const e of o)if(e.startsWith("/")&&a.pathname===e)return console.log("URL rejected: exact path match in dontWorkYet"),!1;const n=new URLSearchParams(a.search);for(const e of o)if(!e.startsWith("/")&&n.has(e.split("=")[0])){const t=e.split("=")[1];if(!t||n.get(e.split("=")[0])===t)return console.log("URL rejected: query parameter match in dontWorkYet"),!1}return console.log("URL accepted as safe"),!0}catch(e){return console.error("Error checking URL safety:",e),!1}};class n{constructor(e,t){this.currentDom=e,this.newDom=t,this.init()}init(){this.updateTag(["link","meta","title","style"]),this.handleScripts()}updateTags(e){e.forEach((e=>this.updateTag(e)))}updateTag(e){const t=Array.from(this.currentDom.getElementsByTagName(e)),o=Array.from(this.newDom.getElementsByTagName(e));t.forEach((e=>{o.some((t=>t.isEqualNode(e)))||e.remove()})),o.forEach((e=>{t.some((t=>t.isEqualNode(e)))||this.currentDom.head.appendChild(e.cloneNode(!0))}))}isEquivalentScript(e,t){return e.src===t.src&&e.textContent===t.textContent}isEquivalentTag(e,t){if(e.tagName!==t.tagName)return!1;const o=e.attributes,a=t.attributes;if(o.length!==a.length)return!1;for(let e=0;e<o.length;e++){const t=o[e],n=a.getNamedItem(t.name);if(!n||t.value!==n.value)return!1}return!0}handleScripts(){const e=Array.from(this.currentDom.getElementsByTagName("script"));Array.from(this.newDom.getElementsByTagName("script")).forEach((t=>{if(!e.some((e=>this.isEquivalentScript(e,t)))){const e=document.createElement("script");Array.from(t.attributes).forEach((t=>{e.setAttribute(t.name,t.value)})),t.type&&(e.type=t.type),e.textContent=t.textContent,this.currentDom.head.appendChild(e)}}))}}document.addEventListener("DOMContentLoaded",(()=>{s(),listenToPopState(),window.history.replaceState({path:window.location.href},"",window.location.href)}));const s=()=>{r(),c()},r=()=>{document.querySelectorAll("#adminmenu a").forEach((e=>e.addEventListener("click",(async e=>{const t=e.target.closest("a").href;a(t)&&(e.preventDefault(),m(e),await h(t))}))))},c=()=>{const e=document.querySelectorAll("#wpbody a");console.log("Content links for content",e),e.forEach((e=>e.addEventListener("click",(async e=>{const t=e.target.closest("a").href;a(t)&&(e.preventDefault(),await h(t))}))))},i=6e5,l="cool-wp-cache",d=new class{constructor(){this.cache=new Map,this.loadFromLocalStorage()}set(e,t){const o=Date.now();if(this.cache.size>=100){const e=this.getOldestCacheKey();e&&this.cache.delete(e)}this.cache.set(e,{html:t,timestamp:o}),this.saveToLocalStorage()}get(e){const t=this.cache.get(e);return t?Date.now()-t.timestamp>i?(this.cache.delete(e),this.saveToLocalStorage(),null):t.html:null}clear(){this.cache.clear(),this.saveToLocalStorage(),console.log("Cache cleared")}clearSingle(e){this.cache.delete(e),this.saveToLocalStorage(),console.log("Cache cleared for:",e)}getOldestCacheKey(){let e=null,t=1/0;for(const[o,a]of this.cache.entries())a.timestamp<t&&(e=o,t=a.timestamp);return e}saveToLocalStorage(){const e=JSON.stringify(Array.from(this.cache.entries()));localStorage.setItem(l,e)}loadFromLocalStorage(){const e=localStorage.getItem(l);if(e){const t=JSON.parse(e);this.cache=new Map(t);for(const[e,{timestamp:t}]of this.cache.entries())Date.now()-t>i&&this.cache.delete(e)}}async cacheOrFetch(e){const t=this.get(e);if(t)return t;const o=await fetch(e),a=await o.text();return this.set(e,a),a}},h=async e=>{console.log("Navigating to:",e);const o=document.querySelector(t);o.classList.add("cool-nav-loading");try{const a=await fetch(e),s=await a.text(),r=(new DOMParser).parseFromString(s,"text/html"),i=r.querySelector(t);o.innerHTML=i.innerHTML,new n(document,r),c(),o.classList.remove("cool-nav-loading"),console.log("Content updated with response from: ",e),window.history.pushState({path:e},"",e)}catch(e){console.error("Navigation error:",e),(()=>{const e=document.createElement("div");e.className="notice notice-success settings-error is-dismissible",e.textContent="An error occurred while navigating",e.setAttribute("role","status"),document.querySelector("#wpbody-content").insertAdjacentElement("afterbegin",e),setTimeout((()=>e.remove()),2e4)})(),o.classList.remove("cool-nav-loading")}},m=e=>{const t="current",o="wp-has-current-submenu",a="wp-not-current-submenu";if(e.currentTarget||console.log("No current target"),e.currentTarget.classList.contains(t))return;const n=Array.from(document.getElementsByClassName(t)),s=Array.from(document.getElementsByClassName(o));n.forEach((e=>e.classList.remove(t))),s.forEach((e=>{e.classList.remove(o),e.classList.add(a)}));const r=e.currentTarget.classList.contains("menu-top")?e.currentTarget.parentNode.querySelector("ul li ul a"):e.target.closest("a");if(!r)return;const c=r.parentElement,i=c.parentElement.parentElement,l=i.parentElement;r.classList.add(t),c.classList.add(t),i.classList.remove(a),i.classList.add(o),l.classList.remove(a),l.classList.add(o)};document.addEventListener("DOMContentLoaded",(()=>{u(),window.addEventListener("popstate",(async e=>{e.state&&e.state.path&&await h(e.state.path)}))}));const u=()=>{document.querySelectorAll("a:not(#wpadminbar a)").forEach((e=>e.addEventListener("click",(async e=>{const t=e.target.closest("a").href;(e=>{try{console.log("Checking URL safety:",e);const t=window.location.hostname,o=new URL(e,window.location.origin);return console.log("URL object:",o),o.hostname!==t?(console.log("URL rejected: different domain"),!1):o.pathname.startsWith("/wp-admin/")?(console.log("URL rejected: in wp-admin"),!1):(console.log("URL accepted as safe"),!0)}catch(e){return console.error("Error checking URL safety:",e),!1}})(t)&&(e.preventDefault(),(e=>{const t=e.target.closest("a");t&&(document.querySelectorAll("a").forEach((e=>e.classList.remove("cool-current-link"))),t.classList.add("cool_current_link"))})(e),await(async e=>{console.log("Navigating to:",e);const t=document.body;t.classList.add("cool-nav-loading");try{const o=await d.cacheOrFetch(e),a=(new DOMParser).parseFromString(o,"text/html"),s=a.body;t.innerHTML=s.innerHTML,new n(document,a),u(),t.classList.remove("cool-nav-loading"),console.log("Content updated with response from: ",e),window.history.pushState({path:e},"",e)}catch(e){console.error("Navigation error:",e),t.classList.remove("cool-nav-loading")}})(t))}))))}})();