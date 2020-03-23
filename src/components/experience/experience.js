import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';


import './experience.css';

function Experience() {
    const experienceItems = [
        {
            'title': 'FullStack Developer',
            'organization': 'Communication corps, IDF',
            'expTime': '2017 – 2020',
            'descreption': `Take part in breaking an old monolith project to micro-services.
                            Develop new projects from scratch and work with new technologies.`
        },
        {
            'title': 'Java Back Developer',
            'organization': 'Holon Institute of Technology',
            'expTime': '2016 – 2017',
            'descreption': `Building backend side of research project for Tel Aviv Sourasky medical center
                            and deploy this project in the cloud`
        }
    ];

    const expItemCopm = experienceItems.map((item) =>   
        <ListItem alignItems="flex-start">
                <ListItemText
                    primary={
                        <div className="exp-title">
                            <span className="primery-color">{item.title} | </span> 
                            <span className="secondery-color">{item.organization}</span>
                        </div>}
                    secondary={
                        <>
                            <span className="subtitle">{item.expTime}</span>
                            <div className="description">{item.descreption}</div>
                        </>
                    }
                />
            </ListItem>
        );

     return (
        <div className="experience">
            <div className="title">
                <img className="image" src="/images/work.png"  alt="work" />
                Experience
            </div>
            <List>
                {expItemCopm}
            </List>
        </div>
    );
  }
  
export default Experience;