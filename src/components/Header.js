
import React, { useState } from 'react';
import { languajes } from '../context';
import './Header.css'
import { FaSun } from "react-icons/fa";

export function ComponentHeader() {
  const [languaje, setLanguaje] = useState(languajes.spanish);
  const [text, setText] = useState("ES");
  const handleChangeLanguaje = () => {

    //console.log(languaje.name);
    text === "ES" ? setText("EN") : setText("ES");
    setLanguaje(() => {
      return languaje === languajes.english ? languajes.spanish : languajes.english;
    });
  };
  return (
    <div className="header_main">
      <div >

        <button
          onClick={handleChangeLanguaje}>
          {text}
        </button>
        {languaje.name==="Spanish" ? <p>English</p>:<p>Español</p>

        }

      </div>

    </div>
  );
}



