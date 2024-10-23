import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import styled from "@emotion/styled";
import {useProgress} from "../../hooks/useProgress";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import PanelBackImage from "../../assets/images/level3Game/panelBack.png";
import BackImage from "../../assets/images/level3/back1.png";
import ActiveBackImage from "../../assets/images/level3/back2.png";
import {scalePx} from "../../utils/scalePx";
import {IconButton} from "../shared/IconButton";
import {Panel} from "../shared/Panel";
import {Tag} from "../shared/Tag";
import {LightBox} from "../shared/LightBox";
import {RulesPanel} from "./Leve3Rules";
import {Blackout} from "../shared/Blackout";

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

const ActiveBackStyled = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${ActiveBackImage});
    background-size: 100% 100%;
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
    align-items: center;
    width: auto;
    background-image: ${({background}) => `url(${background})`};
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-top: auto;
    padding: ${({sizeRatio}) => `${scalePx(20, sizeRatio)} ${scalePx(20, sizeRatio)} ${scalePx(46, sizeRatio)}`};
    margin-bottom: ${({sizeRatio}) => scalePx(25, sizeRatio)};
    z-index: 2;
`;

const BoxesWrapperStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({sizeRatio}) => scalePx(16, sizeRatio)};
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

const INDEXES_ORDER = [4, 0, 1, 5, 8, 7, 6, 2, 3];

export function Leve3Game() {
    const sizeRatio = useSizeRatio();
    const {next} = useProgress();
    const [activeIndexes, setActiveIndexes] = useState([]);
    const [isWin, setIsWin] = useState(false);
    const [isRules, setIsRules] = useState(false);

    const handleClick = (index) => {
        if (activeIndexes.includes(index)) {
            return;
        }

        const nextIndex = INDEXES_ORDER[activeIndexes.length];
        const resultIndexes = nextIndex === index ? [...activeIndexes, index] : [];

        setActiveIndexes(resultIndexes);

        if (resultIndexes.length === INDEXES_ORDER.length) {
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
                {isWin && (
                    <ActiveBackStyled
                        sizeRatio={sizeRatio}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
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
                <Tag>этап 3</Tag>
                <Tag>личность</Tag>
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
                            background={PanelBackImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <BoxesWrapperStyled sizeRatio={sizeRatio}>
                                {Array(9).fill(null).map((_, index) => (
                                    <LightBox
                                        key={index}
                                        active={activeIndexes.includes(index)}
                                        onClick={() => handleClick(index)}
                                    />
                                ))}
                            </BoxesWrapperStyled>
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
