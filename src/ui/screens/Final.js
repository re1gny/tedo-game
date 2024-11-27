import {motion} from "framer-motion";
import styled from "@emotion/styled";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import PanelBackImage from "../../assets/images/final/panelBack.png";
import BackImage from "../../assets/images/final/back.png";
import {scalePx} from "../../utils/scalePx";
import {Text} from "../shared/Text";
import {Button} from "../shared/Button";
import {Panel} from "../shared/Panel";
import {TransparentPanel} from "../shared/TransparentPanel";
import {reachMetrikaGoal} from "../../utils/reachMetrikaGoal";

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
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: ${({sizeRatio}) => scalePx(20, sizeRatio)};
`;

const PanelTextStyled = styled(Text)`
    text-align: center;
    margin-top: ${({sizeRatio}) => scalePx(23, sizeRatio)};
`;

const TransparentPanelStyled = styled(TransparentPanel)`
    padding: ${({sizeRatio}) => `${scalePx(23, sizeRatio)} ${scalePx(20, sizeRatio)} ${scalePx(25, sizeRatio)}`};
`;

const TransparentPanelTextStyled = styled(Text)`
    text-align: center;
`;

const ButtonStyled = styled(Button)`
    margin-top: ${({sizeRatio}) => scalePx(25, sizeRatio)};
`;

const ButtonTextStyled = styled(motion.span)``;

export function Final() {
    const sizeRatio = useSizeRatio();

    const handleGo = () => {
        reachMetrikaGoal("web");
        window.open('https://t.me/tedo_career', '_blank');
    };

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
                        Ты справился с ролью хранителя маяка — теперь он снова освещает путь нашим клиентам!
                    </TransparentPanelTextStyled>
                </TransparentPanelStyled>
                <PanelTextStyled sizeRatio={sizeRatio}>
                    За время миссии тебе удалось раскрыть <Text bold inline>самый важный секрет</Text> для построения
                    успешной карьеры — развитие профессиональных, личностных и лидерских навыков. А развить их можно у нас! <Text bold inline>Начни в карьеру в ТеДо</Text> и заложи надежный фундамент для успешной карьеры.
                </PanelTextStyled>
                <ButtonStyled sizeRatio={sizeRatio} onClick={handleGo}>
                    <ButtonTextStyled sizeRatio={sizeRatio}>Скорее в ТеДо!</ButtonTextStyled>
                </ButtonStyled>
            </PanelStyled>
        </Wrapper>
    )
}
