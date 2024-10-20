import {ProgressContext, INITIAL_STATE} from "../contexts/ProgressContext";
import {useState} from "react";
import {NEXT_SCREEN} from "../constants/screens";

export function ProgressProvider(props) {
    const {children} = props;
    const urlParams = new URLSearchParams(window?.location?.search);
    const [screen, setScreen] = useState(urlParams.get('screen') || INITIAL_STATE.screen);

    const next = () => {
        const nextScreen = NEXT_SCREEN[screen];

        if (nextScreen) {
            setScreen(nextScreen);
        }
    }

    const value = {
        screen,
        next,
    };

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    )
}