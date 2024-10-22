import styled from '@emotion/styled';
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";

const IconButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    color: #FFFFFF;
    background: #0048F4;
    width: ${({sizeRatio}) => scalePx(50, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(50, sizeRatio)};
    border-radius: ${({sizeRatio}) => scalePx(25, sizeRatio)};
    text-align: center;
    cursor: pointer;
`;

export const IconButton = ({ children, ...props }) => {
    const sizeRatio = useSizeRatio();

    return (
        <IconButtonStyled sizeRatio={sizeRatio} {...props}>
            {children}
        </IconButtonStyled>
    );
}
