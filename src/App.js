import React, { useState } from 'react';
import './App.css';
import LangContext, { languajes } from './context';
import {Main_page} from './components/Main_page';


function App() {
  const [languaje, setLanguaje] = useState(languajes.spanish);

  return (
    <LangContext.Provider value={languaje}>
    <div className="App">
      <Main_page/>
    </div>
    </LangContext.Provider>
  );
}

export default App;
