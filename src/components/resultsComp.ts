import { State, store } from '../flux/Store';
import Fights from '../services/Data';

class Results extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

    }
    connectedCallback() {
        store.subscribe((state: State) => {this.handleChange(state)});
        this.render();
    }

    handleChange(state: State) {
        this.render(state);
    }
    
    render(state = store.getState()) {

        console.log("Current votes:", state.votes);
        const fights = Fights();
        const fighters = fights.flatMap(fight => [fight.name1, fight.name2]);
        const imgs = fights.flatMap(fight => [fight.img1, fight.img2]);
        const totalVotes = Object.values(state.votes).reduce((sum, count) => sum + count, 0);

        const results = fighters.map(name => {
            const votes = state.votes[name] || 0;
            const percent = totalVotes > 0 ? (votes / totalVotes) * 100 : 0;
            const color = '';
            return {
                name,
                percent: percent.toFixed(1) + '%',
                color
            }
        });
        const colors = ['#e65247', '#f0b154', '#b3e366', '#36aaf7', '#6049f5'];
        results.forEach((item, i) => item.color = colors[i % colors.length]);

        console.log(results);

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="styles/results.css">
                <div class="results">
                <div class="result-card">
                </div>
                </div>
            `
        }
        
        const display = this.shadowRoot?.querySelector('.result-card');

        results.forEach(item => {
            const res = document.createElement('result-card');
            res.setAttribute('color', item.color);
            res.setAttribute('label', item.name);
            res.setAttribute('value', item.percent);
            display?.appendChild(res);
        });
    
}
}
export default Results;