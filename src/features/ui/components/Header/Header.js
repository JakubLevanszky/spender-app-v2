import { Heading, StyledHeader } from './Header.styled';
import MoneyIcon from '../MoneyIcon/MoneyIcon';

export default function Header() {
  return (
    <>
      <StyledHeader>
        <MoneyIcon />
        <Heading>Spender</Heading>
      </StyledHeader>
    </>
  );
}
