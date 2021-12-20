import { connect } from "react-redux";

const mapStateToProps = state => ({
    count: state
});

const CounterComponent = ({count, dispatch}) => {
  /*Variable de stockage de l'action increment*/
const incrementAction = {
  type: 'INCREMENT',
};
/*Variable de stockage de l'action decrement*/
const decrementAction = {
  type: 'DECREMENT',
};

const increment10Action = {
  type: 'INCREMENT10',
};
const decrement10Action = {
  type: 'DECREMENT10',
};
const resetAction = {
  type: 'RESET',
};
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(incrementAction)}>
      + 1
    </button>
    <button onClick={() => dispatch(increment10Action)}>
      + 10
    </button>
    <button onClick={() => dispatch(decrementAction)}>
      - 1
    </button>
    <button onClick={() => dispatch(decrement10Action)}>
      - 10
    </button>
    <button onClick={() => dispatch(resetAction)}>
      RESET
    </button>
    </div>
  )
}

const CounterContainer = connect(mapStateToProps)(CounterComponent);

export default CounterContainer;