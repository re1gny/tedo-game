import {motion} from "framer-motion";
import styled from "@emotion/styled";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {scalePx} from "../../utils/scalePx";

const Wrapper = styled.div`
    display: flex;
    width: ${({sizeRatio}) => scalePx(150, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(5, sizeRatio)};
    border-radius: ${({sizeRatio}) => scalePx(20, sizeRatio)};
    background: #FFFFFF;
    overflow: hidden;
`;

const Indicator = styled(motion.div)`
    height: 100%;
    border-radius: ${({sizeRatio}) => scalePx(20, sizeRatio)};
    background: #21A038;
`;

export function Progress({value, total, ...rest}) {
    const sizeRatio = useSizeRatio();

    return (
        <Wrapper sizeRatio={sizeRatio} {...rest}>
            <Indicator
                initial={false}
                animate={{ width: `${value/total * 100}%` }}
                sizeRatio={sizeRatio}
            />
        </Wrapper>
    );
}
