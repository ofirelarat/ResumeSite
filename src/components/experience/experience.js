import React from 'react';
import {List, ListItem, ListItemText, Typography} from '@material-ui/core';


import './experience.css';

function Experience() {
    const experienceItems = [
        {
            'title': 'FullStack Developer',
            'organization': 'IDF',
            'expTime': 'from sep 2017',
            'descreption': 'bla bla bla'
        },
        {
            'title': 'Java Back Developer',
            'organization': 'Holon Instetude of Technology',
            'expTime': '2016 to 2017',
            'descreption': 'bla bla bla'
        }
    ];

    const expItemCopm = experienceItems.map((item) =>   
        <ListItem alignItems="flex-start">
                <ListItemText
                    primary={item.title}
                    secondary={
                        <>
                            <span>{item.organization} — {item.expTime}</span>
                            <div>{item.descreption}</div>
                        </>
                    }
                />
            </ListItem>
        );

     return (
        <div className="experience">
            <div className="title">Experience</div>
            <List>
                {expItemCopm}
            </List>
        </div>
    );
  }
  
export default Experience;