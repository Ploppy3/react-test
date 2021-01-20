import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../actions/counter.actions';

function Redux() {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  return <div>
    <div>counter: {counter}</div>
    <button onClick={() => { dispatch(decrement()); }}>decrement</button>
    <button onClick={() => { dispatch(increment()); }}>increment</button>
  </div>;
}

export default Redux;