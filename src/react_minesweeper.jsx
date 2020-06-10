import '../css/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Game size={10} bombs={2}/>, document.getElementById("game"));
});