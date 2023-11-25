import { letras } from "../types/letras";
import { Actions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";



export const saveletras = async (letras: letras): Promise<Actions>=> {
    await firebase.saveletrasInDB(letras);
    return {
        action: SomeActions.SAVE_LETRAS,
        payload: letras,
    };
};

export const getletrass = async (): Promise<Actions>=> {
    const letras= await firebase.getletrassFromDB();
    return {
        action: SomeActions.GET_LETRAS,
        payload: letras,
    };
};