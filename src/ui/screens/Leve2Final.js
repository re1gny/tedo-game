import {motion} from "framer-motion";
import styled from "@emotion/styled";
import {useProgress} from "../../hooks/useProgress";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import PanelBackImage from "../../assets/images/level2Final/panelBack.png";
import BackImage from "../../assets/images/level2Final/back.png";
import {scalePx, scalePxTemplate} from "../../utils/scalePx";
import {Text} from "../shared/Text";
import {Button} from "../shared/Button";
import {Panel} from "../shared/Panel";
import {TransparentPanel} from "../shared/TransparentPanel";

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${({sizeRatio}) => scalePx(30, sizeRatio)};
    background-image: url(${BackImage});
    background-size: 100% 100%;
    background-color: #000F9B;
`;

const PanelStyled = styled(Panel)`
    background-image: ${({background}) => `url(${background})`};
    background-size: ${({sizeRatio}) => `calc(100% - ${scalePxTemplate(46, sizeRatio)}) auto`};
    background-position-x: left;
    background-repeat: no-repeat;
    padding: ${({sizeRatio}) => `${scalePx(20, sizeRatio)} ${scalePx(20, sizeRatio)} ${scalePx(25, sizeRatio)}`};
`;

const TransparentPanelStyled = styled(TransparentPanel)`
    padding: ${({sizeRatio}) => `${scalePx(23, sizeRatio)} ${scalePx(20, sizeRatio)} ${scalePx(25, sizeRatio)}`};
`;

const PanelTextStyled = styled(Text)`
    text-align: center;
    margin-top: ${({sizeRatio}) => scalePx(23, sizeRatio)};
`;

const TransparentPanelTextStyled = styled(Text)`
    text-align: center;
    
    &:not(:first-of-type) {
        margin-top: ${({sizeRatio}) => scalePx(15, sizeRatio)};
    }
`;

const ButtonStyled = styled(Button)`
    margin-top: auto;
`;

export function Leve2Final() {
    const sizeRatio = useSizeRatio();
    const {next} = useProgress();

    return (
        <Wrapper
            sizeRatio={sizeRatio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <PanelStyled sizeRatio={sizeRatio} background={PanelBackImage}>
                <TransparentPanelStyled sizeRatio={sizeRatio}>
                    <TransparentPanelTextStyled sizeRatio={sizeRatio} bold>
                        Лестница пройдена!
                    </TransparentPanelTextStyled>
                    <TransparentPanelTextStyled sizeRatio={sizeRatio}>
                        Значит, раскрыта еще одна составляющая для построения крутой карьеры — лидерство.
                    </TransparentPanelTextStyled>
                </TransparentPanelStyled>
                <PanelTextStyled sizeRatio={sizeRatio}>
                    Лидерство начинается со знания себя и управления собой — своими эмоциональным и физическим состоянием, компетенциями и решениями. Когда ты умеешь управлять собой, ты можешь вести за собой команду.
                </PanelTextStyled>
            </PanelStyled>
            <ButtonStyled sizeRatio={sizeRatio} onClick={next}>
                далее
            </ButtonStyled>
        </Wrapper>
    )
}
