import {motion} from "framer-motion";
import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {useProgress} from "../../hooks/useProgress";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {scalePx, scalePxTemplate} from "../../utils/scalePx";
import {Text} from "../shared/Text";
import {Button} from "../shared/Button";
import {Panel} from "../shared/Panel";
import {Tag} from "../shared/Tag";
import {TransparentPanel} from "../shared/TransparentPanel";
import {Title} from "../shared/Title";
import {Blackout} from "../shared/Blackout";
import {LineBox} from "../shared/LineBox";
import {Image} from "../shared/Image";
import {reachMetrikaGoal} from "../../utils/reachMetrikaGoal";
import PanelBack1Image from "../../assets/images/level1Rules/panelBack1.png";
import PanelBack2Image from "../../assets/images/level1Rules/panelBack2.png";
import BackImage from "../../assets/images/level1/back.png";
import TaskImage from "../../assets/images/level1Rules/task.svg";
import PersonImage from "../../assets/images/level1Rules/person.svg";
import Line1Image from "../../assets/images/level1Rules/lines/line1.svg";
import Line2Image from "../../assets/images/level1Rules/lines/line2.svg";
import Line3Image from "../../assets/images/level1Rules/lines/line3.svg";
import Line4Image from "../../assets/images/level1Rules/lines/line4.svg";
import Subline1Image from "../../assets/images/level1Rules/sublines/subline1.svg";
import Subline2Image from "../../assets/images/level1Rules/sublines/subline2.svg";
import Subline3Image from "../../assets/images/level1Rules/sublines/subline3.svg";
import Subline4Image from "../../assets/images/level1Rules/sublines/subline4.svg";
import Subline5Image from "../../assets/images/level1Rules/sublines/subline5.svg";

const PanelStyled = styled(Panel)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${PanelBack1Image}), url(${PanelBack2Image});
    background-size: 100% 100%, 100% ${({sizeRatio}) => scalePx(552, sizeRatio)};
    background-position: top left, top center;
    background-repeat: no-repeat;
    padding: ${({sizeRatio}) => scalePx(20, sizeRatio)};
`;

const LinesBackdropWrapperStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: ${({sizeRatio}) => scalePx(7, sizeRatio)};
`;

const LinesWrapperStyled = styled.div`
    margin-top: ${({sizeRatio}) => scalePx(79, sizeRatio)};
    position: relative;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: ${({sizeRatio}) => scalePx(7, sizeRatio)};
`;

const SublineImagesWraperStyled = styled.div`
    position: absolute;
    top: ${({sizeRatio}) => scalePx(18, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(40, sizeRatio)};
    width: ${({sizeRatio}) => `calc(100% - ${scalePxTemplate(80, sizeRatio)})`};
    height: ${({sizeRatio}) => scalePx(4, sizeRatio)};
`;

const SublineImageStyled = styled(Image)`
    position: absolute;
    width: ${({sizeRatio}) => scalePx(10, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(4, sizeRatio)};
`;

const Subline1ImageStyled = styled(SublineImageStyled)`
    top: 0;
    left: ${({sizeRatio}) => scalePx(-2, sizeRatio)};
`;

const Subline2ImageStyled = styled(SublineImageStyled)`
    top: 0;
    left: ${({sizeRatio}) => scalePx(45, sizeRatio)};
`;

const Subline3ImageStyled = styled(SublineImageStyled)`
    top: 0;
    left: ${({sizeRatio}) => scalePx(92, sizeRatio)};
`;

const Subline4ImageStyled = styled(SublineImageStyled)`
    top: 0;
    left: ${({sizeRatio}) => scalePx(139, sizeRatio)};
`;

const Subline5ImageStyled = styled(SublineImageStyled)`
    top: 0;
    left: ${({sizeRatio}) => scalePx(186, sizeRatio)};
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

const BOXES = {
    0: {
        initialRotate: 0,
        correctRotates: [0, 2],
        image: Line1Image,
    },
    1: {
        initialRotate: 0,
        correctRotates: [0, 2],
        image: Line2Image,
    },
    2: {
        initialRotate: 1,
        correctRotates: [0, 2],
        image: Line3Image,
    },
    3: {
        initialRotate: 0,
        correctRotates: [0, 2],
        image: Line4Image,
    },
};

const LINES = new Array(4).fill(null).map((_, index) => index);

const INITIAL_ROTATES = LINES.reduce((acc, item) => ({ ...acc, [item]: BOXES[item].initialRotate }), {});

export function RulesPanel({onStart, ...rest}) {
    const sizeRatio = useSizeRatio();
    const [rotates, setRotates] = useState(INITIAL_ROTATES);

    const checkIsActive = (currentRotates) => {
        return LINES.every(item => BOXES[item].correctRotates.includes(currentRotates[item] % 4));
    };

    useEffect(() => {
        const itemToRotate = 2;
        const newRotate = rotates[itemToRotate] === 1 ? 2 : 1;
        const newRotates = { ...rotates, [itemToRotate]: newRotate };

        const timerId = setTimeout(() => setRotates(newRotates), 1200);

        return () => {
            clearTimeout(timerId);
        };
    }, [rotates]);

    return (
        <PanelStyled sizeRatio={sizeRatio} {...rest}>
            <TransparentPanelStyled sizeRatio={sizeRatio}>
                <TransparentPanelTitleStyled sizeRatio={sizeRatio}>
                    Как играть?
                </TransparentPanelTitleStyled>
                <TransparentPanelTextStyled sizeRatio={sizeRatio}>
                    <Text bold inline>Нажимай на клетки,</Text> чтобы поворачивать их. <Text bold inline>Рисунок линий</Text> должен <Text bold inline>соединить</Text> всех сотрудников с их задачами. Ориентируйся на цвета!
                </TransparentPanelTextStyled>
            </TransparentPanelStyled>
            <LinesWrapperStyled sizeRatio={sizeRatio}>
                <LinesBackdropWrapperStyled sizeRatio={sizeRatio}>
                    <LineBox.Backdrop active={checkIsActive(rotates)} size="s" />
                    {LINES.map((item) => (
                        <LineBox.Backdrop key={item} active={checkIsActive(rotates)} size="s" />
                    ))}
                    <LineBox.Backdrop active={checkIsActive(rotates)} size="s" />
                </LinesBackdropWrapperStyled>
                <SublineImagesWraperStyled sizeRatio={sizeRatio}>
                    <Subline1ImageStyled sizeRatio={sizeRatio} src={Subline1Image} />
                    <Subline2ImageStyled sizeRatio={sizeRatio} src={Subline2Image} />
                    <Subline3ImageStyled sizeRatio={sizeRatio} src={Subline3Image} />
                    <Subline4ImageStyled sizeRatio={sizeRatio} src={Subline4Image} />
                    <Subline5ImageStyled sizeRatio={sizeRatio} src={Subline5Image} />
                </SublineImagesWraperStyled>
                <LineBox
                    active={checkIsActive(rotates)}
                    image={TaskImage}
                    color="dark"
                    size="s"
                    disabled
                />
                {LINES.map((item) => (
                    <LineBox
                        key={item}
                        active={checkIsActive(rotates)}
                        image={BOXES[item].image}
                        rotate={rotates[item]}
                        color="light"
                        size="s"
                        disabled
                    />
                ))}
                <LineBox
                    active={checkIsActive(rotates)}
                    image={PersonImage}
                    color="dark"
                    size="s"
                    disabled
                />
            </LinesWrapperStyled>
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

    const handleNext = () => {
        reachMetrikaGoal("start-1");
        next();
    };

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
            <RulesPanelStyled sizeRatio={sizeRatio} onStart={handleNext} />
        </Wrapper>
    )
}
