import styled from '@emotion/styled';
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {Image} from "./Image";

const SIZE_TO_PIXELS = {
    s: 40,
    m: 46,
};

const COLOR_TO_HEX = {
    light: '#0048F4',
    dark: '#000F9B',
};

const LineBoxStyled = styled.button`
    position: relative;
    outline: none;
    border: none;
    background-color: ${({color}) => COLOR_TO_HEX[color]};
    width: ${({size, sizeRatio}) => scalePx(SIZE_TO_PIXELS[size], sizeRatio)};
    height: ${({size, sizeRatio}) => scalePx(SIZE_TO_PIXELS[size], sizeRatio)};
    border-radius: ${({sizeRatio}) => scalePx(10, sizeRatio)};
    transform: ${({rotate}) => `rotate(${rotate * 90}deg)`};
    overflow: hidden;
    transition: transform 0.2s;

    &:not(:disabled) {
        cursor: pointer;
    }
`;

const ImageStyled = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const LineBoxBackdropStyled = styled.div`
    position: relative;
    width: ${({size, sizeRatio}) => scalePx(SIZE_TO_PIXELS[size], sizeRatio)};
    height: ${({size, sizeRatio}) => scalePx(SIZE_TO_PIXELS[size], sizeRatio)};
    background: ${({active}) => active ? `rgba(245, 225, 190, 0.6)` : 'transparent'};
    box-shadow: ${({active, sizeRatio}) => active ? `0 0 ${scalePx(20, sizeRatio)} ${scalePx(10, sizeRatio)} rgba(245, 225, 190, 0.8)` : 'none'};
    border-radius: ${({sizeRatio}) => scalePx(10, sizeRatio)};
    transition: background 0.2s, box-shadow 0.2s;
`;

const LineBoxBackdrop = ({active, size = 'm', ...rest}) => {
    const sizeRatio = useSizeRatio();

    return (
        <LineBoxBackdropStyled
            sizeRatio={sizeRatio}
            active={active}
            size={size}
            {...rest}
        />
    );
}

export const LineBox = ({rotate = 0, size = 'm', color, image, ...rest}) => {
    const sizeRatio = useSizeRatio();

    return (
        <LineBoxStyled
            sizeRatio={sizeRatio}
            size={size}
            color={color}
            rotate={rotate}
            {...rest}
        >
            <ImageStyled sizeRatio={sizeRatio} src={image} />
        </LineBoxStyled>
    );
}

LineBox.Backdrop = LineBoxBackdrop;