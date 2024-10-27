import styled from '@emotion/styled';
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";

const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    color: #FFFFFF;
    background: #0048F4;
    width: 100%;
    height: ${({sizeRatio}) => scalePx(50, sizeRatio)};
    border-radius: ${({sizeRatio}) => scalePx(25, sizeRatio)};
    font-size: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    line-height: ${({sizeRatio}) => scalePx(18.2, sizeRatio)};
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    
    &:not(:disabled) {
        cursor: pointer;
    }
`;

export const Button = ({ children, ...props }) => {
    const sizeRatio = useSizeRatio();

    return (
        <ButtonStyled sizeRatio={sizeRatio} {...props}>
            {children}
        </ButtonStyled>
    );
}
