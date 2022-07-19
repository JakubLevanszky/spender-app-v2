/* eslint-disable react/prop-types */
import { StyledInput } from './Input.styled';

function Input({ palceholder, name, type, ...rest }) {
  return (
    <>
      <StyledInput placeholder={palceholder} name={name} type={type} {...rest} />
    </>
  );
}

export default Input;
