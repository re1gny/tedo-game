import {motion} from "framer-motion";
import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {useProgress} from "../../hooks/useProgress";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import PanelBackImage from "../../assets/images/level3Rules/panelBack.png";
import BackImage from "../../assets/images/level3/back1.png";
import {scalePx} from "../../utils/scalePx";
import {Text} from "../shared/Text";
import {Button} from "../shared/Button";
import {Panel} from "../shared/Panel";
import {Tag} from "../shared/Tag";
import {TransparentPanel} from "../shared/TransparentPanel";
import {Title} from "../shared/Title";
import {LightBox} from "../shared/LightBox";
import {Blackout} from "../shared/Blackout";

const PanelStyled = styled(Panel)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: ${({background}) => `url(${background})`};
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: ${({sizeRatio}) => scalePx(20, sizeRatio)};
`;

const BoxesWrapperStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({sizeRatio}) => scalePx(16, sizeRatio)};
    margin-top: ${({sizeRatio}) => scalePx(50, sizeRatio)};
`;

const PanelTextStyled = styled(Text)`
    text-align: center;
    margin-top: ${({sizeRatio}) => scalePx(49, sizeRatio)};
`;

const TransparentPanelStyled = styled(TransparentPanel)`
    width: 100%;
    padding: ${({sizeRatio}) => scalePx(24, sizeRatio)};
`;

const TransparentPanelTitleStyled = styled(Title)`
    text-align: center;
`;

const TransparentPanelTextStyled = styled(Text)`
    text-align: center;
    margin-top: ${({sizeRatio}) => scalePx(15, sizeRatio)};
`;

const ButtonStyled = styled(Button)`
    width: 100%;
    margin-top: auto;
`;

const INDEXES_ORDER = [2, 4, 1, 0, 5, 3];

export function RulesPanel({onStart, ...rest}) {
    const sizeRatio = useSizeRatio();
    const [activeIndexes, setActiveIndexes] = useState([]);

    useEffect(() => {
        const nextIndex = INDEXES_ORDER[activeIndexes.length];
        const resultIndexes = activeIndexes.length === INDEXES_ORDER.length ?
            []
            : [...activeIndexes, nextIndex];

        const timerId = setTimeout(() => setActiveIndexes(resultIndexes), 600);

        return () => {
            clearTimeout(timerId);
        };
    }, [activeIndexes]);

    return (
        <PanelStyled sizeRatio={sizeRatio} background={PanelBackImage} {...rest}>
            <TransparentPanelStyled sizeRatio={sizeRatio}>
                <TransparentPanelTitleStyled sizeRatio={sizeRatio}>
                    Как играть?
                </TransparentPanelTitleStyled>
                <TransparentPanelTextStyled sizeRatio={sizeRatio} bold>
                    Разгадай алгоритм зажигания кнопок. Твоя задача — сделать так, чтобы все кнопки зажглись.
                </TransparentPanelTextStyled>
            </TransparentPanelStyled>
            <BoxesWrapperStyled sizeRatio={sizeRatio}>
                {Array(6).fill(null).map((_, index) => (
                    <LightBox
                        key={index}
                        active={activeIndexes.includes(index)}
                        disabled
                    />
                ))}
            </BoxesWrapperStyled>
            <PanelTextStyled sizeRatio={sizeRatio}>
                Следуй интуиции и не бойся пробовать разные варианты решения!
            </PanelTextStyled>
            <ButtonStyled sizeRatio={sizeRatio} onClick={onStart}>
                старт
            </ButtonStyled>
        </PanelStyled>
    );
}

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${({sizeRatio}) => scalePx(30, sizeRatio)};
    background-image: url(${BackImage});
    background-size: 100% 100%;
    background-color: #000F9B;
`;

const BlackoutStyled = styled(Blackout)`
    z-index: 1;
`;

const TagsStyled = styled.div`
    flex-shrink: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
`;

const RulesPanelStyled = styled(RulesPanel)`
    flex-grow: 1;
    margin-top: ${({sizeRatio}) => scalePx(30, sizeRatio)};
    z-index: 2;
`;

export function Leve3Rules() {
    const sizeRatio = useSizeRatio();
    const {next} = useProgress();

    return (
        <Wrapper
            sizeRatio={sizeRatio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <BlackoutStyled sizeRatio={sizeRatio} />
            <TagsStyled sizeRatio={sizeRatio}>
                <Tag>этап 3</Tag>
                <Tag>личность</Tag>
            </TagsStyled>
            <RulesPanelStyled sizeRatio={sizeRatio} onStart={next} />
        </Wrapper>
    )
}
