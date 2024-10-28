import {motion} from "framer-motion";
import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {useProgress} from "../../hooks/useProgress";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {scalePx} from "../../utils/scalePx";
import {Text} from "../shared/Text";
import {Button} from "../shared/Button";
import {Panel} from "../shared/Panel";
import {Tag} from "../shared/Tag";
import {TransparentPanel} from "../shared/TransparentPanel";
import {Title} from "../shared/Title";
import {Blackout} from "../shared/Blackout";
import {PuzzleBox} from "../shared/PuzzleBox";
import BackImage from "../../assets/images/level2/back.png";
import PanelBackImage from "../../assets/images/level2Rules/panelBack.png";
import PuzzlesBackImage from "../../assets/images/level2Rules/puzzlesBack.png";
import Puzzle1Image from "../../assets/images/level2Rules/puzzles/puzzle1.png";
import Puzzle2Image from "../../assets/images/level2Rules/puzzles/puzzle2.png";
import PuzzlePlace1Image from "../../assets/images/level2Rules/puzzlePlaces/puzzlePlace1.png";
import PuzzlePlace2Image from "../../assets/images/level2Rules/puzzlePlaces/puzzlePlace2.png";

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

const PuzzlesWrapperStyled = styled.div`
    margin-top: ${({sizeRatio}) => scalePx(31, sizeRatio)};
    display: flex;
    align-items: center;
`;

const PuzzlesImageWrapperStyled = styled.div`
    position: relative;
    margin-left: ${({sizeRatio}) => scalePx(20, sizeRatio)};
    width: ${({sizeRatio}) => scalePx(186, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(166, sizeRatio)};
    border-radius: ${({sizeRatio}) => scalePx(25, sizeRatio)};
    background-image: url(${PuzzlesBackImage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;

const PuzzlesItemsWrapperStyled = styled.div`
    display: grid;
    grid-template-columns: ${({sizeRatio}) => scalePx(60, sizeRatio)};
    grid-auto-rows: ${({sizeRatio}) => scalePx(60, sizeRatio)};
    gap: ${({sizeRatio}) => scalePx(12, sizeRatio)};
    padding: ${({sizeRatio}) => scalePx(9, sizeRatio)};
`;

const PuzzlePlaceBoxStyled = styled.div`
    display: flex;
    position: absolute;
    top: ${({y, sizeRatio}) => scalePx(y, sizeRatio)};
    left: ${({x, sizeRatio}) => scalePx(x, sizeRatio)};
`;

const PuzzleBoxBackdropStyled = styled(PuzzleBox.Backdrop)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

const PuzzleBoxStyled = styled(PuzzleBox)`
    position: relative;
    z-index: 2;
`;

const PlacedPuzzleBoxStyled = styled(PuzzleBox)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`;

const PanelTextStyled = styled(Text)`
    text-align: center;
    margin-top: ${({sizeRatio}) => scalePx(31, sizeRatio)};
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

const PUZZLES = [
    {
        id: 1,
        placeId: 2,
        image: Puzzle1Image,
        type: 'horizontal',
    },
    {
        id: 2,
        placeId: 1,
        image: Puzzle2Image,
        type: 'vertical',
    },
];

const PUZZLE_PLACES = [
    {
        id: 1,
        image: PuzzlePlace2Image,
        type: 'vertical',
        y: 24,
        x: 20,
    },
    {
        id: 2,
        image: PuzzlePlace1Image,
        type: 'horizontal',
        y: 84,
        x: 20,
    },
];

const INITIAL_PUZZLES = PUZZLES.reduce((acc, item) => ({...acc, [item.id]: undefined}), {});

const getPuzzle = (currentId) => {
    return PUZZLES.find(({id}) => +currentId === +id);
};

export function RulesPanel({onStart, ...rest}) {
    const sizeRatio = useSizeRatio();
    const [puzzles, setPuzzles] = useState(INITIAL_PUZZLES);
    const [puzzleIdInProgress, setPuzzleIdInProgress] = useState(null);

    const puzzlePlaces = Object.keys(puzzles).reduce((acc, puzzleId) => {
        const placeId = puzzles[puzzleId];

        if (placeId) {
            return {...acc, [placeId]: +puzzleId};
        }

        return acc;
    }, {});

    useEffect(() => {
        const nextPuzzle = PUZZLES.find(({id}) => !puzzles[id]);
        let timerId;

        if (nextPuzzle) {
            timerId = setTimeout(() => {
                setPuzzles({...puzzles, [nextPuzzle.id]: nextPuzzle.placeId});
                setPuzzleIdInProgress(nextPuzzle.id);
            }, 1000);
        } else {
            timerId = setTimeout(() => setPuzzles(INITIAL_PUZZLES), 2000);
        }

        return () => {
            clearTimeout(timerId);
        };
    }, [puzzles]);

    return (
        <PanelStyled sizeRatio={sizeRatio} background={PanelBackImage} {...rest}>
            <TransparentPanelStyled sizeRatio={sizeRatio}>
                <TransparentPanelTitleStyled sizeRatio={sizeRatio}>
                    Как играть?
                </TransparentPanelTitleStyled>
                <TransparentPanelTextStyled sizeRatio={sizeRatio}>
                    <Text bold inline>Кликай на деталь</Text> под игровым полем <Text bold inline>и перетаскивай её</Text> внутрь силуэтов, чтобы полностью заполнить изображение.
                </TransparentPanelTextStyled>
            </TransparentPanelStyled>
            <PuzzlesWrapperStyled sizeRatio={sizeRatio}>
                <PuzzlesItemsWrapperStyled sizeRatio={sizeRatio}>
                    {PUZZLES.map(({id, image, type}) => !puzzles[id] ? (
                        <PuzzleBoxStyled
                            key={id}
                            sizeRatio={sizeRatio}
                            image={image}
                            type={type}
                            disabled
                            layout
                            layoutId={id}
                        />
                    ) : <div key={id} />)}
                </PuzzlesItemsWrapperStyled>
                <PuzzlesImageWrapperStyled sizeRatio={sizeRatio}>
                    {PUZZLE_PLACES.map(({id, x, y, image, type}) => (
                        <PuzzlePlaceBoxStyled key={id} id={id} sizeRatio={sizeRatio} x={x} y={y}>
                            <PuzzleBox sizeRatio={sizeRatio} image={image} type={type} disabled />
                            {getPuzzle(puzzlePlaces[id]) ? (
                                <PuzzleBoxBackdropStyled
                                    sizeRatio={sizeRatio}
                                    type={getPuzzle(puzzlePlaces[id]).type}
                                    active={getPuzzle(puzzlePlaces[id]).placeId === id && puzzleIdInProgress !== getPuzzle(puzzlePlaces[id]).id}
                                    x={x}
                                    y={y}
                                />
                            ) : null}
                            {getPuzzle(puzzlePlaces[id]) ? (
                                <PlacedPuzzleBoxStyled
                                    sizeRatio={sizeRatio}
                                    disabled
                                    image={getPuzzle(puzzlePlaces[id]).image}
                                    type={getPuzzle(puzzlePlaces[id]).type}
                                    layout
                                    layoutId={getPuzzle(puzzlePlaces[id]).id}
                                    onLayoutAnimationComplete={() => setPuzzleIdInProgress(null)}
                                />
                            ) : null}
                        </PuzzlePlaceBoxStyled>
                    ))}
                </PuzzlesImageWrapperStyled>
            </PuzzlesWrapperStyled>
            <PanelTextStyled sizeRatio={sizeRatio}>
                <Text bold inline>Части пазла внизу — это черты</Text>, формирующие настоящего лидера. Проверь, может быть это ты? Вставь недостающие части, чтобы пройти дальше.
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

export function Leve2Rules() {
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
                <Tag>этап 2</Tag>
                <Tag>лидер</Tag>
            </TagsStyled>
            <RulesPanelStyled sizeRatio={sizeRatio} onStart={next} />
        </Wrapper>
    )
}
