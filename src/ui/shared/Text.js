import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";

const SIZE_TO_FONT_SIZE = {
    s: 12,
    m: 16,
    l: 20,
}

const SIZE_TO_LINE_HEIGHT = {
    s: 15.05,
    m: 20.8,
    l: 25.08,
}

const TextStyled = styled.p`
    font-size: ${({size, sizeRatio}) => scalePx(SIZE_TO_FONT_SIZE[size], sizeRatio)};
    line-height: ${({size, sizeRatio}) => scalePx(SIZE_TO_LINE_HEIGHT[size], sizeRatio)};
    white-space: pre-wrap;
    font-weight: ${({bold}) => bold ? 700 : 400};
    color: #495762;
`;

export const Text = ({ size = 'm', bold, ...rest }) => {
    const sizeRatio = useSizeRatio();

    return <TextStyled size={size} bold={bold} sizeRatio={sizeRatio} {...rest} />
}