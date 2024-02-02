import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  return (
    <div>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
