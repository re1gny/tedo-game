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
    background-color: #0087CD;
    width: 100%;
    padding: ${({sizeRatio}) => `${scalePx(16, sizeRatio)} ${scalePx(20, sizeRatio)}`};
    border-radius: ${({sizeRatio}) => scalePx(12, sizeRatio)};
    font-size: ${({sizeRatio}) => scalePx(16, sizeRatio)};
    line-height: ${({sizeRatio}) => scalePx(19.36, sizeRatio)};
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    font-family: Inter, 'SB Sans Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const Button = ({ children, ...props }) => {
    const sizeRatio = useSizeRatio();

    return (
        <ButtonStyled sizeRatio={sizeRatio} {...props}>
            {children}
        </ButtonStyled>
    );
}
