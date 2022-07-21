
import React, { useState } from 'react';
import { languajes } from '../context';
import './Main_page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { Bio_en, Bio_es } from './Bio';
import { Gal } from './Gallery';


export function Main_page() {
  const [languaje, setLanguaje] = useState(languajes.spanish);
  const [bodyshow, setBodyshow] = useState("hide");
  const [text, setText] = useState("ESPAÑOL");
  const handleChangeLanguaje = () => {
    text === "ESPAÑOL" ? setText("ENGLISH") : setText("ESPAÑOL");
    setLanguaje(() => {
      return languaje === languajes.english ? languajes.spanish : languajes.english;
    });
  };
  const handleShowbody = () => {
    bodyshow === "hide" ? setBodyshow("show") : setBodyshow("hide");
  };
  return (
    <>
      <div className="header_main">
        <div className={'bg_content'}>
          <div className='main_photo'></div>
        </div>
        <div className='menu'>
          <button id="menubtn"><FontAwesomeIcon icon={faBars} /></button>
          <button onClick={handleChangeLanguaje}>{text}</button>
        </div>
        <div className='name'>
          <h1>FRANCISCO<br /><span>DÍAZ</span></h1>
          {languaje.name === "Spanish" ? <h3>Tenor lírico</h3> : <h3>Opera singer</h3>}
        </div>
        <p className={'quote_p' + bodyshow}>
          <i className='quote'><FontAwesomeIcon icon={faQuoteLeft} /></i>
          Cras tincidunt auctor metus in interdum...
          <i className='quote'><FontAwesomeIcon icon={faQuoteRight} /></i>
        </p>
        <button id="startbtn" className={'startbtn' + bodyshow} onClick={handleShowbody}>Comenzar</button>
      </div>
      <div className={'body' + bodyshow}>
        {languaje.name === "Spanish" ? <Bio_es /> : <Bio_en />}
        <Gal />
        <div className='footer'>
          FRANCISCO DÍAZ CARRILLO © 2022 
      </div>
      </div>
      
    </>
  );
}



