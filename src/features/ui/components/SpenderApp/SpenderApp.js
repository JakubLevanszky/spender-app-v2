/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { SpenderAppStyled, SpenderAppWrapper } from './SpenderApp.styled';
import Header from '../Header/Header';
import Expenses from '../../../../components/Expenses/Expenses';
import Income from '../../../../components/Income/Income';
import { Container } from '../Container/Container.styled';
import TotalSpent from '../../../../components/TotalSpent/TotalSpent';
import RemainingBudget from '../../../../components/RemainingBudget/RemainingBudget';

export default function SpenderApp() {
  const [income, setIncome] = useState(() => JSON.parse(localStorage.getItem('income')) ?? [1000]);
  const [expenses, setExpenses] = useState(
    () => JSON.parse(localStorage.getItem('expenses')) ?? []
  );

  const handleIncomeUpdate = (newIncome) => {
    setIncome(newIncome);
    localStorage.setItem('income', JSON.stringify(newIncome));
  };

  const handleExpensesUpdate = (newExpenses) => {
    setExpenses(newExpenses);
    localStorage.setItem('expenses', JSON.stringify(newExpenses));
  };

  const remainingBudgetUpdate = expenses.reduce((remainingBudget, item) => {
    return (remainingBudget += Number(item.cost));
  }, 0);

  const totalSpentUpdate = expenses.reduce((totalSpent, item) => {
    return (totalSpent += Number(item.cost));
  }, 0);

  return (
    <>
      <SpenderAppWrapper>
        <Header />
        <SpenderAppStyled>
          <Container>
            <Income income={income} onIncomeUpdate={handleIncomeUpdate} />
            <RemainingBudget remainingBudget={remainingBudgetUpdate} income={income} />
            <TotalSpent totalSpent={totalSpentUpdate} />
            <Expenses expenses={expenses} onItemsUpdate={handleExpensesUpdate} />
          </Container>
        </SpenderAppStyled>
      </SpenderAppWrapper>
    </>
  );
}
