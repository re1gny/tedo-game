import {Global} from "@emotion/react";
import {ScreenTemplate} from "./ScreenTemplate";
import {ContentRouter} from "./ContentRouter";
import {ProgressProvider} from "./ProgressProvider";
import {FONT_STYLES, GLOBAL_STYLE} from "../constants/styles";

export function App() {
    return (
        <ProgressProvider>
            <ScreenTemplate>
                <Global styles={[GLOBAL_STYLE, ...FONT_STYLES]} />
                <ContentRouter />
            </ScreenTemplate>
        </ProgressProvider>
    )
}