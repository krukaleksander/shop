import React from 'react';
import logo from '../img/logos/linkedin_banner_image_1.png';

const header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="sklep z marzeniami" />
        </header>
    );
}

export default header;