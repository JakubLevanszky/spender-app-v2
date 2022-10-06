import { LayoutStyled } from './Layout.styled';
import Header from '../Header/Header';
import ItemsList from '../../../../components/ItemsList/ItemsList';
import Income from '../../../../components/Income/Income';
import { Container } from '../Container/Container.styled';

function Layout() {
  return (
    <>
      <Header />
      <LayoutStyled>
        <Container>
          <Income />
          <ItemsList />
        </Container>
      </LayoutStyled>
    </>
  );
}

export default Layout;
