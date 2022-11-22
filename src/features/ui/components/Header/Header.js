import MoneyIcon from '../MoneyIcon/MoneyIcon';
import { Heading, StyledHeader } from './Header.styled';

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
