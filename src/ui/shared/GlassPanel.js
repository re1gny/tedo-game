import styled from '@emotion/styled';
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {scalePx} from "../../utils/scalePx";

const WrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #FFFFFF80;
    backdrop-filter: blur(20px);
    background: #FFFFFF99;
    width: 100%;
    border-radius: ${({sizeRatio}) => scalePx(12, sizeRatio)};
`;

export const GlassPanel = ({ children, ...props }) => {
    const sizeRatio = useSizeRatio();

    return (
        <WrapperStyled sizeRatio={sizeRatio} {...props}>
            {children}
        </WrapperStyled>
    );
}
