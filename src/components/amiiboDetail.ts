import { DetailStructure } from "../adapters/adaptAmiibo";

class AmiiboDetails extends HTMLElement {
    data!: DetailStructure;
    amiiboID!: string
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        

    }
    connectedCallback() {
        this.render()
    }
    
    render() {
    if (this.shadowRoot !== null && this.data) {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="styles/detail.css">
        <button id="back-button">⬅ Back to list</button>
        <div class="detail-page">
        <div class="content">
        <img src='${this.data.image}' alt="" id="img">
        <div class="information">
        <h1 id="name">${this.data.name} ! </h1>
        <h2>${this.data.character} from ${this.data.game}</h2>
        <p>Released in Japan in ${this.data.release.jp}</p>
        </div>
        </div>
        </div>
    `
    this.shadowRoot!.getElementById('back-button')?.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('back-to-list', {
          bubbles: true,
          composed: true,
        }));
      });
    }
    }
}
export {AmiiboDetails}