import styled from '@emotion/styled';
import {motion} from "framer-motion";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {scalePx} from "../../utils/scalePx";

const WrapperStyled = styled(motion.div)`
    display: flex;
    flex-direction: column;
    background-color: #3C6EF5;
    width: 100%;
    border-radius: ${({sizeRatio}) => scalePx(25, sizeRatio)};
`;

export const Panel = ({ children, ...props }) => {
    const sizeRatio = useSizeRatio();

    return (
        <WrapperStyled sizeRatio={sizeRatio} {...props}>
            {children}
        </WrapperStyled>
    );
}
