import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {Text} from "./Text";

const OptionsStyled = styled.div`
    display: flex;
    flex-direction: column;
`

const OptionWrapperStyled = styled.div`
    display: flex;
    
    & + & {
        margin-top: ${({sizeRatio}) => scalePx(14, sizeRatio)};
    }
`

const OptionStyled = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const OptionSignStyled = styled.div`
    flex-shrink: 0;
    width: ${({sizeRatio}) => scalePx(20, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(20, sizeRatio)};
    border-radius: ${({sizeRatio}) => scalePx(5, sizeRatio)};
    background-color: ${({selected}) => selected ? '#00000040' : '#FFFFFF'};
    transition: background-color 0.2s;
`

const OptionTextStyled = styled(Text)`
    margin-left: ${({sizeRatio}) => scalePx(20, sizeRatio)};
    white-space: pre-wrap;
`

export function SelectionTextList(props) {
    const {className, value, multi, options, onChange} = props;
    const sizeRatio = useSizeRatio();

    const isSelected = (newValue) => {
        if (multi) {
            return value?.includes(newValue) ?? false;
        }

        return value === newValue;
    }

    const handleChange = (newValue) => {
        let updatedValue = newValue;

        if (multi) {
            updatedValue = value?.includes(newValue) ?
                value.filter(current => current !== newValue)
                : [...(value ?? []), newValue];

        }

        onChange?.(updatedValue);
    };

    return (
        <OptionsStyled className={className} sizeRatio={sizeRatio}>
            {options.map((option) => (
                <OptionWrapperStyled key={option?.value} sizeRatio={sizeRatio}>
                    <OptionStyled
                        sizeRatio={sizeRatio}
                        onClick={() => handleChange(option?.value)}
                    >
                        <OptionSignStyled sizeRatio={sizeRatio} selected={isSelected(option?.value)} />
                        <OptionTextStyled sizeRatio={sizeRatio}>
                            {option?.label}
                        </OptionTextStyled>
                    </OptionStyled>
                </OptionWrapperStyled>
            ))}
        </OptionsStyled>
    )
}