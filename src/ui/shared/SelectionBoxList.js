import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {Text} from "./Text";

const OptionsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const OptionWrapperStyled = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    display: flex;
    
    & + & {
        margin-left: ${({sizeRatio}) => scalePx(12, sizeRatio)};
    }
`

const OptionStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: ${({sizeRatio}) => `${scalePx(30, sizeRatio)} ${scalePx(20, sizeRatio)}`};
    border-radius: ${({sizeRatio}) => scalePx(12, sizeRatio)};
    background: #FFFFFF;
    cursor: pointer;
    border: ${({sizeRatio, selected}) => selected ? `${scalePx(2, sizeRatio)} solid #0087CD` : `${scalePx(2, sizeRatio)} solid transparent`};
    transition: border 0.2s;
`

const OptionTextStyled = styled(Text)`
    text-align: center;
    white-space: pre-wrap;
`

export function SelectionBoxList(props) {
    const {className, value, options, onChange} = props;
    const sizeRatio = useSizeRatio();

    const handleChange = (value) => {
        onChange?.(value);
    };

    return (
        <OptionsStyled className={className} sizeRatio={sizeRatio}>
            {options.map((option) => (
                <OptionWrapperStyled key={option?.value} sizeRatio={sizeRatio}>
                    <OptionStyled
                        sizeRatio={sizeRatio}
                        selected={value === option?.value}
                        onClick={() => handleChange(option?.value)}
                    >
                        <OptionTextStyled sizeRatio={sizeRatio}>
                            {option?.label}
                        </OptionTextStyled>
                    </OptionStyled>
                </OptionWrapperStyled>
            ))}
        </OptionsStyled>
    )
}