import Header from '../Header/Header';
import Spends from './parts/Spends/Spends';
import Summary from './parts/Summary/Summary';
import { MainPartStyled } from './MainPart.styled';

function MainPart() {
  return (
    <>
      <MainPartStyled>
        <Header />
        <Spends />
        <Summary />
      </MainPartStyled>
    </>
  );
}

export default MainPart;
