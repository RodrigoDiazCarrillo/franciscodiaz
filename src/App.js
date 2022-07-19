import React, { useState } from 'react';
import './App.css';
import LangContext, { languajes } from './context';
import {ComponentHeader} from './components/Header';

function App() {
  const [languaje, setLanguaje] = useState(languajes.spanish);

  return (
    <LangContext.Provider value={languaje}>
    <div className="App">
      <ComponentHeader/>
    </div>
    </LangContext.Provider>
  );
}

export default App;
