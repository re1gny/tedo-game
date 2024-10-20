import {createContext} from "react";
import {SCREEN_NAME} from "../constants/screens";

export const INITIAL_STATE = {
    screen: SCREEN_NAME.Start1,
    next: () => undefined,
};

export const ProgressContext = createContext(INITIAL_STATE);