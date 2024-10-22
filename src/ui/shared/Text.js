import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";

const TextStyled = styled.p`
    font-size: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    line-height: ${({sizeRatio}) => scalePx(17.5, sizeRatio)};
    white-space: pre-wrap;
    font-weight: ${({bold}) => bold ? 600 : 400};
    color: #FFFFFF;
`;

const InlineTextStyled = TextStyled.withComponent('span');

export const Text = ({ inline, bold, ...rest }) => {
    const sizeRatio = useSizeRatio();

    const Element = inline ? InlineTextStyled : TextStyled;

    return <Element bold={bold} sizeRatio={sizeRatio} {...rest} />
}