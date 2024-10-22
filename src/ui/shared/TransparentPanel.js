import styled from '@emotion/styled';
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {scalePx} from "../../utils/scalePx";

const WrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF33;
    backdrop-filter: blur(5px);
    width: 100%;
    border-radius: ${({sizeRatio}) => scalePx(25, sizeRatio)};
`;

export const TransparentPanel = ({ children, ...props }) => {
    const sizeRatio = useSizeRatio();

    return (
        <WrapperStyled sizeRatio={sizeRatio} {...props}>
            {children}
        </WrapperStyled>
    );
}
