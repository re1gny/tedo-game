import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";

const TagStyled = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: ${({sizeRatio}) => scalePx(25, sizeRatio)};
    padding: ${({sizeRatio}) => `0 ${scalePx(10, sizeRatio)}`};
    font-size: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    line-height: ${({sizeRatio}) => scalePx(18.2, sizeRatio)};
    border-radius: ${({sizeRatio}) => scalePx(20, sizeRatio)};
    text-align: center;
    white-space: pre-wrap;
    font-weight: 600;
    background: #FC9744;
    color: #FFFFFF;
`;

export const Tag = (props) => {
    const sizeRatio = useSizeRatio();

    return <TagStyled sizeRatio={sizeRatio} {...props} />
}