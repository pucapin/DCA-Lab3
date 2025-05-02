import AppContain from "./pages/Root";
import PairsRender from "./components/pairsRender";
import FightPairs from "./components/fightPairs";
import Results from "./components/resultsComp";
import ResultCard from "./components/resultCard";

customElements.define("app-contain", AppContain);
customElements.define("pairs-render", PairsRender);
customElements.define("fight-pair", FightPairs);
customElements.define("results-render", Results);
customElements.define("result-card", ResultCard)
