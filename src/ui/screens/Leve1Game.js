import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import styled from "@emotion/styled";
import {useProgress} from "../../hooks/useProgress";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {scalePx, scalePxTemplate} from "../../utils/scalePx";
import {IconButton} from "../shared/IconButton";
import {Panel} from "../shared/Panel";
import {Tag} from "../shared/Tag";
import {RulesPanel} from "./Leve1Rules";
import {Blackout} from "../shared/Blackout";
import {LineBox} from "../shared/LineBox";
import {Image} from "../shared/Image";
import PanelBackImage from "../../assets/images/level1Game/panelBack.png";
import BackImage from "../../assets/images/level1/back.png";
import Person1Image from "../../assets/images/level1Game/person1.svg";
import Person2Image from "../../assets/images/level1Game/person2.svg";
import Person3Image from "../../assets/images/level1Game/person3.svg";
import Task1Image from "../../assets/images/level1Game/task1.svg";
import Task2Image from "../../assets/images/level1Game/task2.svg";
import Task3Image from "../../assets/images/level1Game/task3.svg";
import Person3Line1Image from "../../assets/images/level1Game/lines/person3Line1.svg";
import Person3Line2Image from "../../assets/images/level1Game/lines/person3Line2.svg";
import Person3Line3Image from "../../assets/images/level1Game/lines/person3Line3.svg";
import Person3Line4Image from "../../assets/images/level1Game/lines/person3Line4.svg";
import Person3Line5Image from "../../assets/images/level1Game/lines/person3Line5.svg";
import Person3Line6Image from "../../assets/images/level1Game/lines/person3Line6.svg";
import Person3Line7Image from "../../assets/images/level1Game/lines/person3Line7.svg";
import Person3Line8Image from "../../assets/images/level1Game/lines/person3Line8.svg";
import Person3Line9Image from "../../assets/images/level1Game/lines/person3Line9.svg";
import Person3Line10Image from "../../assets/images/level1Game/lines/person3Line10.svg";
import Person2Line1Image from "../../assets/images/level1Game/lines/person2Line1.svg";
import Person2Line2Image from "../../assets/images/level1Game/lines/person2Line2.svg";
import Person2Line3Image from "../../assets/images/level1Game/lines/person2Line3.svg";
import Person2Line4Image from "../../assets/images/level1Game/lines/person2Line4.svg";
import Person2Line5Image from "../../assets/images/level1Game/lines/person2Line5.svg";
import Person2Line6Image from "../../assets/images/level1Game/lines/person2Line6.svg";
import Person2Line7Image from "../../assets/images/level1Game/lines/person2Line7.svg";
import Person2Line8Image from "../../assets/images/level1Game/lines/person2Line8.svg";
import Person2Line9Image from "../../assets/images/level1Game/lines/person2Line9.svg";
import Person2Line10Image from "../../assets/images/level1Game/lines/person2Line10.svg";
import Person2Line11Image from "../../assets/images/level1Game/lines/person2Line11.svg";
import Person1Line1Image from "../../assets/images/level1Game/lines/person1Line1.svg";
import Person1Line2Image from "../../assets/images/level1Game/lines/person1Line2.svg";
import Person1Line3Image from "../../assets/images/level1Game/lines/person1Line3.svg";
import Person1Line4Image from "../../assets/images/level1Game/lines/person1Line4.svg";
import Person1Line5Image from "../../assets/images/level1Game/lines/person1Line5.svg";
import Person1Line6Image from "../../assets/images/level1Game/lines/person1Line6.svg";
import Person1Line7Image from "../../assets/images/level1Game/lines/person1Line7.svg";
import Person1Line8Image from "../../assets/images/level1Game/lines/person1Line8.svg";
import Person1Line9Image from "../../assets/images/level1Game/lines/person1Line9.svg";
import Person1Subline1Image from "../../assets/images/level1Game/sublines/person1Subline1.svg";
import Person1Subline2Image from "../../assets/images/level1Game/sublines/person1Subline2.svg";
import Person1Subline3Image from "../../assets/images/level1Game/sublines/person1Subline3.svg";
import Person1Subline4Image from "../../assets/images/level1Game/sublines/person1Subline4.svg";
import Person1Subline5Image from "../../assets/images/level1Game/sublines/person1Subline5.svg";
import Person1Subline6Image from "../../assets/images/level1Game/sublines/person1Subline6.svg";
import Person1Subline7Image from "../../assets/images/level1Game/sublines/person1Subline7.svg";
import Person1Subline8Image from "../../assets/images/level1Game/sublines/person1Subline8.svg";
import Person1Subline9Image from "../../assets/images/level1Game/sublines/person1Subline9.svg";
import Person1Subline10Image from "../../assets/images/level1Game/sublines/person1Subline10.svg";
import Person2Subline1Image from "../../assets/images/level1Game/sublines/person2Subline1.svg";
import Person2Subline2Image from "../../assets/images/level1Game/sublines/person2Subline2.svg";
import Person2Subline3Image from "../../assets/images/level1Game/sublines/person2Subline3.svg";
import Person2Subline4Image from "../../assets/images/level1Game/sublines/person2Subline4.svg";
import Person2Subline5Image from "../../assets/images/level1Game/sublines/person2Subline5.svg";
import Person2Subline6Image from "../../assets/images/level1Game/sublines/person2Subline6.svg";
import Person2Subline7Image from "../../assets/images/level1Game/sublines/person2Subline7.svg";
import Person2Subline8Image from "../../assets/images/level1Game/sublines/person2Subline8.svg";
import Person2Subline9Image from "../../assets/images/level1Game/sublines/person2Subline9.svg";
import Person2Subline10Image from "../../assets/images/level1Game/sublines/person2Subline10.svg";
import Person2Subline11Image from "../../assets/images/level1Game/sublines/person2Subline11.svg";
import Person2Subline12Image from "../../assets/images/level1Game/sublines/person2Subline12.svg";
import Person3Subline1Image from "../../assets/images/level1Game/sublines/person3Subline1.svg";
import Person3Subline2Image from "../../assets/images/level1Game/sublines/person3Subline2.svg";
import Person3Subline3Image from "../../assets/images/level1Game/sublines/person3Subline3.svg";
import Person3Subline4Image from "../../assets/images/level1Game/sublines/person3Subline4.svg";
import Person3Subline5Image from "../../assets/images/level1Game/sublines/person3Subline5.svg";
import Person3Subline6Image from "../../assets/images/level1Game/sublines/person3Subline6.svg";
import Person3Subline7Image from "../../assets/images/level1Game/sublines/person3Subline7.svg";
import Person3Subline8Image from "../../assets/images/level1Game/sublines/person3Subline8.svg";
import Person3Subline9Image from "../../assets/images/level1Game/sublines/person3Subline9.svg";
import Person3Subline10Image from "../../assets/images/level1Game/sublines/person3Subline10.svg";
import Person3Subline11Image from "../../assets/images/level1Game/sublines/person3Subline11.svg";

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
    background-image: ${({background}) => `url(${background})`};
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-top: auto;
    padding: ${({sizeRatio}) => `${scalePx(20, sizeRatio)} ${scalePx(24, sizeRatio)} ${scalePx(76, sizeRatio)}`};
    margin-bottom: ${({sizeRatio}) => scalePx(25, sizeRatio)};
    z-index: 2;
`;

const LinesWrapperStyled = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${({sizeRatio}) => scalePx(9, sizeRatio)};
`;

const LinesBackdropWrapperStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${({sizeRatio}) => scalePx(9, sizeRatio)};
`;

const SublineImagesWraperStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const SublineImageStyled = styled(Image)`
    position: absolute;
    z-index: 2;
`;

const Person1Subline1ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(44, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(21, sizeRatio)};
`;

const Person1Subline2ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(98, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(21, sizeRatio)};
`;

const Person1Subline3ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(18, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(98, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(69, sizeRatio)};
`;

const Person1Subline4ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(131, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(43, sizeRatio)};
`;

const Person1Subline5ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(153, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(83, sizeRatio)};
`;

const Person1Subline6ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(187, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(43, sizeRatio)};
`;

const Person1Subline7ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(208, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(21, sizeRatio)};
`;

const Person1Subline8ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(263, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(21, sizeRatio)};
`;

const Person1Subline9ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(318, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(21, sizeRatio)};
`;

const Person1Subline10ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(22, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(374, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(21, sizeRatio)};
`;

const Person2Subline1ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(44, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(131, sizeRatio)};
`;

const Person2Subline2ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(18, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(69, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(153, sizeRatio)};
`;

const Person2Subline3ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(98, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(131, sizeRatio)};
`;

const Person2Subline4ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(153, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(131, sizeRatio)};
`;

const Person2Subline5ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(208, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(131, sizeRatio)};
`;

const Person2Subline6ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(18, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(234, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(153, sizeRatio)};
`;

const Person2Subline7ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(248, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(98, sizeRatio)};
`;

const Person2Subline8ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(263, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(76, sizeRatio)};
`;

const Person2Subline9ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(318, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(76, sizeRatio)};
`;

const Person2Subline10ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(344, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(98, sizeRatio)};
`;

const Person2Subline11ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(18, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(344, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(154, sizeRatio)};
`;

const Person2Subline12ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(22, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(374, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(131, sizeRatio)};
`;

const Person3Subline1ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(44, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(241, sizeRatio)};
`;

const Person3Subline2ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(98, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(241, sizeRatio)};
`;

const Person3Subline3ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(5, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(133, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(208, sizeRatio)};
`;

const Person3Subline4ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(153, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(186, sizeRatio)};
`;

const Person3Subline5ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(5, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(187, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(208, sizeRatio)};
`;

const Person3Subline6ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(208, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(241, sizeRatio)};
`;

const Person3Subline7ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(263, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(241, sizeRatio)};
`;

const Person3Subline8ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(18, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(289, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(209, sizeRatio)};
`;

const Person3Subline9ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(18, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(289, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(153, sizeRatio)};
`;

const Person3Subline10ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(318, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(241, sizeRatio)};
`;

const Person3Subline11ImageStyled = styled(SublineImageStyled)`
    width: ${({sizeRatio}) => scalePx(4, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(22, sizeRatio)};
    top: ${({sizeRatio}) => scalePx(374, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(241, sizeRatio)};
`;

const PersonLineBoxStyled = styled(LineBox)`
    position: relative;
    z-index: 3;
`;

const PathLineBoxStyled = styled(LineBox)`
    position: relative;
    z-index: 3;
`;

const TaskLineBoxStyled = styled(LineBox)`
    position: relative;
    z-index: 1;
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

const PERSON_1_PATH = [0, 1, 5, 6, 10, 11, 15, 20, 25];
const PERSON_2_PATH = [2, 3, 7, 12, 16, 17, 18, 21, 26, 27, 28];
const PERSON_3_PATH = [4, 8, 9, 13, 14, 19, 22, 23, 24, 29];

const PERSON_TO_PATH = {
    1: PERSON_1_PATH,
    2: PERSON_2_PATH,
    3: PERSON_3_PATH,
};

const BOXES = {
    0: {
        initialRotate: 1,
        correctRotates: [0, 2],
        image: Person1Line1Image,
        person: 1,
    },
    1: {
        initialRotate: 0,
        correctRotates: [0],
        image: Person1Line2Image,
        person: 1,
    },
    2: {
        initialRotate: 0,
        correctRotates: [0],
        image: Person2Line1Image,
        person: 2,
    },
    3: {
        initialRotate: 0,
        correctRotates: [0],
        image: Person2Line2Image,
        person: 2,
    },
    4: {
        initialRotate: 0,
        correctRotates: [0, 2],
        image: Person3Line1Image,
        person: 3,
    },
    5: {
        initialRotate: 2,
        correctRotates: [0],
        image: Person1Line3Image,
        person: 1,
    },
    6: {
        initialRotate: 2,
        correctRotates: [0],
        image: Person1Line4Image,
        person: 1,
    },
    7: {
        initialRotate: 1,
        correctRotates: [0, 2],
        image: Person2Line3Image,
        person: 2,
    },
    8: {
        initialRotate: 0,
        correctRotates: [0],
        image: Person3Line3Image,
        person: 3,
    },
    9: {
        initialRotate: 2,
        correctRotates: [0],
        image: Person3Line2Image,
        person: 3,
    },
    10: {
        initialRotate: 0,
        correctRotates: [0],
        image: Person1Line5Image,
        person: 1,
    },
    11: {
        initialRotate: 1,
        correctRotates: [0],
        image: Person1Line6Image,
        person: 1,
    },
    12: {
        initialRotate: 0,
        correctRotates: [0, 2],
        image: Person2Line4Image,
        person: 2,
    },
    13: {
        initialRotate: 2,
        correctRotates: [0],
        image: Person3Line4Image,
        person: 3,
    },
    14: {
        initialRotate: 2,
        correctRotates: [0],
        image: Person3Line5Image,
        person: 3,
    },
    15: {
        initialRotate: 1,
        correctRotates: [0, 2],
        image: Person1Line7Image,
        person: 1,
    },
    16: {
        initialRotate: 2,
        correctRotates: [0],
        image: Person2Line7Image,
        person: 2,
    },
    17: {
        initialRotate: 2,
        correctRotates: [0],
        image: Person2Line5Image,
        person: 2,
    },
    18: {
        initialRotate: 0,
        correctRotates: [0],
        image: Person2Line6Image,
        person: 2,
    },
    19: {
        initialRotate: 1,
        correctRotates: [0, 2],
        image: Person3Line6Image,
        person: 3,
    },
    20: {
        initialRotate: 0,
        correctRotates: [0, 2],
        image: Person1Line8Image,
        person: 1,
    },
    21: {
        initialRotate: 0,
        correctRotates: [0, 2],
        image: Person2Line8Image,
        person: 2,
    },
    22: {
        initialRotate: 2,
        correctRotates: [0],
        image: Person3Line9Image,
        person: 3,
    },
    23: {
        initialRotate: 1,
        correctRotates: [0, 2],
        image: Person3Line8Image,
        person: 3,
    },
    24: {
        initialRotate: 2,
        correctRotates: [0],
        image: Person3Line7Image,
        person: 3,
    },
    25: {
        initialRotate: 0,
        correctRotates: [0, 2],
        image: Person1Line9Image,
        person: 1,
    },
    26: {
        initialRotate: 2,
        correctRotates: [0],
        image: Person2Line9Image,
        person: 2,
    },
    27: {
        initialRotate: 0,
        correctRotates: [0],
        image: Person2Line10Image,
        person: 2,
    },
    28: {
        initialRotate: 0,
        correctRotates: [0],
        image: Person2Line11Image,
        person: 2,
    },
    29: {
        initialRotate: 1,
        correctRotates: [0, 2],
        image: Person3Line10Image,
        person: 3,
    },
};

const LINES = new Array(30).fill(null).map((_, index) => index);

const INITIAL_ROTATES = LINES.reduce((acc, item) => ({ ...acc, [item]: BOXES[item].initialRotate }), {});

export function Leve1Game() {
    const sizeRatio = useSizeRatio();
    const {next} = useProgress();
    const [rotates, setRotates] = useState(INITIAL_ROTATES);
    const [isWin, setIsWin] = useState(false);
    const [isRules, setIsRules] = useState(false);

    const checkIsActive = (person, currentRotates) => {
        return PERSON_TO_PATH[person].every(item => BOXES[item].correctRotates.includes(currentRotates[item] % 4));
    };

    const handleClick = (item) => {
        const newRotate = rotates[item] + 1;
        const newRotates = { ...rotates, [item]: newRotate };

        setRotates(newRotates);

        if (
            checkIsActive(1, newRotates)
            && checkIsActive(2, newRotates)
            && checkIsActive(3, newRotates)
        ) {
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
                <Tag>этап 1</Tag>
                <Tag>профессионал</Tag>
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
                            <LinesWrapperStyled sizeRatio={sizeRatio}>
                                <LinesBackdropWrapperStyled sizeRatio={sizeRatio}>
                                    <LineBox.Backdrop active={checkIsActive(1, rotates)} />
                                    <div />
                                    <LineBox.Backdrop active={checkIsActive(2, rotates)} />
                                    <div />
                                    <LineBox.Backdrop active={checkIsActive(3, rotates)} />
                                    {LINES.map((item) => (
                                        <LineBox.Backdrop
                                            key={item}
                                            active={checkIsActive(BOXES[item].person, rotates)}
                                        />
                                    ))}
                                    <LineBox.Backdrop active={checkIsActive(1, rotates)} />
                                    <div />
                                    <LineBox.Backdrop active={checkIsActive(2, rotates)} />
                                    <div />
                                    <LineBox.Backdrop active={checkIsActive(3, rotates)} />
                                </LinesBackdropWrapperStyled>
                                <SublineImagesWraperStyled sizeRatio={sizeRatio}>
                                    <Person1Subline1ImageStyled sizeRatio={sizeRatio} src={Person1Subline1Image} />
                                    <Person1Subline2ImageStyled sizeRatio={sizeRatio} src={Person1Subline2Image} />
                                    <Person1Subline3ImageStyled sizeRatio={sizeRatio} src={Person1Subline3Image} />
                                    <Person1Subline4ImageStyled sizeRatio={sizeRatio} src={Person1Subline4Image} />
                                    <Person1Subline5ImageStyled sizeRatio={sizeRatio} src={Person1Subline5Image} />
                                    <Person1Subline6ImageStyled sizeRatio={sizeRatio} src={Person1Subline6Image} />
                                    <Person1Subline7ImageStyled sizeRatio={sizeRatio} src={Person1Subline7Image} />
                                    <Person1Subline8ImageStyled sizeRatio={sizeRatio} src={Person1Subline8Image} />
                                    <Person1Subline9ImageStyled sizeRatio={sizeRatio} src={Person1Subline9Image} />
                                    <Person1Subline10ImageStyled sizeRatio={sizeRatio} src={Person1Subline10Image} />
                                    <Person2Subline1ImageStyled sizeRatio={sizeRatio} src={Person2Subline1Image} />
                                    <Person2Subline2ImageStyled sizeRatio={sizeRatio} src={Person2Subline2Image} />
                                    <Person2Subline3ImageStyled sizeRatio={sizeRatio} src={Person2Subline3Image} />
                                    <Person2Subline4ImageStyled sizeRatio={sizeRatio} src={Person2Subline4Image} />
                                    <Person2Subline5ImageStyled sizeRatio={sizeRatio} src={Person2Subline5Image} />
                                    <Person2Subline6ImageStyled sizeRatio={sizeRatio} src={Person2Subline6Image} />
                                    <Person2Subline7ImageStyled sizeRatio={sizeRatio} src={Person2Subline7Image} />
                                    <Person2Subline8ImageStyled sizeRatio={sizeRatio} src={Person2Subline8Image} />
                                    <Person2Subline9ImageStyled sizeRatio={sizeRatio} src={Person2Subline9Image} />
                                    <Person2Subline10ImageStyled sizeRatio={sizeRatio} src={Person2Subline10Image} />
                                    <Person2Subline11ImageStyled sizeRatio={sizeRatio} src={Person2Subline11Image} />
                                    <Person2Subline12ImageStyled sizeRatio={sizeRatio} src={Person2Subline12Image} />
                                    <Person3Subline1ImageStyled sizeRatio={sizeRatio} src={Person3Subline1Image} />
                                    <Person3Subline2ImageStyled sizeRatio={sizeRatio} src={Person3Subline2Image} />
                                    <Person3Subline3ImageStyled sizeRatio={sizeRatio} src={Person3Subline3Image} />
                                    <Person3Subline4ImageStyled sizeRatio={sizeRatio} src={Person3Subline4Image} />
                                    <Person3Subline5ImageStyled sizeRatio={sizeRatio} src={Person3Subline5Image} />
                                    <Person3Subline6ImageStyled sizeRatio={sizeRatio} src={Person3Subline6Image} />
                                    <Person3Subline7ImageStyled sizeRatio={sizeRatio} src={Person3Subline7Image} />
                                    <Person3Subline8ImageStyled sizeRatio={sizeRatio} src={Person3Subline8Image} />
                                    <Person3Subline9ImageStyled sizeRatio={sizeRatio} src={Person3Subline9Image} />
                                    <Person3Subline10ImageStyled sizeRatio={sizeRatio} src={Person3Subline10Image} />
                                    <Person3Subline11ImageStyled sizeRatio={sizeRatio} src={Person3Subline11Image} />
                                </SublineImagesWraperStyled>
                                <PersonLineBoxStyled image={Person1Image} color="dark" disabled />
                                <div />
                                <PersonLineBoxStyled image={Person2Image} color="dark" disabled />
                                <div />
                                <PersonLineBoxStyled image={Person3Image} color="dark" disabled />
                                {LINES.map((item) => (
                                    <PathLineBoxStyled
                                        key={item}
                                        image={BOXES[item].image}
                                        rotate={rotates[item]}
                                        color="light"
                                        disabled={isWin}
                                        onClick={() => handleClick(item)}
                                    />
                                ))}
                                <TaskLineBoxStyled image={Task1Image} color="dark" disabled />
                                <div />
                                <TaskLineBoxStyled image={Task2Image} color="dark" disabled />
                                <div />
                                <TaskLineBoxStyled image={Task3Image} color="dark" disabled />
                            </LinesWrapperStyled>
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
