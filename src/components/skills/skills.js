import React from 'react';
import { Chip } from '@material-ui/core';

import './skills.css';

function Skills() {
    const skillsNames = ['Web Development', 'Android Development', 'Software Development',
     'OOP', '.Net Framework', '.Net Core', 'javascript', 'react', 'NodeJS', 'SQL', 'C#',
      'JAVA', 'typescript', 'git', 'mongoDB'];

     const chipsComp = skillsNames.map((skill) => <Chip className="skill" key={skill} label={skill}/>)
    return (
        <div className="skills">
            <div className="title">
                <img className="image" src="/images/skills.png"  alt="skills" />
                Skills
            </div>
            <div className="skills-container">
                {chipsComp}
            </div>
        </div>
    );
  }
  
export default Skills;