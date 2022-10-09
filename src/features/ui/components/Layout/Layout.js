import React, { useState } from 'react';
// import React from 'react';
import { LayoutStyled } from './Layout.styled';
import Header from '../Header/Header';
import ItemsList from '../../../../components/ItemsList/ItemsList';
import Income from '../../../../components/Income/Income';
import { Container } from '../Container/Container.styled';
import Spending from '../../../../components/Spending/Spending';
import Balance from '../../../../components/Balance/Balance';

// rename the component
// manage state and localStorage here
// pass values from components here

export default function Layout() {
  // eslint-disable-next-line no-unused-vars
  const [budget, setBudget] = useState(1000);

  // const calcBudget = () => {void};

  return (
    <>
      <Header />
      <LayoutStyled>
        <Container>
          {/* <Income /> */}
          <Income budget={budget} />
          <Balance />
          <Spending />
          <ItemsList />
        </Container>
      </LayoutStyled>
    </>
  );
}
