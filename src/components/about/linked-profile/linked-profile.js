import React from 'react';
import './linked-profile.css';

function LinkedProfile(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className="linked-profile" title={props.title} >
                <img className="image" src={props.imgSource} alt={props.title} />
            </div>
        </a>
    );
  }
  
export default LinkedProfile;