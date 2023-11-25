import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (actions: Actions, state: AppState) => {
    const {action, payload} =actions;
        switch (action) {
        case SomeActions.SAVE_LETRAS:
            state.letras = [...state.letras, payload]
            return state;
        case SomeActions.GET_LETRAS:
            state.letras = payload;
            return state;
    
        default:
            return state;
    }
}