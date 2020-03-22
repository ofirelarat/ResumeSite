import React from 'react';
import './static-profile.css';

function StaticProfile(props) {
    return (
        <span className="static-profile" title={props.title}>
            <img className="image" src={props.imgSource} alt={props.title} />
            <p className="name">{props.name}</p>
        </span>
    );
  }
  
export default StaticProfile;