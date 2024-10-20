import {useRef} from 'react'
import styled from '@emotion/styled'
import {SizeRatioProvider} from "./SizeRatioProvider";
import {scalePx} from "../utils/scalePx";

const TARGET_WIDTH = 375
const TARGET_HEIGHT = 677
const MIN_MOCKUP_WIDTH = 450

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    @media (min-width: ${MIN_MOCKUP_WIDTH}px) {
        padding: 20px;
    }
`

const WrapperInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const Content = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: translate(0, 0);
    

    @media (min-width: ${MIN_MOCKUP_WIDTH}px) {
        max-width: ${({sizeRatio}) => scalePx(TARGET_WIDTH, sizeRatio)};
        max-height: ${({sizeRatio}) => scalePx(TARGET_HEIGHT, sizeRatio)};
        border-radius: 10px;
        box-sizing: content-box;
        border: 2px solid #000000;
    }
`

export function ScreenTemplate(props) {
    const {children} = props
    const wrapperInnerRef = useRef()

    return (
        <SizeRatioProvider target={wrapperInnerRef} targetWidth={TARGET_WIDTH} targetHeight={TARGET_HEIGHT}>
            {(sizeRatio) => (
                <Wrapper>
                    <WrapperInner ref={wrapperInnerRef}>
                        <Content sizeRatio={sizeRatio}>
                            {children}
                        </Content>
                    </WrapperInner>
                </Wrapper>
            )}
        </SizeRatioProvider>
    )
}