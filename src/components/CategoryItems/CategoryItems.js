import { CatItemStyled, CatItemWrapper } from './CategoryItems.styled';
import { MdFastfood, MdSavings, MdHome } from 'react-icons/md';

function CategoryItem() {
  return (
    <>
      <CatItemWrapper>
        <CatItemStyled>
          <MdHome /> desc 1 percentage1
        </CatItemStyled>
        <CatItemStyled>
          <MdFastfood /> desc 1 percentage1
        </CatItemStyled>
        <CatItemStyled>
          <MdSavings /> desc 1 percentage1
        </CatItemStyled>
      </CatItemWrapper>
    </>
  );
}

export default CategoryItem;
