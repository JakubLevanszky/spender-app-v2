import AsidePart from '../AsidePart/AsidePart';
import { LayoutStyled } from './Layout.styled';
import MainPart from '../MainPart/MainPart';
import Header from '../Header/Header';

function Layout() {
  return (
    <>
      <Header />
      <LayoutStyled>
        <MainPart />
        <AsidePart />
      </LayoutStyled>
    </>
  );
}

export default Layout;
