import './App.css';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

function App() {
  const accountState = useSelector((state: RootStateOrAny) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <h1>Account Balance: ${accountState}</h1>
      <button onClick={() => depositMoney(5)}>Deposit $5</button>
      <button onClick={() => depositMoney(10)}>Deposit $10</button>
      <button onClick={() => depositMoney(20)}>Deposit $20</button>
      <button onClick={() => withdrawMoney(5)}>Withdraw $5</button>
      <button onClick={() => withdrawMoney(10)}>Withdraw $10</button>
      <button onClick={() => withdrawMoney(20)}>Withdraw $20</button>
    </div>
  );
}

export default App;
