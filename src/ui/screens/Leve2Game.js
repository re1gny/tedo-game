import {useState} from "react";
import {createPortal} from "react-dom";
import {AnimatePresence, motion} from "framer-motion";
import styled from "@emotion/styled";
import {DndContext, useDroppable, useDraggable, useDndContext, DragOverlay} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import {useProgress} from "../../hooks/useProgress";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {scalePx, scalePxTemplate} from "../../utils/scalePx";
import {IconButton} from "../shared/IconButton";
import {Panel} from "../shared/Panel";
import {Tag} from "../shared/Tag";
import {Text} from "../shared/Text";
import {RulesPanel} from "./Leve2Rules";
import {Blackout} from "../shared/Blackout";
import {Image} from "../shared/Image";
import {PuzzleBox} from "../shared/PuzzleBox";
import {MESSAGES} from "../../constants/messages";
import BackImage from "../../assets/images/level2/back.png";
import PuzzlesBackImage from "../../assets/images/level2Game/puzzlesBack.png";
import ModalBackImage from "../../assets/images/level2Game/modalBack.png";
import LightImage from "../../assets/images/level2Game/light.png";
import Puzzle1Image from "../../assets/images/level2Game/puzzles/puzzle1.png";
import Puzzle2Image from "../../assets/images/level2Game/puzzles/puzzle2.png";
import Puzzle3Image from "../../assets/images/level2Game/puzzles/puzzle3.png";
import Puzzle4Image from "../../assets/images/level2Game/puzzles/puzzle4.png";
import Puzzle5Image from "../../assets/images/level2Game/puzzles/puzzle5.png";
import Puzzle6Image from "../../assets/images/level2Game/puzzles/puzzle6.png";
import Puzzle7Image from "../../assets/images/level2Game/puzzles/puzzle7.png";
import Puzzle8Image from "../../assets/images/level2Game/puzzles/puzzle8.png";
import PuzzlePlace1Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace1.png";
import PuzzlePlace2Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace2.png";
import PuzzlePlace3Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace3.png";
import PuzzlePlace4Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace4.png";
import PuzzlePlace5Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace5.png";
import PuzzlePlace6Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace6.png";
import PuzzlePlace7Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace7.png";
import PuzzlePlace8Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace8.png";

const Wrapper = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: ${({sizeRatio}) => scalePx(30, sizeRatio)};
    background-image: url(${BackImage});
    background-size: 100% 100%;
    background-color: #000F9B;
`;

const BlackoutStyled = styled(Blackout)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const ModalBlackoutStyled = styled(Blackout)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
`;

const LightImageStyled = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 78%;
`;

const TagsStyled = styled.div`
    flex-shrink: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 12;
`;

const PanelsStyled = styled.div`
    flex-grow: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: ${({sizeRatio}) => scalePx(30, sizeRatio)};
`;

const RulesPanelStyled = styled(RulesPanel)`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
`;

const PanelStyled = styled(Panel)`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: auto;
    width: ${({sizeRatio}) => scalePx(315, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(527, sizeRatio)};
    margin-bottom: ${({sizeRatio}) => scalePx(25, sizeRatio)};
    z-index: 2;
`;

const ModalStyled = styled(Panel)`
    position: absolute;
    left: ${({sizeRatio}) => scalePx(30, sizeRatio)};
    top: 50%;
    width: ${({sizeRatio}) => `calc(100% - ${scalePxTemplate(60, sizeRatio)})`};
    transform: translateY(-50%);
    background-image: ${({background}) => `url(${background})`};
    background-size: auto 100%;
    background-repeat: no-repeat;
    padding: ${({sizeRatio}) => `${scalePx(23, sizeRatio)} ${scalePx(20, sizeRatio)} ${scalePx(50, sizeRatio)}`};
    z-index: 12;
`;

const ModalTextStyled = styled(Text)`
    text-align: center;
`;

const PuzzleImageStyled = styled.div`
    flex-grow: 1;
    position: relative;
    width: 100%;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    background-image: url(${PuzzlesBackImage});
    background-size: 100% auto;
    background-repeat: no-repeat;
`;

const PuzzlePlaceBoxStyled = styled(DroppablePuzzleBox)`
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

const PlacedPuzzleBoxStyled = styled(PuzzleBox)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`;

const PuzzlesWrapperStyled = styled(DroppablePuzzlesWrapper)`
    flex-shrink: 0;
    position: relative;
    display: grid;
    grid-template-columns: ${({sizeRatio}) => `repeat(4, ${scalePx(60, sizeRatio)})`};
    grid-auto-rows: ${({sizeRatio}) => scalePx(60, sizeRatio)};
    gap: ${({sizeRatio}) => `${scalePx(21, sizeRatio)} ${scalePx(12, sizeRatio)}`};
    padding: ${({sizeRatio}) => `${scalePx(20, sizeRatio)} ${scalePx(20, sizeRatio)} ${scalePx(45, sizeRatio)}`};
    background-color: #FFFFFF;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
`;

const IconButtonStyled = styled(IconButton)`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
`;

const IconStyled = styled.svg`
    width: ${({sizeRatio}) => scalePx(15, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(25, sizeRatio)};
`;

const CheckIconStyled = styled.svg`
    width: ${({sizeRatio}) => scalePx(22, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(24, sizeRatio)};
`;

const PUZZLES = [
    {
        id: 1,
        placeId: 6,
        image: Puzzle1Image,
        type: 'horizontal',
    },
    {
        id: 2,
        placeId: 5,
        image: Puzzle2Image,
        type: 'vertical',
    },
    {
        id: 3,
        placeId: 3,
        image: Puzzle3Image,
        type: 'horizontal',
    },
    {
        id: 4,
        placeId: 8,
        image: Puzzle4Image,
        type: 'vertical',
    },
    {
        id: 5,
        placeId: 7,
        image: Puzzle5Image,
        type: 'vertical',
    },
    {
        id: 6,
        placeId: 4,
        image: Puzzle6Image,
        type: 'vertical',
    },
    {
        id: 7,
        placeId: 1,
        image: Puzzle7Image,
        type: 'vertical',
    },
    {
        id: 8,
        placeId: 2,
        image: Puzzle8Image,
        type: 'vertical',
    },
];

const PUZZLE_PLACES = [
    {
        id: 1,
        image: PuzzlePlace1Image,
        type: 'vertical',
        y: 41,
        x: 56,
    },
    {
        id: 2,
        image: PuzzlePlace2Image,
        type: 'vertical',
        y: 101,
        x: 116,
    },
    {
        id: 3,
        image: PuzzlePlace3Image,
        type: 'horizontal',
        y: 101,
        x: 176,
    },
    {
        id: 4,
        image: PuzzlePlace4Image,
        type: 'vertical',
        y: 101,
        x: 236,
    },
    {
        id: 5,
        image: PuzzlePlace5Image,
        type: 'vertical',
        y: 161,
        x: 56,
    },
    {
        id: 6,
        image: PuzzlePlace6Image,
        type: 'horizontal',
        y: 161,
        x: 116,
    },
    {
        id: 7,
        image: PuzzlePlace7Image,
        type: 'vertical',
        y: 161,
        x: 176,
    },
    {
        id: 8,
        image: PuzzlePlace8Image,
        type: 'vertical',
        y: 221,
        x: 236,
    },
];

function DroppablePuzzlesWrapper(props) {
    const {setNodeRef} = useDroppable({ id: 'wrapper' });

    return <div ref={setNodeRef} {...props} />;
}

function DroppablePuzzleBox({id, ...rest}) {
    const {setNodeRef} = useDroppable({ id });

    return <div ref={setNodeRef} {...rest} />;
}

function DraggablePuzzleBox({id, placeId, placed, disabled, ...rest}) {
    const {attributes, listeners, isDragging, setNodeRef, transform} = useDraggable({
        id,
        disabled,
        data: { placeId },
    });
    const style = transform ? {
        transform: CSS.Translate.toString(transform),
    } : undefined;

    const Component = placed ? PlacedPuzzleBoxStyled : PuzzleBox;


    return (
        <Component ref={setNodeRef} style={style} {...listeners} {...attributes} {...rest} />
    );
}

const INITIAL_PUZZLES = PUZZLES.reduce((acc, item) => ({...acc, [item.id]: undefined}), {});
const INITIAL_MESSAGES = PUZZLES.reduce((acc, item, index) => ({...acc, [item.id]: MESSAGES[index]}), {});

const getPuzzle = (currentId) => {
    return PUZZLES.find(({id}) => +currentId === +id);
};

function GamePanel(props) {
    const {puzzles, puzzlePlaces, isWin, activeId, onCloseRules} = props;
    const sizeRatio = useSizeRatio();
    const {active} = useDndContext();

    return (
        <PanelStyled
            key="game"
            sizeRatio={sizeRatio}
            color="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <PuzzleImageStyled sizeRatio={sizeRatio}>
                {PUZZLE_PLACES.map(({id, x, y, image, type}) => (
                    <PuzzlePlaceBoxStyled key={id} id={id} sizeRatio={sizeRatio} x={x} y={y}>
                        <PuzzleBox image={image} type={type} disabled />
                        {getPuzzle(puzzlePlaces[id]) ? (
                            <PuzzleBoxBackdropStyled
                                sizeRatio={sizeRatio}
                                type={getPuzzle(puzzlePlaces[id]).type}
                                active={getPuzzle(puzzlePlaces[id]).placeId === id && active?.id !== puzzlePlaces[id]}
                                x={x}
                                y={y}
                            />
                        ) : null}
                        {getPuzzle(puzzlePlaces[id]) ? (
                            <DraggablePuzzleBox
                                sizeRatio={sizeRatio}
                                id={getPuzzle(puzzlePlaces[id]).id}
                                placeId={id}
                                placed
                                disabled={isWin}
                                image={getPuzzle(puzzlePlaces[id]).image}
                                type={getPuzzle(puzzlePlaces[id]).type}
                            />
                        ) : null}
                    </PuzzlePlaceBoxStyled>
                ))}
            </PuzzleImageStyled>
            <PuzzlesWrapperStyled sizeRatio={sizeRatio}>
                {PUZZLES.map(({id, placeId, image, type}) => !puzzles[id] ? (
                    <DraggablePuzzleBox
                        key={id}
                        id={id}
                        placeId={placeId}
                        image={image}
                        type={type}
                        disabled={isWin}
                    />
                ) : <div key={id} />)}
                {createPortal(
                    <DragOverlay zIndex={10}>
                        {getPuzzle(activeId) ? (
                            <PuzzleBox
                                image={getPuzzle(activeId).image}
                                type={getPuzzle(activeId).type}
                            />
                        ) : null}
                    </DragOverlay>,
                    document.body,
                )}
            </PuzzlesWrapperStyled>
            <IconButtonStyled sizeRatio={sizeRatio} onClick={onCloseRules}>
                <IconStyled
                    sizeRatio={sizeRatio}
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5.67933 17.7559C5.67933 16.6263 5.8233 15.6629 6.11122 14.8656C6.4213 14.0682 6.77567 13.4149 7.17433 12.9054C7.59515 12.396 8.13778 11.8313 8.80222 11.2111C9.53311 10.5024 10.0647 9.90437 10.3969 9.41711C10.7291 8.9077 10.8952 8.28755 10.8952 7.55667C10.8952 6.58215 10.6073 5.81804 10.0314 5.26433C9.47774 4.68848 8.71363 4.40056 7.73911 4.40056C6.69815 4.40056 5.85652 4.766 5.21422 5.49689C4.57193 6.22778 4.25078 7.14693 4.25078 8.25433V8.55333H0.463444V8.25433C0.463444 6.9033 0.773519 5.663 1.39367 4.53344C2.01381 3.40389 2.86652 2.50689 3.95178 1.84244C5.05919 1.178 6.32163 0.845778 7.73911 0.845778C9.13444 0.845778 10.3637 1.12263 11.4268 1.67633C12.4899 2.23004 13.3094 2.99415 13.8852 3.96867C14.4611 4.94319 14.749 6.05059 14.749 7.29089C14.749 8.55333 14.5054 9.57215 14.0181 10.3473C13.553 11.1004 12.8553 11.9088 11.9251 12.7726C11.0613 13.592 10.408 14.3561 9.965 15.0649C9.52204 15.7736 9.30056 16.6706 9.30056 17.7559V18.0881H5.67933V17.7559ZM7.50656 24.8987C6.84211 24.8987 6.28841 24.6772 5.84544 24.2342C5.40248 23.7691 5.181 23.2154 5.181 22.5731C5.181 21.9308 5.40248 21.3882 5.84544 20.9452C6.28841 20.5023 6.84211 20.2808 7.50656 20.2808C8.171 20.2808 8.71363 20.5023 9.13444 20.9452C9.57741 21.3882 9.79889 21.9308 9.79889 22.5731C9.79889 23.2154 9.57741 23.7691 9.13444 24.2342C8.69148 24.6772 8.14885 24.8987 7.50656 24.8987Z"
                        fill="white"
                    />
                </IconStyled>
            </IconButtonStyled>
        </PanelStyled>
    );
}

export function Leve2Game() {
    const sizeRatio = useSizeRatio();
    const {next} = useProgress();
    const [activeId, setActiveId] = useState(null);
    const [activeMessage, setActiveMessage] = useState(null);
    const [isWin, setIsWin] = useState(false);
    const [isRules, setIsRules] = useState(false);
    const [puzzles, setPuzzles] = useState(INITIAL_PUZZLES);
    const [messages, setMessages] = useState(INITIAL_MESSAGES);

    const puzzlePlaces = Object.keys(puzzles).reduce((acc, puzzleId) => {
        const placeId = puzzles[puzzleId];

        if (placeId) {
            return {...acc, [placeId]: +puzzleId};
        }

        return acc;
    }, {});

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };

    const handleDragCancel = () => {
        setActiveId(null);
    };

    const handleDragEnd = (event) => {
        if (event.over && event.over.id === 'wrapper') {
            setPuzzles({...puzzles, [event.active.id]: undefined});
        } else if (event.over && !puzzlePlaces[event.over.id]) {
            const newPuzzles = {...puzzles, [event.active.id]: event.over.id};
            setPuzzles(newPuzzles);

            if (event.over.id === getPuzzle(event.active.id)?.placeId && messages[event.active.id]) {
                const currentMessage = messages[event.active.id];
                setMessages({...messages, [event.active.id]: undefined});

                setTimeout(() => setActiveMessage(currentMessage), 300);
            } else if (
                event.over.id === getPuzzle(event.active.id)?.placeId
                && PUZZLES.every(({id, placeId}) => newPuzzles[id] === placeId)
            ) {
                setIsWin(true);
                setTimeout(next, 2000);
            }
        }

        setActiveId(null);
    };

    const handleContinue = () => {
        setActiveMessage(null);

        if (PUZZLES.every(({id, placeId}) => puzzles[id] === placeId)) {
            setIsWin(true);
            setTimeout(next, 1000);
        }
    };

    return (
        <Wrapper
            sizeRatio={sizeRatio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <AnimatePresence>
                {isRules && (
                    <BlackoutStyled
                        key="rules-blackout"
                        sizeRatio={sizeRatio}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
                {!!activeMessage && (
                    <ModalBlackoutStyled
                        key="message-blackout"
                        sizeRatio={sizeRatio}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <LightImageStyled sizeRatio={sizeRatio} src={LightImage} />
                    </ModalBlackoutStyled>
                )}
            </AnimatePresence>
            <TagsStyled sizeRatio={sizeRatio}>
                <Tag>этап 2</Tag>
                <Tag>лидер</Tag>
            </TagsStyled>
            <PanelsStyled sizeRatio={sizeRatio}>
                <AnimatePresence initial={false}>
                    {isRules ? (
                        <RulesPanelStyled
                            key="rules"
                            sizeRatio={sizeRatio}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            onStart={() => setIsRules(false)}
                        />
                    ) : (
                        <DndContext
                            onDragStart={handleDragStart}
                            onDragEnd={handleDragEnd}
                            onDragCancel={handleDragCancel}
                        >
                            <GamePanel
                                puzzles={puzzles}
                                puzzlePlaces={puzzlePlaces}
                                isWin={isWin}
                                activeId={activeId}
                                onCloseRules={() => setIsRules(true)}
                            />
                        </DndContext>
                    )}
                </AnimatePresence>
            </PanelsStyled>
            <AnimatePresence>
                {!!activeMessage && (
                    <ModalStyled
                        key="message"
                        sizeRatio={sizeRatio}
                        initial={{ opacity: 0, y: 'calc(-50% + 40px)' }}
                        animate={{ opacity: 1, y: '-50%' }}
                        exit={{ opacity: 0, y: 'calc(-50% + 40px)' }}
                        background={ModalBackImage}
                    >
                        <ModalTextStyled sizeRatio={sizeRatio}>{activeMessage}</ModalTextStyled>
                        <IconButtonStyled sizeRatio={sizeRatio} onClick={handleContinue}>
                            <CheckIconStyled
                                sizeRatio={sizeRatio}
                                viewBox="0 0 22 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.75 15L11.25 22L19.25 2"
                                    stroke="white"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </CheckIconStyled>
                        </IconButtonStyled>
                    </ModalStyled>
                )}
            </AnimatePresence>
        </Wrapper>
    )
}
