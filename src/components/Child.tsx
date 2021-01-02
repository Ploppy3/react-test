interface Props {
  count: number;
  onChildIncrement: (number: number) => void;
}

export function Child(props: Props) {
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
};