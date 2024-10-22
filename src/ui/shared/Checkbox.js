import styled from '@emotion/styled';
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";

const WrapperStyled = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  position: relative;
  cursor: pointer;
`;

const InputStyled = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const LabelStyled = styled.p`
  display: block;
  margin-left: ${({sizeRatio}) => scalePx(25, sizeRatio)};
  font-size: ${({sizeRatio}) => scalePx(10, sizeRatio)};
  line-height: ${({sizeRatio}) => scalePx(12.5, sizeRatio)};
  font-weight: 400;
  color: ${({error}) => error ? 'red' : '#FFFFFF'};
  transition: color 0.2s;
`;

const CheckmarkStyled = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({sizeRatio}) => scalePx(15, sizeRatio)};
  width: ${({sizeRatio}) => scalePx(15, sizeRatio)};
  background-color: ${({value}) => value ? '#F5E1BE' : '#92B6FD'};
  border-radius: ${({sizeRatio}) => scalePx(25, sizeRatio)};
  border: ${({sizeRatio}) => `${scalePx(3, sizeRatio)} solid #92B6FD`};
  transition: background-color 0.2s, border-color 0.2s;
`;

export function Checkbox({ className, value, label, error, onChange, ...rest }) {
    const sizeRatio = useSizeRatio();

    return (
        <WrapperStyled className={className} sizeRatio={sizeRatio} {...rest}>
            <LabelStyled error={error} sizeRatio={sizeRatio}>{label}</LabelStyled>
            <InputStyled
                sizeRatio={sizeRatio}
                type="checkbox"
                checked={value}
                onChange={() => onChange?.(!value)}
            />
            <CheckmarkStyled sizeRatio={sizeRatio} value={value} />
        </WrapperStyled>
    )
}
