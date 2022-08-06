import { StyledAside } from './AsidePart.styled';
import Categories from './parts/Categories/Categories';
import Income from './parts/Income/Income';

function AsidePart() {
  return (
    <>
      <StyledAside>
        <Income />
        <Categories />
      </StyledAside>
    </>
  );
}

export default AsidePart;
