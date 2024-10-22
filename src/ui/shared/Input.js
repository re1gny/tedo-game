import styled from '@emotion/styled';
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";

const WrapperStyled = styled.input`
  width: 100%;
  height: ${({sizeRatio}) => scalePx(50, sizeRatio)};
  background: #92B6FD;
  border-radius: ${({sizeRatio}) => scalePx(43, sizeRatio)};
  font-size: ${({sizeRatio}) => scalePx(14, sizeRatio)};
  line-height: ${({sizeRatio}) => scalePx(17.5, sizeRatio)};
  font-weight: 400;
  color: ${({error}) => error ? 'red' : '#FFFFFF'};
  padding: ${({sizeRatio}) => `0 ${scalePx(20, sizeRatio)}`};
  border: none;
  outline: none;
  transition: color 0.2s;

  &::placeholder {
    color: ${({error}) => error ? 'red' : '#FFFFFF80'};
    transition: color 0.2s;
  }
`;

export function Input({ className, value, error, placeholder, onChange, ...rest }) {
  const sizeRatio = useSizeRatio();

  return (
      <WrapperStyled
          sizeRatio={sizeRatio}
          className={className}
          error={error}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
          {...rest}
      />
  );
}
