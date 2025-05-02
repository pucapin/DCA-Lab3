
class ResultCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

    }
    connectedCallback() {
        this.render();
        const value = this.getAttribute('value') || '0%';
        const color = this.getAttribute('color') || 'gray';

        const percentage = this.shadowRoot?.querySelector('#percentage') as HTMLDivElement;
        if (percentage) {
            percentage.style.width = value;
            percentage.style.backgroundColor = color;
            percentage.style.color = color;
        }
}
    
    render() {

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="styles/res-card.css">
                <div class="result">
                    <img src="" alt="" class="fighter">
                    <h4 id="label">${this.getAttribute('label')}</h4>
                    <p id="value">${this.getAttribute('value')}</p>
                    <div id="percentage">
                    </div>
                </div>
            `
        }
    
}
}
export default ResultCard;