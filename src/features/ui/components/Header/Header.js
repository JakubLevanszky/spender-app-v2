import { StyledHeader } from './Header.styled';
import { GrMoney } from 'react-icons/gr';

export default function Header() {
  return (
    <>
      <StyledHeader>
        <GrMoney />
        {/* replace GrMoney with https://www.svgrepo.com/svg/11923/money icon and make it as a favicon as well */}
        <h1>Spender</h1>
      </StyledHeader>
    </>
  );
}
