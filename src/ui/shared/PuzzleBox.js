import styled from '@emotion/styled';
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {Image} from "./Image";

const PuzzleBoxStyled = styled.button`
    position: relative;
    outline: none;
    border: none;
    width: ${({sizeRatio}) => scalePx(60, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(60, sizeRatio)};
    background-color: ${({active}) => active ? `rgb(245, 225, 190, 0.78)` : 'transparent'};
    box-shadow: ${({active, sizeRatio}) => active ? `0 0 ${scalePx(6, sizeRatio)} ${scalePx(3, sizeRatio)} #F5E1BE` : 'none'};
    border-radius: ${({sizeRatio}) => scalePx(10, sizeRatio)};
    transition: background-color 0.2s, box-shadow 0.2s;
    
    &:not(:disabled) {
        cursor: pointer;
    }
`;

const ImageStyled = styled(Image)`
    position: absolute;
    top: ${({sizeRatio, tailTop}) => scalePx(-9 * tailTop, sizeRatio)};
    left: ${({sizeRatio, tailLeft}) => scalePx(-9 * tailLeft, sizeRatio)};
    width: ${({sizeRatio, tailLeft, tailRight}) => scalePx(60 + (tailLeft + tailRight) * 9, sizeRatio)};
    height: ${({sizeRatio, tailTop, tailBottom}) => scalePx(60 + (tailTop + tailBottom) * 9, sizeRatio)};
`;

export const PuzzleBox = ({active, image, tails = [false, false, false, false], ...rest}) => {
    const sizeRatio = useSizeRatio();

    const tailTop = tails[0] ? 1 : 0;
    const tailRight = tails[1] ? 1 : 0;
    const tailBottom = tails[2] ? 1 : 0;
    const tailLeft = tails[3] ? 1 : 0;

    return (
        <PuzzleBoxStyled sizeRatio={sizeRatio} active={active} {...rest}>
            <ImageStyled
                sizeRatio={sizeRatio}
                tailTop={tailTop}
                tailRight={tailRight}
                tailBottom={tailBottom}
                tailLeft={tailLeft}
                src={image}
            />
        </PuzzleBoxStyled>
    );
}
