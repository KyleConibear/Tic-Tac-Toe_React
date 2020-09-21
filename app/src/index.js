import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// This is a "controlled components" because the "Board" Component as the parent has ownership of its state
function Square(props) {
    return (
      // "function" would fire the alert every time the component re-renders.
      // <button className="square" onClick={function () { alert('click'); }}>

      // "() =>" React will only call this function after a click.
      <button className="square"
        // When you call "setState" in a component, React automatically updates the child components inside of it too.
        onClick={() => this.props.onClick({ value: 'X' })}>
        { this.props.value}
      </button >
    );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(index) {
    /* The slice() method returns the selected elements in an array, as a new array object.
    The original array will not be changed. */
    const squares = this.state.squares.slice();
    squares[index] = 'X';
    this.setState({ squares: squares });
  }

  renderSquare(index) {
    return (
      <Square
        value={this.state.squares[index]}
        onClick={() => this.handleClick(index)}
      />);
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);