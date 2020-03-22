import React from 'react';
import './header.css';

function Header() {
    return (
        <div>
            <div className="header">
                <div className="main-title">
                    <span className="border-style" />
                    <span className="main-title-colored">Hello, I'm</span> Ofir!
                </div>
                <div className="sub-title">
                    This is my  <span className="main-title-colored">Curriculum Vitae</span>
                    <span className="border-style" />
                </div>
            </div>
            <div className="arrow-shape"/>
        </div>
    );
  }
  
  export default Header;
  