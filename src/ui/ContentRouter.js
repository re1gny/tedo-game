import {AnimatePresence} from "framer-motion";
import styled from "@emotion/styled";
import {NEXT_SCREEN, SCREEN_IMAGES, SCREEN_NAME} from "../constants/screens";
import {useProgress} from "../hooks/useProgress";
import {useSizeRatio} from "../hooks/useSizeRatio";
import {useImagePreloader} from "../hooks/useImagePreloader";
import {Start1} from './screens/Start1';
import {Start2} from './screens/Start2';
import {Leve1Intro} from './screens/Leve1Intro';
import {Leve1Rules} from './screens/Leve1Rules';
import {Leve1Game} from './screens/Leve1Game';
import {Leve1Final} from './screens/Leve1Final';
import {Leve2Intro} from './screens/Leve2Intro';
import {Leve2Rules} from './screens/Leve2Rules';
import {Leve2Game} from './screens/Leve2Game';
import {Leve2Final} from './screens/Leve2Final';
import {Leve3Intro} from './screens/Leve3Intro';
import {Leve3Rules} from './screens/Leve3Rules';
import {Leve3Game} from './screens/Leve3Game';
import {Leve3Final} from './screens/Leve3Final';
import {Final} from './screens/Final';

const SCREENS = {
    [SCREEN_NAME.Start1]: Start1,
    [SCREEN_NAME.Start2]: Start2,
    [SCREEN_NAME.Leve1Intro]: Leve1Intro,
    [SCREEN_NAME.Leve1Rules]: Leve1Rules,
    [SCREEN_NAME.Leve1Game]: Leve1Game,
    [SCREEN_NAME.Leve1Final]: Leve1Final,
    [SCREEN_NAME.Leve2Intro]: Leve2Intro,
    [SCREEN_NAME.Leve2Rules]: Leve2Rules,
    [SCREEN_NAME.Leve2Game]: Leve2Game,
    [SCREEN_NAME.Leve2Final]: Leve2Final,
    [SCREEN_NAME.Leve3Intro]: Leve3Intro,
    [SCREEN_NAME.Leve3Rules]: Leve3Rules,
    [SCREEN_NAME.Leve3Game]: Leve3Game,
    [SCREEN_NAME.Leve3Final]: Leve3Final,
    [SCREEN_NAME.Final]: Final,
};

const WrapperStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #000F9B;
`;

export function ContentRouter() {
    const sizeRatio = useSizeRatio();
    const {screen} = useProgress();

    const nextScreen = NEXT_SCREEN[screen];
    const Component = SCREENS[screen];

    useImagePreloader(SCREEN_IMAGES[nextScreen]);

    return (
        <WrapperStyled sizeRatio={sizeRatio}>
            <AnimatePresence initial={false} mode="wait">
                {!!Component && <Component key={screen} />}
            </AnimatePresence>
        </WrapperStyled>
    )
}