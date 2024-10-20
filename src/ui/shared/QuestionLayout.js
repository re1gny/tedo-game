import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {Button} from "./Button";
import {Text} from "./Text";
import {GlassPanel} from "./GlassPanel";
import {motion} from "framer-motion";
import {SelectionTextList} from "./SelectionTextList";
import {SelectionBoxList} from "./SelectionBoxList";

const WrapperStyled = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
`;

const ContentWrapperStyled = styled.div`
    flex-grow: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 0;
`

const PanelWrapperStyled = styled.div`
    padding: ${({sizeRatio}) => `0 ${scalePx(20, sizeRatio)}`};
`

const PanelStyled = styled(GlassPanel)`
    padding: ${({sizeRatio}) => `${scalePx(14, sizeRatio)} ${scalePx(18, sizeRatio)}`};
`

const PanelTitleStyled = styled(Text)`
    text-align: ${({center}) => center ? 'center' : 'left'};
    text-transform: uppercase;
    white-space: pre-wrap;
`

const PanelTextOptionsStyled = styled(SelectionTextList)`
    margin-top: ${({sizeRatio}) => scalePx(14, sizeRatio)};
`

const PanelBoxOptionsStyled = styled(SelectionBoxList)`
    margin-top: ${({sizeRatio}) => scalePx(14, sizeRatio)};
`

const ButtonWrapperStyled = styled.div`
    margin-top: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    padding: ${({sizeRatio}) => `0 ${scalePx(20, sizeRatio)} ${scalePx(32, sizeRatio)}`};
`

export function QuestionLayout(props) {
    const {
        title,
        center,
        size = 'm',
        view = 'text',
        options,
        multi,
        value,
        onChange,
        onSubmit,
        children,
        ...rest
    } = props;
    const sizeRatio = useSizeRatio();

    const PanelOptionsStyled = view === 'box' ? PanelBoxOptionsStyled : PanelTextOptionsStyled;

    return (
        <WrapperStyled sizeRatio={sizeRatio} {...rest}>
            <ContentWrapperStyled sizeRatio={sizeRatio}>
                {children}
            </ContentWrapperStyled>
            <PanelWrapperStyled sizeRatio={sizeRatio}>
                <PanelStyled sizeRatio={sizeRatio}>
                    <PanelTitleStyled
                        sizeRatio={sizeRatio}
                        center={center}
                        size={size}
                        bold
                    >
                        {title}
                    </PanelTitleStyled>
                    {!!options?.length && (
                        <PanelOptionsStyled
                            sizeRatio={sizeRatio}
                            value={value}
                            options={options}
                            multi={multi}
                            onChange={onChange}
                        />
                    )}
                </PanelStyled>
            </PanelWrapperStyled>
            <ButtonWrapperStyled sizeRatio={sizeRatio}>
                <Button onClick={onSubmit}>Выбрать</Button>
            </ButtonWrapperStyled>
        </WrapperStyled>
    )
}