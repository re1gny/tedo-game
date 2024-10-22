import {motion} from "framer-motion";
import styled from "@emotion/styled";
import {useProgress} from "../../hooks/useProgress";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {Title} from "../shared/Title";
import {Image} from "../shared/Image";
import LogoImage from "../../assets/images/logo.svg";
import PanelBackImage from "../../assets/images/start1/panelBack.png";
import BackImage from "../../assets/images/start1/back.png";
import {scalePx} from "../../utils/scalePx";
import {Text} from "../shared/Text";
import {Button} from "../shared/Button";
import {Panel} from "../shared/Panel";

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${({sizeRatio}) => `${scalePx(85, sizeRatio)} ${scalePx(30, sizeRatio)} ${scalePx(30, sizeRatio)}`};
    background-image: url(${BackImage});
    background-size: 100% 100%;
    background-color: #000F9B;
`;

const LogoStyled = styled(Image)`
    position: absolute;
    top: ${({sizeRatio}) => scalePx(29.64, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(30, sizeRatio)};
    width: ${({sizeRatio}) => scalePx(102, sizeRatio)};
`;

const TitleWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitlePart1WrapperStyled = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const TitlePart1Styled = styled(Title)`
    text-align: right;
`;

const TitlePart2Styled = styled(Title)`
    margin-top: ${({sizeRatio}) => scalePx(15.3, sizeRatio)};
    text-align: right;
`;

const DescriptionWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${({sizeRatio}) => scalePx(15, sizeRatio)};
`;

const PanelStyled = styled(Panel)`
    margin-top: auto;
    padding: ${({sizeRatio}) => `${scalePx(23, sizeRatio)} ${scalePx(20, sizeRatio)} ${scalePx(25, sizeRatio)}`};
    background-image: ${({background}) => `url(${background})`};
    background-size: auto 100%;
    background-position-x: right;
    background-repeat: no-repeat;
`;

const ButtonStyled = styled(Button)`
    margin-top: ${({sizeRatio}) => scalePx(20, sizeRatio)};
`;

export function Start1() {
    const sizeRatio = useSizeRatio();
    const {next} = useProgress();

    return (
        <Wrapper
            sizeRatio={sizeRatio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <LogoStyled sizeRatio={sizeRatio} src={LogoImage} />
            <TitleWrapperStyled sizeRatio={sizeRatio}>
                <TitlePart1WrapperStyled sizeRatio={sizeRatio}>
                    <TitlePart1Styled sizeRatio={sizeRatio}>
                        Добро <br/> пожаловать
                    </TitlePart1Styled>
                </TitlePart1WrapperStyled>
                <TitlePart2Styled sizeRatio={sizeRatio}>
                    в&nbsp;Мир&nbsp;ТеДо!
                </TitlePart2Styled>
            </TitleWrapperStyled>
            <DescriptionWrapperStyled sizeRatio={sizeRatio}>
                <Text bold>
                    В&nbsp;самом его&nbsp;центре&nbsp;— маяк, который указывает клиентам ТеДо путь к&nbsp;новым возможностям.
                </Text>
            </DescriptionWrapperStyled>
            <PanelStyled sizeRatio={sizeRatio} background={PanelBackImage}>
                <Text>
                    <Text bold inline>
                        Примерь на себя роль хранителя маяка.
                    </Text> Отправляйся на важную миссию — пройди все уровни и доберись до лампы наверху. Зажечь её могут только профессионалы нового поколения. Пройди 3 этапа и стань таким профессионалом. А ещё выиграй приз!
                </Text>
            </PanelStyled>
            <ButtonStyled sizeRatio={sizeRatio} onClick={next}>
                стать хранителем
            </ButtonStyled>
        </Wrapper>
    )
}
