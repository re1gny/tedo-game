import {motion} from "framer-motion";
import styled from "@emotion/styled";
import {useProgress} from "../../hooks/useProgress";
import {useSizeRatio} from "../../hooks/useSizeRatio";

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export function Leve3Game() {
    const sizeRatio = useSizeRatio();
    const {next} = useProgress();

    return (
        <Wrapper
            sizeRatio={sizeRatio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>Leve3Game</h1>
            <button onClick={next}>next</button>
        </Wrapper>
    )
}
