import {motion} from "framer-motion";
import styled from "@emotion/styled";
import {useProgress} from "../../hooks/useProgress";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import PanelBackImage from "../../assets/images/level3Final/panelBack.png";
import BackImage from "../../assets/images/level3/back2.png";
import {scalePx, scalePxTemplate} from "../../utils/scalePx";
import {Text} from "../shared/Text";
import {Button} from "../shared/Button";
import {Panel} from "../shared/Panel";
import {TransparentPanel} from "../shared/TransparentPanel";

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${({sizeRatio}) => `${scalePx(55, sizeRatio)} ${scalePx(30, sizeRatio)} ${scalePx(30, sizeRatio)}`};
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

    &:not(:first-of-type) {
        margin-top: ${({sizeRatio}) => scalePx(23, sizeRatio)};
    }
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

export function Leve3Final() {
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
                        Миссия выполнена!
                    </TransparentPanelTextStyled>
                    <TransparentPanelTextStyled sizeRatio={sizeRatio}>
                        Найдена последняя составляющая для построения крутой карьеры — личностное развитие.
                    </TransparentPanelTextStyled>
                </TransparentPanelStyled>
                <PanelTextStyled sizeRatio={sizeRatio}>
                    <Text bold inline>Развитие личности происходит за пределами привычной жизни</Text> — когда ты приобретаешь новый опыт, новые привычки и выходишь из зоны комфорта. Изучай новые для себя темы, читай интересные и полезные книги, пробуй разные виды деятельности, хобби и спорта. <Text bold inline>Все это расширит твой кругозор</Text>, нетворкинг, подарит положительные эмоции и даст новые темы для разговора.
                </PanelTextStyled>
                <PanelTextStyled sizeRatio={sizeRatio}>
                    <Text bold inline>В ТеДо есть инструменты, которые поддерживают тебя в этом типе развития.</Text> Реализуй себя в роли спикера, тренера или амбассадора. Вступай в клубы по интересам или организуй свой. Проходи тренинги, читай книги в онлайн-библиотеке и пробуй много всего другого.
                </PanelTextStyled>
            </PanelStyled>
            <ButtonStyled sizeRatio={sizeRatio} onClick={next}>
                готово
            </ButtonStyled>
        </Wrapper>
    )
}
