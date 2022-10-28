import React, { Component } from "react";
import { connect } from "react-redux";
import { getExpression, getTotal } from "./redux";
import {
  calculate,
  clear,
  deleteLastEntry,
  evaluateExpression,
  square,
  squareRoot,
} from "./redux/calculatorCreators";
import Calculator from "./components/index";
import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log({ ...this });

    console.log("Mounted Calculator!");
  }

  render() {
    return (
      <div className="calculator--container">
        <Calculator.Screen {...this.props} />
        <Calculator.Keypad {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expression: getExpression(state),
    total: getTotal(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    calculate: (buttonKey) => {
      dispatch(calculate(buttonKey));
    },
    delete: () => {
      dispatch(deleteLastEntry());
    },
    clear: () => {
      dispatch(clear());
    },
    evaluate: () => {
      dispatch(evaluateExpression());
    },
    square: () => {
      dispatch(square());
    },
    squareRoot: () => {
      dispatch(squareRoot());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
