import calculate from "../utils/calculate";
import {
  CLEAR_EXPRESSION,
  DELETE_LAST_EXPRESSION_ENTRY,
  EVALUATE_EXPRESSION,
  SET_EXPRESSION,
  SQUARE,
  SQUARE_ROOT,
} from "./calculatorTypes";

const initialState = {
  expression: "",
  total: 0,
};

function setExpression({ expression, total }, action) {
  if (/[\d]*[-+%*/.]$/.exec(expression) && /[-+%*/.]/.exec(action.payload)) {
    console.log("b", expression);
    expression = expression.slice(0, expression.length - 1);
    console.log("a", expression);
  }

  switch (action.type) {
    case SET_EXPRESSION:
      if (["+", "/", "*", "%"].includes(action.payload) && !expression) {
        return `${total}${action.payload}`;
      }
      return `${!expression && total ? total : ""}${
        expression + action.payload
      }`;
    default:
      return expression;
  }
}

export const calulatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPRESSION:
      let expression = setExpression(state, action);
      return {
        ...state,
        expression,
        total: calculate(expression) || state.total,
      };
    case CLEAR_EXPRESSION:
      return {
        ...state,
        expression: "",
        total: 0,
      };
    case DELETE_LAST_EXPRESSION_ENTRY:
      let exp = state.expression;
      exp = exp
        .split("")
        .slice(0, exp.length - 1)
        .join("");
      return {
        ...state,
        expression: exp,
        total: calculate(exp),
      };

    case EVALUATE_EXPRESSION:
      return {
        ...state,
        expression: "",
        total: calculate(state.expression) || state.expression || state.total,
      };
    case SQUARE:
      return {
        ...state,
        expression: "",
        total: state.expression * state.expression,
      };
    case SQUARE_ROOT:
      return {
        ...state,
        expression: "",
        total: Math.sqrt(state.expression),
      };
    default:
      return state;
  }
};
