import { StyledAside } from './AsidePart.styled';
import Input from '../../components/Input/Input';

import { BsPlusCircle } from 'react-icons/bs';

function AsidePart() {
  return (
    <>
      <StyledAside>
        <h2>income</h2>
        <Input type="text" />
        <button>monthly</button>
        <button>weekly</button>
        <button>CZK</button>
        <button>EUR</button>
        <button>USD</button>
        <h2>categories</h2>
        <p>needs</p>
        <p>50%</p>
        <p>food</p>
        <p>30%</p>
        <p>savings</p>
        <p>20%</p>
        <BsPlusCircle />
      </StyledAside>
    </>
  );
}

export default AsidePart;
