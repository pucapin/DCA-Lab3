import { AppDispatcher } from './Dispatcher';
import { FightPayload } from './Dispatcher';


export const VoteActionTypes = {
    INCREMENT_VOTE: 'INCREMENT_VOTE',
};


export const VoteActions = {
    vote(payload: FightPayload) {
      AppDispatcher.dispatch({
        type: "INCREMENT_VOTE",
        payload
      });
    }
};
  