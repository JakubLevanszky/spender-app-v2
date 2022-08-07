import { Menu, MenuItem, NavStyled } from './Nav.styled';

function Nav() {
  return (
    <>
      <NavStyled>
        <Menu>
          <MenuItem>All</MenuItem>
          <MenuItem>Category 1</MenuItem>
          <MenuItem>Category 2</MenuItem>
          <MenuItem>Category 3</MenuItem>
        </Menu>
      </NavStyled>
    </>
  );
}

export default Nav;
