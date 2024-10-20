import styled from "@emotion/styled";
import {motion} from "framer-motion";

const ImageStyled = styled(motion.img)`
    object-fit: contain;
    pointer-events: none;
    touch-action: none;
    user-select: none;
    -webkit-user-drag: none;
`;

export function Image(props) {
    return <ImageStyled {...props} />
}
