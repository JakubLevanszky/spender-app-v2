/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { AppWrapperStyled } from './AppWrapper.styled';
import Header from '../Header/Header';
import ItemsList from '../../../../components/ItemsList/ItemsList';
import Income from '../../../../components/Income/Income';
import { Container } from '../Container/Container.styled';
import Spendings from '../../../../components/Spendings/Spendings';
import Balance from '../../../../components/Balance/Balance';

export default function AppWrapper() {
  const [income, setIncome] = useState(1000);
  const [items, setItems] = useState([]);
  const [balance, setBalance] = useState(income);

  const incomeUpdate = (newIncome) => {
    setIncome(newIncome);
    localStorage.setItem('income', JSON.stringify(newIncome));
  };

  const onItemsUpdate = (newItems) => {
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };

  const balanceUpdate = items.reduce((balance, item) => {
    return (balance += Number(item.cost));
  }, 0);

  const spendingsUpdate = items.reduce((spendings, item) => {
    return (spendings += Number(item.cost));
  }, 0);

  // get rid off useEffect and use function instead
  useEffect(() => {
    try {
      const maybeItems = JSON.parse(localStorage.getItem('items'));
      const maybeIncome = JSON.parse(localStorage.getItem('income'));
      if (maybeItems) setItems(maybeItems);
      if (maybeIncome) setIncome(maybeIncome);
    } catch (error) {
      // ignore parsing errors
    }
  }, []);

  return (
    <>
      <Header />
      <AppWrapperStyled>
        <Container>
          <Income income={income} onIncomeUpdate={incomeUpdate} />
          <Balance balance={balanceUpdate} income={income} />
          <Spendings spendings={spendingsUpdate} />
          <ItemsList items={items} onItemsUpdate={onItemsUpdate} />
        </Container>
      </AppWrapperStyled>
    </>
  );
}
