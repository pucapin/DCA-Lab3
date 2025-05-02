
export type FightPayload = {
    fighterId: string,
    combatId: number
}

export interface Action {
    type: string;
    payload: FightPayload;
}

export class Dispatcher {
    // Los metodos de cada store que accionan las handleActions
    private _listeners: Array<(action: Action) => void>;

    constructor() {
        this._listeners = [];
    }

    // callback function that will be called
    // whenever an action is dispatched.

    register(callback: (action: Action) => void): void {
        this._listeners.push(callback);
    }

    // This method is used to dispatch an action to all registered listeners.
    // It takes an action object as an argument and calls each registered
    // callback function with the action as an argument. 

    dispatch(action: Action): void {
        for (const listener of this._listeners) {
            listener(action);
        }
    }
    //update components
}

export const AppDispatcher = new Dispatcher();
