import CategoryItem from '../../../../../../components/CategoryItems/CategoryItems';
import { CategoriesStyled } from './Categories.styled';

function Categories() {
  return (
    <>
      <CategoriesStyled>
        <h2>categories</h2>
        <CategoryItem />
      </CategoriesStyled>
    </>
  );
}

export default Categories;
