/* eslint-disable react/prop-types */
import { StyledInput } from './Input.styled';

export default function Input({ palceholder, name, type, ...rest }) {
  return (
    <>
      <StyledInput placeholder={palceholder} name={name} type={type} {...rest} />
    </>
  );
}
