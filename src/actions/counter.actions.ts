import { Action } from 'redux';

export const increment = () => {
  let action: Action = {
    type: 'INCREMENT',
  };
  return action;
};

export const decrement = () => {
  let action: Action = {
    type: 'DECREMENT',
  };
  return action;
};

