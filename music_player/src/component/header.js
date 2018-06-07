import React from 'react';
import header from '../static/header.png'
import './header.css'


class Header extends React.Component {
        render() {
                return (
                        <div className='component-header'>
                                <img src={header}  alt='logo' className="logo" />
                                <h1 className="caption">Casvot Music Player</h1>
 
  
                        </div>
                );
        } 
}

export default Header;