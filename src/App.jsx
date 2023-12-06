
import './App.css';
import { useState } from 'react';
import CounterApp from './component/counter/index';
import Balance from './component/balance';

function App() {
  const [counter, setCounter] = useState(0)
  const handleIncrementCounter = () => {
    setCounter(prev => prev + 1)
  }
  const handleDecrementCounter = () => {
    setCounter(prev => prev - 1)
  }
  return (
    <div className="App">
      <p>With usestate</p>
      <button onClick={handleIncrementCounter}>
        +
      </button>
      {counter}
      <button onClick={handleDecrementCounter}>
        -
      </button>
      <p>--------------------</p>
      <p>With React Redux</p>
      <CounterApp />
      <Balance />
    </div>
  );
}

export default App;
