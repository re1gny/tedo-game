import styled from '@emotion/styled';
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";

const LightBoxStyled = styled.button`
    outline: none;
    border: none;
    background: ${({active}) => active ? '#FFFFFF' : '#0048F4'};
    width: ${({sizeRatio}) => scalePx(81, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(81, sizeRatio)};
    border-radius: ${({sizeRatio}) => scalePx(13.58, sizeRatio)};
    box-shadow: ${({active, sizeRatio}) => active ? `0 0 ${scalePx(6, sizeRatio)} ${scalePx(3, sizeRatio)} #F5E1BE` : 'none'};
    cursor: pointer;
    transition: background-color 0.2s, box-shadow 0.2s;
    
    &:not(:disabled):active {
        box-shadow: ${({sizeRatio}) => `0 0 ${scalePx(6, sizeRatio)} ${scalePx(3, sizeRatio)} #F5E1BE`};
    }
`;

export const LightBox = ({active, ...rest}) => {
    const sizeRatio = useSizeRatio();

    return <LightBoxStyled sizeRatio={sizeRatio} active={active} {...rest} />;
}
