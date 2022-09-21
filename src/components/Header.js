import React from 'react';
import logo from 'Images/logoVis.png'
import 'Scss/Header.scss'

const Header= () => {
    return (
        <div className='header'>            
            <img src={logo} alt='Logo Vistop' width={150} />
            {/* <div className='div-bar'></div> */}
        </div>
    );
} 

export default Header; 