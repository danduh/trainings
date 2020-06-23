class PhotoBox extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            'mode': 'open'
        });
        this._shadowRoot.appendChild(this.setStyling().content.cloneNode(true));
        this.collectElems()

    }


    collectElems() {
        this.$img = this.shadowRoot.querySelector("img");
        this.$caption = this.shadowRoot.querySelector("span");
    }


    /**
     * fired when attribute has any value
     * @param name
     * @param oldValue
     * @param newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "photos-data":
                this.imagesData = JSON.parse(newValue);
                this.renderTheGrid()
                break;
            case "caption":
                this.$caption.innerText = newValue;
                break;
            default:
                break;
        }
    }
    setStyling(){
        const photoStyle = document.createElement('template');
        photoStyle.innerHTML = `
            <style>
                .photo-card{
                    margin-right: 44px;
                }
                .photo-card:nth-child(3n+4) {  
                    margin-right: 0;                
                }
            </style>
        `
        return photoStyle


    }
    buildElement(image) {
        const photoBox = document.createElement('template');
        photoBox.innerHTML = `
            <div class="photo-card">
                <div class="photo">
                    <img src="${image.photoUrl}"/>
                </div>
                <span>${image.caption}</span>
            </div>
        `;
        return photoBox;
    }

    renderTheGrid() {
        for (let i = 0; i < this.imagesData.length; i++) {
            this._shadowRoot.appendChild(this.buildElement(this.imagesData[i]).content.cloneNode(true));
            // photoBox.querySelector("img").src = this.imagesData[i].photoUrl;
        }
    }


    /**
     * List of attributes to check
     * @returns {string[]}
     */
    static get observedAttributes() {
        return ['photos-data'];
    }
}


document.addEventListener("DOMContentLoaded", function () {
    window.customElements.define('photo-box', PhotoBox);
})
