import { Board as GameBoard } from '../../lib/minesweeper';
import Board from '../components/board';
import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    const board = new GameBoard(10, 5);
    this.state = { board: board };
    this.updateGame = this.updateGame.bind(this);
    this.restart = () => this.setState({ board: new GameBoard(10, 5) })
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board })
  }

  render() {
    let message = '';
    if (this.state.board.lost()) message = 'You Lose';
    if (this.state.board.won()) message = 'You Win';

    let klass = '';
    if (message) klass = 'show';


    return (
      <>
        <Board board={this.state.board} update={this.updateGame}/>
        <div className={`window modal ${klass}`}>
          <div className="title-bar">
            <div className="title-bar-text">
              Alert
            </div>

            <div className="title-bar-controls">
              <button aria-label="Close" onClick={this.restart}></button>
            </div>
          </div>
          <div className="window-body">
            {message}
            <section className="field-row play-again">
            <button onClick={this.restart}>Play Again</button>
        </section>
            
          </div>
        </div>
      </>
    )
  }


}


