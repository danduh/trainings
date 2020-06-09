const mainMenu = document.createElement('template');
mainMenu.innerHTML = `
            <span id="title">Default Title</span>
            <nav class="menu">
                <ul>
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                </ul>
            </nav>
        `;


class CustomMenu extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            'mode': 'open'
        });
        this._shadowRoot.appendChild(mainMenu.content.cloneNode(true));
        this.collectElems()

    }

    collectElems() {
        this.$title = this.shadowRoot.querySelector("#title");
    }


    /**
     * fired when attribute has any value
     * @param name
     * @param oldValue
     * @param newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {

        switch (name) {
            case "title":
                this.$title.innerText = newValue;
                break;
            default:
                break;
        }
    }

    /**
     * List of attributes to check
     * @returns {string[]}
     */
    static get observedAttributes() {
        return ["title", "menu-list"];
    }
}


document.addEventListener("DOMContentLoaded", function () {
    window.customElements.define('custom-menu', CustomMenu);
})
