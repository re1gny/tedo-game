import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import styled from "@emotion/styled";
import {useProgress} from "../../hooks/useProgress";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {scalePx} from "../../utils/scalePx";
import {IconButton} from "../shared/IconButton";
import {Panel} from "../shared/Panel";
import {Tag} from "../shared/Tag";
import {RulesPanel} from "./Leve2Rules";
import {Blackout} from "../shared/Blackout";
import {PuzzleBox} from "../shared/PuzzleBox";
import BackImage from "../../assets/images/level2/back.png";
import PuzzleBackImage from "../../assets/images/level2Game/puzzleBack.png";
import Puzzle1Image from "../../assets/images/level2Game/puzzles/puzzle1.png";
import Puzzle2Image from "../../assets/images/level2Game/puzzles/puzzle2.png";
import Puzzle3Image from "../../assets/images/level2Game/puzzles/puzzle3.png";
import Puzzle4Image from "../../assets/images/level2Game/puzzles/puzzle4.png";
import Puzzle5Image from "../../assets/images/level2Game/puzzles/puzzle5.png";
import Puzzle6Image from "../../assets/images/level2Game/puzzles/puzzle6.png";
import Puzzle7Image from "../../assets/images/level2Game/puzzles/puzzle7.png";
import Puzzle8Image from "../../assets/images/level2Game/puzzles/puzzle8.png";
import PuzzlePlace1Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace1.svg";
import PuzzlePlace2Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace2.svg";
import PuzzlePlace3Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace3.svg";
import PuzzlePlace4Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace4.svg";
import PuzzlePlace5Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace5.svg";
import PuzzlePlace6Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace6.svg";
import PuzzlePlace7Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace7.svg";
import PuzzlePlace8Image from "../../assets/images/level2Game/puzzlePlaces/puzzlePlace8.svg";

const Wrapper = styled(motion.div)`
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

const TagsStyled = styled.div`
    flex-shrink: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 2;
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

const PuzzleImageStyled = styled.div`
    flex-grow: 1;
    position: relative;
    width: 100%;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    background-image: url(${PuzzleBackImage});
    background-size: 100% auto;
    background-repeat: no-repeat;
`;

const PuzzlePlace1BoxStyled = styled(PuzzleBox)`
    position: absolute;
    top: ${({sizeRatio}) => scalePx(41, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(56, sizeRatio)};
`;

const PuzzlePlace2BoxStyled = styled(PuzzleBox)`
    position: absolute;
    top: ${({sizeRatio}) => scalePx(101, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(116, sizeRatio)};
`;

const PuzzlePlace3BoxStyled = styled(PuzzleBox)`
    position: absolute;
    top: ${({sizeRatio}) => scalePx(101, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(176, sizeRatio)};
`;

const PuzzlePlace4BoxStyled = styled(PuzzleBox)`
    position: absolute;
    top: ${({sizeRatio}) => scalePx(101, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(236, sizeRatio)};
`;

const PuzzlePlace5BoxStyled = styled(PuzzleBox)`
    position: absolute;
    top: ${({sizeRatio}) => scalePx(161, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(56, sizeRatio)};
`;

const PuzzlePlace6BoxStyled = styled(PuzzleBox)`
    position: absolute;
    top: ${({sizeRatio}) => scalePx(161, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(116, sizeRatio)};
`;

const PuzzlePlace7BoxStyled = styled(PuzzleBox)`
    position: absolute;
    top: ${({sizeRatio}) => scalePx(161, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(176, sizeRatio)};
`;

const PuzzlePlace8BoxStyled = styled(PuzzleBox)`
    position: absolute;
    top: ${({sizeRatio}) => scalePx(221, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(236, sizeRatio)};
`;

const PuzzlesWrapperStyled = styled.div`
    flex-shrink: 0;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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

export function Leve2Game() {
    const sizeRatio = useSizeRatio();
    const {next} = useProgress();
    const [isWin, setIsWin] = useState(false);
    const [isRules, setIsRules] = useState(false);

    const handleDrop = (item) => {
        if (false) {
            setIsWin(true);
            setTimeout(next, 2000);
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
                        sizeRatio={sizeRatio}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
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
                        <PanelStyled
                            key="game"
                            sizeRatio={sizeRatio}
                            color="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <PuzzleImageStyled sizeRatio={sizeRatio}>
                                <PuzzlePlace1BoxStyled
                                    sizeRatio={sizeRatio}
                                    image={PuzzlePlace1Image}
                                    tails={[true, false, true, false]}
                                    disabled
                                />
                                <PuzzlePlace2BoxStyled
                                    sizeRatio={sizeRatio}
                                    image={PuzzlePlace2Image}
                                    tails={[true, false, true, false]}
                                    disabled
                                />
                                <PuzzlePlace3BoxStyled
                                    sizeRatio={sizeRatio}
                                    image={PuzzlePlace3Image}
                                    tails={[false, true, false, true]}
                                    disabled
                                />
                                <PuzzlePlace4BoxStyled
                                    sizeRatio={sizeRatio}
                                    image={PuzzlePlace4Image}
                                    tails={[true, false, true, false]}
                                    disabled
                                />
                                <PuzzlePlace5BoxStyled
                                    sizeRatio={sizeRatio}
                                    image={PuzzlePlace5Image}
                                    tails={[true, false, true, false]}
                                    disabled
                                />
                                <PuzzlePlace6BoxStyled
                                    sizeRatio={sizeRatio}
                                    image={PuzzlePlace6Image}
                                    tails={[false, true, false, true]}
                                    disabled
                                />
                                <PuzzlePlace7BoxStyled
                                    sizeRatio={sizeRatio}
                                    image={PuzzlePlace7Image}
                                    tails={[true, false, true, false]}
                                    disabled
                                />
                                <PuzzlePlace8BoxStyled
                                    sizeRatio={sizeRatio}
                                    image={PuzzlePlace8Image}
                                    tails={[true, false, true, false]}
                                    disabled
                                />
                            </PuzzleImageStyled>
                            <PuzzlesWrapperStyled sizeRatio={sizeRatio}>
                                <PuzzleBox image={Puzzle1Image} tails={[false, true, false, true]} />
                                <PuzzleBox image={Puzzle2Image} tails={[true, false, true, false]} />
                                <PuzzleBox image={Puzzle3Image} tails={[false, true, false, true]} />
                                <PuzzleBox image={Puzzle4Image} tails={[true, false, true, false]} />
                                <PuzzleBox image={Puzzle5Image} tails={[true, false, true, false]} />
                                <PuzzleBox image={Puzzle6Image} tails={[true, false, true, false]} />
                                <PuzzleBox image={Puzzle7Image} tails={[true, false, true, false]} />
                                <PuzzleBox image={Puzzle8Image} tails={[true, false, true, false]} />
                            </PuzzlesWrapperStyled>
                            <IconButtonStyled sizeRatio={sizeRatio} onClick={() => setIsRules(true)}>
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
                    )}
                </AnimatePresence>
            </PanelsStyled>
        </Wrapper>
    )
}
