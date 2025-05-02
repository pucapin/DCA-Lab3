import { AppDispatcher, Action} from './Dispatcher';
import { VoteActionTypes} from './Actions';

export type State = {
    votes: { [fighterId: string]: number };
  };

type Listener = (state: State) => void;

class Store {
    private _myState: State = {
        votes: {},
    }
    // lista de los componentes suscritos al store
    private _listeners: Listener[] = [];

    constructor() {
        AppDispatcher.register(this._handleActions.bind(this));
    }

    getState() {
        return this._myState;
    }

    _handleActions(action: Action): void {
        switch (action.type) {
          case VoteActionTypes.INCREMENT_VOTE:
            const { fighterId, combatId } = action.payload;
            const currentVotes = this._myState.votes[fighterId] || 0;
            this._myState = {
              ...this._myState,
              votes: {
                ...this._myState.votes,
                [fighterId]: currentVotes + 1,
              },
            };
            this._emitChange();
            break;
        }
    }

    
    private _emitChange(): void {
        const state = this.getState();
        for (const listener of this._listeners) {
            listener(state);
        }
    }

    // Permite a los componentes suscribirse al store
    subscribe(listener: Listener): void {
        this._listeners.push(listener);
        listener(this.getState()); // Emitir estado actual al suscribirse
    }

    // Permite quitar la suscripción
    unsubscribe(listener: Listener): void {
        this._listeners = this._listeners.filter(l => l !== listener);
    }

}

export const store = new Store();