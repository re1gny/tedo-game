import styled from '@emotion/styled';
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {scalePx} from "../../utils/scalePx";

const WrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    width: 100%;
    border-radius: ${({sizeRatio}) => scalePx(12, sizeRatio)};
`;

export const Panel = ({ children, ...props }) => {
    const sizeRatio = useSizeRatio();

    return (
        <WrapperStyled sizeRatio={sizeRatio} {...props}>
            {children}
        </WrapperStyled>
    );
}
