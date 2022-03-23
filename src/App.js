import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import Knight from './Knight'
import Square from './Square'
import Board from './Board'

ReactDOM.render(
  <Square black>
    <Knight />
  </Square>,
  document.getElementById('root')
)

ReactDOM.render(
  <Board knightPosition={[0, 0]} />,
  document.getElementById('root')
)

function App() {
  return (
    <div className="App">
      <header className="Dnd.test">
        
      </header>
    </div>
  );
}



export default App;
