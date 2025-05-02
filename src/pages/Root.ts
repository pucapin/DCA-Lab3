class AppContain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

    }
    connectedCallback() {
    this.render()
    }
    render() {
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <style>
        
        .banner {
        height: 900px;
        width: auto;
        }
        .app-contain {
        margin-top: 30px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        }
        </style>

        <div class="app-contain">
        <img src="images/hero_en.png" alt="Hero image of Sanrio Characters for the 2025 Voting" class="banner">
        <results-render></results-render>
        <pairs-render></pairs-render>
        </div>
        `
    }
    
}
}

export default AppContain;