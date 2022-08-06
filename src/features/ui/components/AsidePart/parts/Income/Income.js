import Input from '../../../Input/Input';
import { IncomeStyled, InputParams } from './Income.styled';

function Income() {
  return (
    <>
      <IncomeStyled>
        <h2>income</h2>
        <Input type="text" />
        <InputParams>
          <button>monthly</button>
          <label htmlFor="currency-selection">Currency</label>
          <select name="currencies">
            <option value="CZK" selected="true">
              CZK
            </option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
        </InputParams>
      </IncomeStyled>
    </>
  );
}

export default Income;
