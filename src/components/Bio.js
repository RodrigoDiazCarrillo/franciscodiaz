
import React, { useState} from 'react';
import './Bio.css'
import personal from "../img/photo_personal.jpg";


export function Bio_en() {
    const [show, setShow] = useState("hide");
    const [btnshow, setBtnshow] = useState("More");
    const handleClick = () => {
        console.log(show);
        show==="hide" ? setShow("show"): setShow("hide");
        btnshow==="More" ? setBtnshow("Less"): setBtnshow("More");
      };
    return (
        <div className="bio">
        <div className={'bio_'+show}>
        <h2>SHORTLY ABOUT ME</h2>
            <div>
            <img src={personal}/>
            <p>Born in Herrera (Seville),
                he has advanced guitar studies
                and has completed higher studies in singing,
                later perfecting his vocal repertoire with Carlos Mena,
                Inmaculada Egido, Luís Vilamajó or Andrea Ambrosini, among others.
                He has recorded different records for labels such as IBS Classical or Lindoro.
                In the same way, he has worked for the National Choir of Spain, the Spanish Radio and Television Choir.
                or in the Titular Choir of the Teatro de la Zarzuela.

                In the pedagogical field, for several years he has worked as a professor of
                guitar, singing, musical language and choir in different conservatories and schools of
                music, activity that combines with the interpretation.

                As a solo tenor, he has performed several performances and participated in roles in places such as the
                National Music Auditorium in Madrid, Liceo Theater in Barcelona, ​​Manuel de Falla Auditorium in Granada,
                Fundación Juan March, among others. Together with the groups Al Ayre Español, Capella Reial de Catalunya, Música Ficta, La Grande Chapelle, Opera Omnia, Capilla Real de Madrid, Capella Prolationum and La Danserye.

                He has participated in the most representative music festivals in Spain,
                and in countries such as Italy, Holland, Germany, Estonia, Poland, Belgium, India,
                Colombia or Morocco.</p>
                
            </div>
            
        </div>
        <div className='showbtns'>
        <button className='showbtn' onClick={handleClick}>{btnshow}</button>
        <button className={'readmorebtn_'+show}>{'Read more ' + String.fromCharCode(8250)}</button>
        </div>
        </div>
    );
}
export function Bio_es() {
    const [show, setShow] = useState("hide");
    const [btnshow, setBtnshow] = useState("Más");
    const handleClick = () => {
        console.log(show);
        show=="hide" ? setShow("show"): setShow("hide");
        btnshow==="Más" ? setBtnshow("Menos"): setBtnshow("Más");
      };
    return (
        <div className="bio">
        <div className={'bio_'+show}>
            <h2>SOBRE Mí</h2>
            <div>
            <img src={personal}/><p>Natural de Herrera (Sevilla),
                posee estudios superiores de guitarra
                y ha cursado los estudios superiores de canto,
                perfeccionando posteriormente su repertorio vocal con Carlos Mena,
                Inmaculada Egido, Luís Vilamajó o Andrea Ambrosini, entre otros.
                Ha grabado diferentes trabajos discográficos para sellos como IBS Classical o Lindoro. 
                De igual manera ha trabajado para el Coro Nacional de España, Coro de Radio Televisión Española 
                o en el Coro Titular del Teatro de la Zarzuela.

                En el ámbito pedagógico, durante varios años ha desempeñado su labor como profesor de 
                guitarra, canto, lenguaje musical y coro en diferentes conservatorios y escuelas de 
                música, actividad que compagina con la interpretación.

                Como tenor solista ha interpretado varias actuaciones y participado en roles en lugares como el 
                Auditorio Nacional de Música de Madrid, Teatro Liceo de Barcelona, Auditorio Manuel de Falla de Granada, 
                Fundación Juan March, entre más. Junto a los grupos Al Ayre Español, Capella Reial de Catalunya, Música Ficta, La Grande Chapelle, Opera Omnia, Capilla Real de Madrid, Capella Prolationum y La Danserye.

                Ha participado en los festivales de música más representativos de España, 
                y en países como Italia, Holanda, Alemania, Estonia, Polonia, Bélgica, India, 
                Colombia o Marruecos.</p>
                </div>
                
                
        </div>
        <div className='showbtns'>
        <button className='showbtn' onClick={handleClick}>{btnshow}</button>
        <button className={'readmorebtn_'+show}>{'Leer más ' + String.fromCharCode(8250)}</button>
        </div>
        </div>
    );
}



