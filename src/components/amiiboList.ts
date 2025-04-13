import getData from "../services/getData";
import { apiToAmiibo } from "../adapters/adaptAmiibo";
import { AmiiboDetails } from "./amiiboDetail";
import { AmiiboStructure } from "../Types";
import { DetailStructure } from "../Types";

class AmiiboList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

    }
    async connectedCallback() {
        const apiResponse = await getData()
        const filteredAmiibo = apiToAmiibo(apiResponse)
        this.render(filteredAmiibo)
        
        this.addEventListener('back-to-list', () => {
            this.render(filteredAmiibo); 
          });
    }
    render(list:AmiiboStructure[]) {
        if(this.shadowRoot != null) {

            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="styles/list.css">
            <h1 id="title">Amiibo API !</h1>
            <div class="container">
            </div>
            `

            const container = this.shadowRoot.querySelector('.container')
            list.forEach((item:AmiiboStructure) => {
                const newCard = this.ownerDocument.createElement('amiibo-card');
                newCard.setAttribute('id', item.id)
                newCard.setAttribute('name', item.name);
                newCard.setAttribute('image', item.image);
                newCard.setAttribute('game', item.game)
                container?.appendChild(newCard);
            }) 

            container?.addEventListener('amiibo-detail', (e: Event) => {
                const detail = (e as CustomEvent<DetailStructure>).detail;
    
                container.innerHTML = '';
    
                const detailComponent = document.createElement('amiibo-detail') as AmiiboDetails;
                detailComponent.data = detail;
                container.appendChild(detailComponent);
            });
        }
    }
    
}
export {AmiiboList}