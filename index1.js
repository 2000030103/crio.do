import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Import the CSS file

// Activity #1: Simple Element with JSX
const JSXHeading = () => <h1>Hello, using JSX!</h1>;

// Activity #2: Simple Element with React.createElement
const ReactCreateElementHeading = () =>
  React.createElement('h1', null, 'Hello, using React.createElement!');

// Activity #3: Counter Component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="counter-container">
        <div className="counter">
          <h2>Counter: {this.state.count}</h2>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

// Activity #5: JSX expression to display the result of an expression (product of two numbers)
const multiply = (a, b) => {
  return (
    <div>
      <p>
        Product of {a} and {b} is: {a * b}
      </p>
    </div>
  );
};

// Activity #6: JSX code comparison
// React.createElement version
const reactCreateElementHeading = React.createElement('h1', null, 'Hello, using React.createElement!');

const JSXHeadingComparison = () => (
  <div>
    {reactCreateElementHeading}
    <h1>Hello, using JSX!</h1>
  </div>
);

// Activity #7: Counter Component as a class-based component
class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="counter-container">
        <div className="counter">
          <h1 className="counter-display">{this.state.count}</h1>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

// Activity #9: Event handlers for increasing & decreasing Counter count
class CounterEventHandlers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount = () => {
    console.log('Increasing count');
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  decreaseCount = () => {
    console.log('Decreasing count');
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  };

  render() {
    return (
      <div className="counter-container">
        <div className="counter">
          <h1 className="counter-display">{this.state.count}</h1>
          <button onClick={this.increaseCount}>+</button>
          <button onClick={this.decreaseCount}>-</button>
        </div>
      </div>
    );
  }
}

// App that displays multiple counters
const App = () => (
  <div className="container">
    {/* Activity #1 */}
    <JSXHeading />
    
    {/* Activity #2 */}
    {ReactCreateElementHeading()}
    
    {/* Activity #3 */}
    <Counter />
    
    {/* Activity #5 */}
    <h1 className="counter-display">{2 * 5}</h1> {/* Displaying the result of an expression */}
    {multiply(5, 3)} {/* Product of 5 and 3 */}
    {multiply(8, 2)} {/* Product of 8 and 2 */}
    {multiply(10, 4)} {/* Product of 10 and 4 */}
    
    {/* Activity #6 */}
    <JSXHeadingComparison /> {/* Rendering JSX comparison */}
    
    {/* Activity #7 */}
    <CounterComponent /> {/* Displaying a counter */}
    <CounterComponent /> {/* Displaying another counter */}
    
    {/* Activity #9 */}
    <CounterEventHandlers /> {/* Displaying a counter with event handlers */}
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);