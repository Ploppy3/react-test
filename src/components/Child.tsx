import { useState } from 'react';

interface Props {
  count: number;
  onChildIncrement: (number: number) => void;
}

export function Child(props: Props) {
  const [count, setCount] = useState(props.count);
  return (
    <div>
      <div>Child component</div>
      <div>
        <span>count: {props.count}</span>
        <button onClick={() => { props.onChildIncrement(2); }}>+2</button>
      </div>
      <div>(for child-to-parent communication)</div>
    </div>
  );
}