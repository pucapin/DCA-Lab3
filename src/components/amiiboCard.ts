class AmiiboCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        

    }
    connectedCallback() {
        this.render()
    }
    render() {
    if (this.shadowRoot !== null) {
        this.shadowRoot.innerHTML = `
    <style>
    #img {
        width: 200px;
        height: auto;
    }
    
    </style>
    <div class="amiibo">
    <img src='${this.getAttribute('image')}' alt="" id="img">
    <div><p>${this.getAttribute('name')}</p></div>
    </div>
    `
    }
    }
}

export {AmiiboCard}