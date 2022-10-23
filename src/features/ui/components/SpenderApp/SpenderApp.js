/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { SpenderAppStyled } from './SpenderApp.styled';
import Header from '../Header/Header';
import Expenses from '../../../../components/Expenses/Expenses';
import Income from '../../../../components/Income/Income';
import { Container } from '../Container/Container.styled';
import TotalSpent from '../../../../components/TotalSpent/TotalSpent';
import RemainingBudget from '../../../../components/RemainingBudget/RemainingBudget';

export default function SpenderApp() {
  const [income, setIncome] = useState(1000);
  const [expenses, setExpenses] = useState([]);

  const incomeUpdate = (newIncome) => {
    setIncome(newIncome);
    localStorage.setItem('income', JSON.stringify(newIncome));
  };

  const onExpensesUpdate = (newExpenses) => {
    setExpenses(newExpenses);
    localStorage.setItem('expenses', JSON.stringify(newExpenses));
  };

  const remainingBudgetUpdate = expenses.reduce((remainingBudget, item) => {
    return (remainingBudget += Number(item.cost));
  }, 0);

  const totalSpentUpdate = expenses.reduce((totalSpent, item) => {
    return (totalSpent += Number(item.cost));
  }, 0);

  // get rid off useEffect and use function instead
  useEffect(() => {
    try {
      const maybeExpenses = JSON.parse(localStorage.getItem('expenses'));
      const maybeIncome = JSON.parse(localStorage.getItem('income'));
      if (maybeExpenses) setExpenses(maybeExpenses);
      if (maybeIncome) setIncome(maybeIncome);
    } catch (error) {
      // ignore parsing errors
    }
  }, []);

  return (
    <>
      <Header />
      <SpenderAppStyled>
        <Container>
          <Income income={income} onIncomeUpdate={incomeUpdate} />
          <RemainingBudget remainingBudget={remainingBudgetUpdate} income={income} />
          <TotalSpent totalSpent={totalSpentUpdate} />
          <Expenses expenses={expenses} onItemsUpdate={onExpensesUpdate} />
        </Container>
      </SpenderAppStyled>
    </>
  );
}