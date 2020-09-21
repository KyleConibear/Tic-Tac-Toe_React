import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
  constructor(props) {
    //? I think super(props) is depreciated
    super(props); //? Super is the parent class
    // this.state is used to store variables
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      // "function" would fire the alert every time the component re-renders.
      // <button className="square" onClick={function () { alert('click'); }}>

      // "() =>" React will only call this function after a click.
      <button className="square"
      // When you call "setState" in a component, React automatically updates the child components inside of it too.
        onClick={() => this.setState({ value: 'X' })}>
        { this.state.value}
      </button >
    );
  }
}

class Board extends React.Component {
  renderSquare(index) {
    return <Square value={index} />;
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