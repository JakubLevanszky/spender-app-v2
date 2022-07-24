import AsidePart from '../AsidePart/AsidePart';
import { LayoutStyled } from './Layout.styled';
import MainPart from '../MainPart/MainPart';

function Layout() {
  return (
    <>
      <LayoutStyled>
        <MainPart />
        <AsidePart />
      </LayoutStyled>
    </>
  );
}

export default Layout;
