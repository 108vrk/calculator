import {
  CLEAR_EXPRESSION,
  DELETE_LAST_EXPRESSION_ENTRY,
  EVALUATE_EXPRESSION,
  SET_EXPRESSION,
  SQUARE,
  SQUARE_ROOT,
} from "./calculatorTypes";

export const calculate = (key) => {
  return {
    type: SET_EXPRESSION,
    payload: key,
  };
};

export const clear = () => {
  return {
    type: CLEAR_EXPRESSION,
  };
};

export const square = () => {
  return {
    type: SQUARE,
  };
};

export const squareRoot = () => {
  return {
    type: SQUARE_ROOT,
  };
};

export const deleteLastEntry = () => {
  return {
    type: DELETE_LAST_EXPRESSION_ENTRY,
  };
};

export const evaluateExpression = () => {
  return {
    type: EVALUATE_EXPRESSION,
  };
};
