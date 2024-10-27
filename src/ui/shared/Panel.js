import styled from '@emotion/styled';
import {motion} from "framer-motion";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {scalePx} from "../../utils/scalePx";

const COLOR_TO_HEX = {
    empty: 'transparent',
    filled: '#3C6EF5',
};

const WrapperStyled = styled(motion.div)`
    display: flex;
    flex-direction: column;
    background-color: ${({color}) => COLOR_TO_HEX[color]};
    width: 100%;
    border-radius: ${({sizeRatio}) => scalePx(25, sizeRatio)};
`;

export const Panel = ({ children, color = 'filled', ...props }) => {
    const sizeRatio = useSizeRatio();

    return (
        <WrapperStyled sizeRatio={sizeRatio} color={color} {...props}>
            {children}
        </WrapperStyled>
    );
}
