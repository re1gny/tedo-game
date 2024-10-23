import styled from "@emotion/styled";
import {motion} from "framer-motion";
import {useSizeRatio} from "../../hooks/useSizeRatio";

const BlackoutStyled = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: rgba(0, 15, 155, 0.7);
    backdrop-filter: blur(7.5px);
`;

export const Blackout = (props) => {
    const sizeRatio = useSizeRatio();

    return <BlackoutStyled sizeRatio={sizeRatio} {...props} />
}