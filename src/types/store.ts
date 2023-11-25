import {letras } from "./letras";
export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  letras: letras[];
};

export enum SomeActions {
  "SAVE_LETRAS" = "SAVE_LETRAS",
  "GET_LETRAS" = "GET_LETRAS",
}

export interface saveletrasAction {
  action: SomeActions.SAVE_LETRAS;
  payload: letras;
}

export interface GETletrasAction {
  action: SomeActions.GET_LETRAS;
  payload: letras[];
}

export type Actions = saveletrasAction | GETletrasAction;
