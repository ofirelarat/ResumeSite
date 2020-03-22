import React from 'react';
import './about.css';
import LinkedProfile from './linked-profile';
import StaticProfile from './static-profile';

function About() {
    return (
        <div className="about">
            <div className="static-about">
                <StaticProfile name="96ofir11@gmail.com" imgSource="/images/email.png" title="Email Address"/>
                <StaticProfile name="26 / 5 / 1996" imgSource="/images/age.png" title="Birth Date"/>
                <StaticProfile name="Israel" imgSource="/images/location.png" title="Country"/>
            </div>
            <div className="linked-about">
                <LinkedProfile link="https://www.linkedin.com/in/ofir-elarat" imgSource="/images/linkedin.png" title="LinkedIn"/>
                <LinkedProfile link="https://play.google.com/store/apps/developer?id=Ofir+Elarat" imgSource="/images/google-play.png" title="Google Play Store"/>
                <LinkedProfile link="https://github.com/ofirelarat" imgSource="/images/github.png" title="GitHub"/>
            </div>
        </div>
    );
  }
  
  export default About;