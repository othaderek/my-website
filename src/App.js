import React from 'react';
import './App.css';
import Name from './components/Name'
import LinksContainer from './components/links/LinksContainer';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Name/>
      <Greeting/>
      <LinksContainer/>
    </div>
  );
}

export default App;
