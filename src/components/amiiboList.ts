import getData from "../services/getData";
import { apiToAmiibo } from "../adapters/adaptAmiibo";
class AmiiboList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

    }
    async connectedCallback() {
        const apiResponse = await getData()
        const filteredAmiibo = apiToAmiibo(apiResponse)

    }
    
}
export {AmiiboList}