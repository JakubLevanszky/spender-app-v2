/* eslint-disable react/prop-types */
import { ButtonStyled } from './Button.styled';

export default function Button({ type, ...rest }) {
  return <ButtonStyled type={type} {...rest} />;
}
