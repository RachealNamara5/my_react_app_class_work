import React from 'react';
import './App.css';
import logo from './juice.jpg';

import ApplicationForm from './components/events/form'; 
import ShoppingList from './components/shoppingList'; 
import Tables from './components/table';
import Car from './components/cars';
import Gallery from './components/gallery';
import GoalButton from './components/events/football';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Namara Racheal <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <ShoppingList name="social media platforms" />
      <Tables name="(2024)"/>
      <Car name="showcase"/>
      <Gallery />
      <ApplicationForm/>
      <GoalButton/>
    </div>
  );
}

export default App;
