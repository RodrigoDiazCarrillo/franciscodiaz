import React, { useState} from 'react';
import './Gallery.css'
import './Bio.css'


export function Gal() {
    const [show, setShow] = useState("hide");
    const [btnshow, setBtnshow] = useState("More");
    const handleClick = () => {
        console.log(show);
        show==="hide" ? setShow("show"): setShow("hide");
        btnshow==="More" ? setBtnshow("Less"): setBtnshow("More");
      };
    return (
        <div className="gal">
        <div className={'gal_'+show}>
        <h2>GALLERY</h2>
        <div class="grid-container">
            <div class="item1"></div>
            <div class="item2"></div>
            <div class="item3"></div>  
            <div class="item4"></div>
            <div class="item5"></div>
        </div>
            
        </div>
        <div className='showbtns'>
        <button className='showbtn' onClick={handleClick}>{btnshow}</button>
        <button className={'readmorebtn_'+show}>{'Read more ' + String.fromCharCode(8250)}</button>
        </div>
        </div>
    );
}

