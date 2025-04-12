import { amiiboDetail } from "../adapters/adaptAmiibo";
import getDetail from "../services/getDetail";

class AmiiboCard extends HTMLElement {
    amiiboID!: string
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        

    }
    connectedCallback() {
        this.amiiboID = this.getAttribute('id')!;
        this.render()
        this.addEventListener("click", this.viewDetail);
    }
    
    render() {
    if (this.shadowRoot !== null) {
        this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="styles/amiibo.css">
    <div class="amiibo">
    <div class="name-contain"><p>${this.getAttribute('name')}</p></div>
    <img src='${this.getAttribute('image')}' alt="" id="img">
    <div class="game-contain"><p>${this.getAttribute('game')}</p></div>
    </div>
    `
    }
    }
    async viewDetail() {
        const apiResponse = await getDetail(this.amiiboID)
        const filterDetail = amiiboDetail(apiResponse.amiibo)
        console.log(filterDetail)
}
}
export {AmiiboCard}