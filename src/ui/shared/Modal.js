import {AnimatePresence, motion} from "framer-motion";
import styled from '@emotion/styled';
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {scalePx} from "../../utils/scalePx";
import {Text} from "./Text";
import {Panel} from "./Panel";
import {Button} from "./Button";

const WrapperStyled = styled(motion.div)`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: ${({sizeRatio}) => `${scalePx(199, sizeRatio)} 0 ${scalePx(32, sizeRatio)}`};
    z-index: 100;
`;

const BackdropStyled = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0087CD4D;
    z-index: 1;
`;

const PanelWrapperStyled = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: flex-end;
    max-height: 100%;
    min-height: 0;
    padding: ${({sizeRatio}) => `0 ${scalePx(32, sizeRatio)}`};
    z-index: 2;
`

const PanelStyled = styled(Panel)`
    padding: ${({sizeRatio}) => `${scalePx(20, sizeRatio)} ${scalePx(10, sizeRatio)}`};
`

const TitleStyled = styled(Text)`
    text-transform: uppercase;
    text-align: center;
`

const DescriptionStyled = styled(Text)`
    margin-top: ${({sizeRatio}) => scalePx(24, sizeRatio)};
    text-align: center;
`

const ButtonWrapperStyled = styled(motion.div)`
    flex-shrink: 0;
    position: relative;
    margin-top: ${({sizeRatio}) => scalePx(32, sizeRatio)};
    padding: ${({sizeRatio}) => `0 ${scalePx(20, sizeRatio)}`};
    z-index: 2;
`

const ButtonStyled = styled(Button)`
    box-shadow: 0 0 29px 4px #FFFFFF;
`

const ModalContent = (props) => {
    const { opened, title, description, onNext, ...rest } = props;
    const sizeRatio = useSizeRatio();

    return (
        <WrapperStyled sizeRatio={sizeRatio} {...rest}>
            <BackdropStyled
                sizeRatio={sizeRatio}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />
            <PanelWrapperStyled
                sizeRatio={sizeRatio}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 0, opacity: 0 }}
            >
                <PanelStyled sizeRatio={sizeRatio}>
                    <TitleStyled sizeRatio={sizeRatio} bold>
                        {title}
                    </TitleStyled>
                    <DescriptionStyled sizeRatio={sizeRatio}>
                        {description}
                    </DescriptionStyled>
                </PanelStyled>
            </PanelWrapperStyled>
            <ButtonWrapperStyled
                sizeRatio={sizeRatio}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <ButtonStyled onClick={onNext}>Далее</ButtonStyled>
            </ButtonWrapperStyled>
        </WrapperStyled>
    );
}

export const Modal = (props) => {
    const { opened } = props;

    return (
        <AnimatePresence>
            {opened && <ModalContent {...props} />}
        </AnimatePresence>
    );
}
