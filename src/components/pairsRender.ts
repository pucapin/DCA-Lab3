import Fights from "../services/Data";
class PairsRender extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

    }
    connectedCallback() {
    this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>
            .contain {
            border-radius: 30px;
            width: 100%;
            margin-left: 60px;
            display: flex;
            flex-wrap: wrap;
            align-items:center;
            justify-content: center;
            }
            </style>
            <div class="contain">
            </div>
            `
            const data = Fights();
            const container = this.shadowRoot.querySelector(".contain");
            data.forEach(fight => {
            const card = this.ownerDocument.createElement("fight-pair");
            card.setAttribute("img1", fight.img1);
            card.setAttribute("name1", fight.name1);
            card.setAttribute("img2", fight.img2);
            card.setAttribute("name2", fight.name2);
            container?.appendChild(card)
    });
        }
    }
}

export default PairsRender;