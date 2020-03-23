import React from 'react';
import './lang.css';

function Lang() {
    return (
        <div className="lang">
            <div className="title">
                <img className="image" src="/images/language.png"  alt="langs" />
                Languages
            </div>
            <ul class="lang">
                <li>Hebrew - native level</li>
                <li>English - professional level</li>
            </ul>
        </div>
    );
  }
  
  export default Lang;