import {forwardRef} from "react";
import {AnimatePresence, motion} from "framer-motion";
import styled from '@emotion/styled';
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {Image} from "./Image";
import PuzzleBackVerticalImage from "../../assets/images/level2/puzzleBackVertical.png";
import PuzzleBackHorizontalImage from "../../assets/images/level2/puzzleBackHorizontal.png";

const PuzzleBoxStyled = styled.button`
    position: relative;
    outline: none;
    border: none;
    width: ${({sizeRatio}) => scalePx(60, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(60, sizeRatio)};
    background-color: transparent;
    border-radius: ${({sizeRatio}) => scalePx(10, sizeRatio)};
    touch-action: none;
    
    &:not(:disabled) {
        cursor: pointer;
    }
`;

const TYPE_TO_OFFSET = {
    vertical: [9, 0],
    horizontal: [0, 9],
};

const ImageStyled = styled(Image)`
    position: absolute;
    top: ${({sizeRatio, type}) => scalePx(-1 * TYPE_TO_OFFSET[type][0], sizeRatio)};
    left: ${({sizeRatio, type}) => scalePx(-1 * TYPE_TO_OFFSET[type][1], sizeRatio)};
    width: ${({sizeRatio, type}) => scalePx(60 + 2 * TYPE_TO_OFFSET[type][1], sizeRatio)};
    height: ${({sizeRatio, type}) => scalePx(60 + 2 * TYPE_TO_OFFSET[type][0], sizeRatio)};
`;

const PuzzleBoxBackdropStyled = styled(motion.div)`
    position: relative;
    width: ${({sizeRatio}) => scalePx(60, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(60, sizeRatio)};
    border-radius: ${({sizeRatio}) => scalePx(10, sizeRatio)};
`;

const TYPE_TO_IMAGE = {
    vertical: PuzzleBackVerticalImage,
    horizontal: PuzzleBackHorizontalImage,
};

const TYPE_TO_BACKDROP_OFFSET = {
    vertical: [18, 9],
    horizontal: [9, 18],
};

const ImageBackdropStyled = styled(Image)`
    position: absolute;
    top: ${({sizeRatio, type}) => scalePx(-1 * TYPE_TO_BACKDROP_OFFSET[type][0], sizeRatio)};
    left: ${({sizeRatio, type}) => scalePx(-1 * TYPE_TO_BACKDROP_OFFSET[type][1], sizeRatio)};
    width: ${({sizeRatio, type}) => scalePx(60 + 2 * TYPE_TO_BACKDROP_OFFSET[type][1], sizeRatio)};
    height: ${({sizeRatio, type}) => scalePx(60 + 2 * TYPE_TO_BACKDROP_OFFSET[type][0], sizeRatio)};
`;

const PuzzleBoxBackdrop = ({active, type, ...rest}) => {
    const sizeRatio = useSizeRatio();

    return (
        <AnimatePresence>
            {active && (
                <PuzzleBoxBackdropStyled
                    sizeRatio={sizeRatio}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    {...rest}
                >
                    <ImageBackdropStyled sizeRatio={sizeRatio} active={active} type={type} src={TYPE_TO_IMAGE[type]} />
                </PuzzleBoxBackdropStyled>
            )}
        </AnimatePresence>
    );
};

export const PuzzleBox = forwardRef(({active, image, type, ...rest}, ref) => {
    const sizeRatio = useSizeRatio();

    return (
        <PuzzleBoxStyled ref={ref} sizeRatio={sizeRatio} active={active} {...rest}>
            <ImageStyled sizeRatio={sizeRatio} type={type} src={image} />
        </PuzzleBoxStyled>
    );
})

PuzzleBox.Backdrop = PuzzleBoxBackdrop;