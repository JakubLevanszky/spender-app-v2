import { LayoutStyled } from './Layout.styled';
import Header from '../Header/Header';
import ItemsList from '../../../../components/ItemsList/ItemsList';
import Income from '../../../../components/Income/Income';
import { Container } from '../Container/Container.styled';
import Spending from '../../../../components/Spending/Spending';
import Balance from '../../../../components/Balance/Balance';

function Layout() {
  return (
    <>
      <Header />
      <LayoutStyled>
        <Container>
          <Income />
          <Balance />
          <Spending />
          <ItemsList />
        </Container>
      </LayoutStyled>
    </>
  );
}

export default Layout;
