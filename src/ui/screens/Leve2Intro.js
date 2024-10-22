import {motion} from "framer-motion";
import styled from "@emotion/styled";
import {useProgress} from "../../hooks/useProgress";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import PanelBackImage from "../../assets/images/level2Intro/panelBack.png";
import BackImage from "../../assets/images/level2Intro/back.png";
import {scalePx} from "../../utils/scalePx";
import {Text} from "../shared/Text";
import {Button} from "../shared/Button";
import {Panel} from "../shared/Panel";
import {Tag} from "../shared/Tag";

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${({sizeRatio}) => scalePx(30, sizeRatio)};
    background-image: url(${BackImage});
    background-size: 100% 100%;
    background-color: #000F9B;
`;

const TagsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const PanelStyled = styled(Panel)`
    background-image: ${({background}) => `url(${background})`};
    background-size: auto 100%;
    background-position-x: left;
    background-repeat: no-repeat;
    margin-top: ${({sizeRatio}) => scalePx(30, sizeRatio)};
    padding: ${({sizeRatio}) => `${scalePx(23, sizeRatio)} ${scalePx(20, sizeRatio)} ${scalePx(25, sizeRatio)}`};
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

export function Leve2Intro() {
    const sizeRatio = useSizeRatio();
    const {next} = useProgress();

    return (
        <Wrapper
            sizeRatio={sizeRatio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <TagsStyled sizeRatio={sizeRatio}>
                <Tag>этап 2</Tag>
                <Tag>лидер</Tag>
            </TagsStyled>
            <PanelStyled sizeRatio={sizeRatio} background={PanelBackImage}>
                <PanelTextStyled sizeRatio={sizeRatio} bold>
                    Время подняться наверх.
                </PanelTextStyled>
                <PanelTextStyled sizeRatio={sizeRatio}>
                    Перед тобой длинная лестница. Чтобы её пройти, нужно проявить себя как лидер — продвигаться постепенно, но уверенно.
                </PanelTextStyled>
            </PanelStyled>
            <ButtonStyled sizeRatio={sizeRatio} onClick={next}>
                играть
            </ButtonStyled>
        </Wrapper>
    )
}
