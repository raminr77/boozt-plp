import { useReducer } from 'react';

const toggler = (currentValue: boolean, newValue: boolean) => {
  return typeof newValue === 'boolean' ? newValue : !currentValue;
};

export const useToggle = (initialValue = false) => {
  return useReducer(toggler, initialValue);
};
