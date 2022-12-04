/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Hr, SpenderAppStyled, SpenderAppWrapper, ValuesSection } from './SpenderApp.styled';
import Header from '../Header/Header';
import Expenses from '../../../../components/Expenses/Expenses';
import Income from '../../../../components/Income/Income';
import { Container } from '../Container/Container.styled';
import TotalSpent from '../../../../components/TotalSpent/TotalSpent';
import RemainingBudget from '../../../../components/RemainingBudget/RemainingBudget';
import DateTime from '../DateTime/DateTime';

export default function SpenderApp() {
  const [income, setIncome] = useState(() => JSON.parse(localStorage.getItem('income')) ?? [1000]);
  const [expenses, setExpenses] = useState(
    () => JSON.parse(localStorage.getItem('expenses')) ?? []
  );

  const [dateState, setDateState] = useState([]);
  useEffect(() => {
    const id = setInterval(function () {
      fetch('https://worldtimeapi.org/api/ip')
        .then((response) => response.json())
        .then((data) => {
          setDateState(data);
        })
        .catch((err) => {
          setDateState(err);
        });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  if (dateState === undefined) return 'Date and time loading failed.';

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
        <DateTime date={dateState} />
        <SpenderAppStyled>
          <Container>
            <ValuesSection>
              <Income income={income} onIncomeUpdate={handleIncomeUpdate} />
              <RemainingBudget remainingBudget={remainingBudgetUpdate} income={income} />
              <TotalSpent totalSpent={totalSpentUpdate} />
            </ValuesSection>
            <Hr />
            <Expenses expenses={expenses} onItemsUpdate={handleExpensesUpdate} />
          </Container>
        </SpenderAppStyled>
      </SpenderAppWrapper>
    </>
  );
}
