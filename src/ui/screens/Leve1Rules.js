import {motion} from "framer-motion";
import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {useProgress} from "../../hooks/useProgress";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import PanelBackImage from "../../assets/images/level1Rules/panelBack.png";
import BackImage from "../../assets/images/level1/back.png";
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

const LineWrapperStyled = styled.div`
    margin-top: ${({sizeRatio}) => scalePx(79, sizeRatio)};
`;

const PanelTextStyled = styled(Text)`
    text-align: center;
    margin-top: ${({sizeRatio}) => scalePx(71, sizeRatio)};
`;

const TransparentPanelStyled = styled(TransparentPanel)`
    width: 100%;
    padding: ${({sizeRatio}) => `${scalePx(25, sizeRatio)} ${scalePx(20, sizeRatio)}`};
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

export function RulesPanel({onStart, ...rest}) {
    const sizeRatio = useSizeRatio();

    return (
        <PanelStyled sizeRatio={sizeRatio} background={PanelBackImage} {...rest}>
            <TransparentPanelStyled sizeRatio={sizeRatio}>
                <TransparentPanelTitleStyled sizeRatio={sizeRatio}>
                    Как играть?
                </TransparentPanelTitleStyled>
                <TransparentPanelTextStyled sizeRatio={sizeRatio}>
                    <Text bold inline>Нажимай на клетки,</Text> чтобы поворачивать их. <Text bold inline>Рисунок линий</Text> должен <Text bold inline>соединить</Text> всех сотрудников с их задачами. Ориентируйся на цвета!
                </TransparentPanelTextStyled>
            </TransparentPanelStyled>
            <LineWrapperStyled sizeRatio={sizeRatio}>

            </LineWrapperStyled>
            <PanelTextStyled sizeRatio={sizeRatio}>
                <Text bold inline>Перепутанные линии</Text> — это механизм замка. Они должны соединять сотрудника ТеДо и задачу, с которой он может помочь клиенту. Проведи все линии верно и дверь откроется.
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

export function Leve1Rules() {
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
                <Tag>этап 1</Tag>
                <Tag>профессионал</Tag>
            </TagsStyled>
            <RulesPanelStyled sizeRatio={sizeRatio} onStart={next} />
        </Wrapper>
    )
}
