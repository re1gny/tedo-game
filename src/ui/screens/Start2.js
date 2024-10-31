import {motion} from "framer-motion";
import styled from "@emotion/styled";
import {useProgress} from "../../hooks/useProgress";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import PanelBackImage from "../../assets/images/start2/panelBack.png";
import BackImage from "../../assets/images/start2/back.png";
import {scalePx} from "../../utils/scalePx";
import {Text} from "../shared/Text";
import {Button} from "../shared/Button";
import {Panel} from "../shared/Panel";
import {reachMetrikaGoal} from "../../utils/reachMetrikaGoal";

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${({sizeRatio}) => `${scalePx(85, sizeRatio)} ${scalePx(30, sizeRatio)} ${scalePx(30, sizeRatio)}`};
    background-image: url(${BackImage});
    background-size: 100% 100%;
    background-color: #000F9B;
`;

const PanelStyled = styled(Panel)`
    background-image: ${({background}) => `url(${background})`};
    background-size: auto 100%;
    background-position-x: right;
    background-repeat: no-repeat;
    padding: ${({sizeRatio}) => `${scalePx(23, sizeRatio)} ${scalePx(25, sizeRatio)} ${scalePx(25, sizeRatio)}`};
`;

const PanelTextStyled = styled(Text)`
    text-align: center;

    &:not(:first-of-type) {
        margin-top: ${({sizeRatio}) => scalePx(15, sizeRatio)};
    }
`;

const ButtonStyled = styled(Button)`
    margin-top: auto;
`;

export function Start2() {
    const sizeRatio = useSizeRatio();
    const {next} = useProgress();

    const handleNext = () => {
        reachMetrikaGoal("study");
        next();
    };

    return (
        <Wrapper
            sizeRatio={sizeRatio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <PanelStyled sizeRatio={sizeRatio} background={PanelBackImage}>
                <PanelTextStyled sizeRatio={sizeRatio}>
                    Для успешного выполнения миссии
                    нужно пройти <Text bold inline>3 этапа</Text>.
                </PanelTextStyled>
                <PanelTextStyled sizeRatio={sizeRatio}>
                    На каждом из них мы спрятали одну из составляющих успешной карьеры, которая помогает быстро развиваться в ТеДо.
                </PanelTextStyled>
            </PanelStyled>
            <ButtonStyled sizeRatio={sizeRatio} onClick={handleNext}>
                Начать
            </ButtonStyled>
        </Wrapper>
    )
}
