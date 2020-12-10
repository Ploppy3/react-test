import { useState } from 'react';
import { Child } from './Child';

export function Communication() {

  const [count, setCount] = useState(1);

  function onChildIncrement(number: number) {
    setCount(count + number);
  }

  return (
    <div>
      <div>Interactions</div>
      <div>Parent component</div>
      <div>
        <span>count: {count}</span>
        <button onClick={() => { setCount(count + 1); }}>+1</button>
      </div>
      <div>(for parent-to-child communication)</div>
      <hr />
      <Child count={count} onChildIncrement={onChildIncrement} />
    </div>
  );
}