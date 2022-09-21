import React from 'react';
import logo1 from "Images/logoVis1.png";
import 'Scss/Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='logoNumero'>
                <img src={logo1} alt='Logo Vistop' width={50} />
                <small className='numero'>(85)981221096 </small>
            </div>
            <small>Desenvolvido em 2022 </small>
            {/* <div className='infoFooter'> */}
                {/* <p>Logo Focus</p> */}
            {/* </div> */}
        </div>

    )
}

export default Footer; 