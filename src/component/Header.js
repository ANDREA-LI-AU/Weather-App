import React from 'react';

import logo from '../assets/icon/logo.png'

function Header(){
    return(
        <header>
            <img className = "header__logo" src = {logo} alt = 'header Logo'/>
            <h1 className = "header__title">
                Weather Channel
            </h1>
        </header>
    );

}

export default Header;