import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";

const BlackoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: rgba(0, 15, 155, 0.7);
    backdrop-filter: blur(7.5px);
`;

export const Blackout = (props) => {
    const sizeRatio = useSizeRatio();

    return <BlackoutStyled sizeRatio={sizeRatio} {...props} />
}