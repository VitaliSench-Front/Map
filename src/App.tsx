import React from 'react';
import './App.css';
import NewArr from "./Listing";

const topCars = [
  {manufacturer:'BMW', model:'m5cs'},
  {manufacturer:'Mercedes', model:'e63s'},
  {manufacturer:'Audi', model:'rs6'}
]

function App() {
  return (
    <div className="App">
      <NewArr car={topCars}/>
    </div>
  );
}

export default App;
