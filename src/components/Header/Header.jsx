import React from 'react';
import NavBar from './NavBar/NavBar';
import s from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/img/Icon.svg';

const Header = () => {
    return (
        <div className={s.header}>
            <Logo />
            <NavBar />
        </div>
    );
};

export default Header;
