import { LayoutStyled } from './Layout.styled';
import Header from '../Header/Header';
import ItemsList from '../../../../components/ItemsList/ItemsList';

function Layout() {
  return (
    <>
      <Header />
      <LayoutStyled>
        <ItemsList />
      </LayoutStyled>
    </>
  );
}

export default Layout;
