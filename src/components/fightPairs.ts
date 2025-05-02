import { State, store } from '../flux/Store';
import { VoteActions } from '../flux/Actions';

class FightPairs extends HTMLElement {
    private votedCombats: Set<number> = new Set();
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

    }
    connectedCallback() {
        store.subscribe((state: State) => {
            this.render(state);
          });
          this.render();
    }

    handleChange(state: State) {
        this.render(state);
    }

    render(state = store.getState()) {
        const fight = Number(this.getAttribute("fight"));
            const hasVoted = this.votedCombats.has(fight);
            const fighter1 = this.getAttribute("name1");
            const fighter2 = this.getAttribute("name2");

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="styles/card.css">
            <div class="fight-card">
            <div class="fighter1">
                <img src="${this.getAttribute("img1")}" alt="Cinnamon Roll" class="fighter">
                <h2>${this.getAttribute("name1")}</h2>
                <button id="vote1" ${hasVoted ? "disabled" : ""}>Vote</button>
            </div>
            <div class="fighter2">
                <img src="${this.getAttribute("img2")}" alt="Gudetama" class="fighter">
                <h2>${this.getAttribute("name2")}</h2>
                <button id="vote2" ${hasVoted ? "disabled" : ""}>Vote</button>
            </div>
            </div>
            `
            const btn1 = this.shadowRoot.querySelector('#vote1') as HTMLButtonElement;
            const btn2 = this.shadowRoot.querySelector('#vote2') as HTMLButtonElement;


            btn1?.addEventListener('click', () => {
                if (fighter1) {
                    VoteActions.vote({ fighterId: fighter1, combatId: fight });
                    this.votedCombats.add(fight);
                    this.render()
                }
            });
            
            btn2?.addEventListener('click', () => {
                if (fighter2) {
                    VoteActions.vote({ fighterId: fighter2, combatId: fight });
                    this.votedCombats.add(fight);
                    this.render();
                }
            });
        }

}
}
export default FightPairs;
