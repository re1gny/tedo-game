import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";

const TitleStyled = styled.p`
    font-size: ${({sizeRatio}) => scalePx(25, sizeRatio)};
    line-height: ${({sizeRatio}) => scalePx(32.5, sizeRatio)};
    white-space: pre-wrap;
    font-weight: 600;
    color: #FFFFFF;
    text-transform: uppercase;
`;

export const Title = (props) => {
    const sizeRatio = useSizeRatio();

    return <TitleStyled sizeRatio={sizeRatio} {...props} />
}