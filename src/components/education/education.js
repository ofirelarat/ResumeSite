import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';


import './education.css';

function Education() {
    const titlesItems = [
        {
            'title': 'B.Sc',
            'organization': 'Holon Institute of Technology',
            'expTime': '2014 – 2017',
            'descreption': `GPA: 88.75`
        }
    ];

    const certificatesItems = [
        {
            'title': 'Android Development',
            'org': 'HackerU',
            'date': '2019'
        },
        {
            'title': 'Design Pattern for software developers',
            'org': 'HackerU',
            'date': '2019'
        },
        {
            'title': 'MongoDB for .NET developers',
            'org': 'MongoDB University',
            'date': '2016'
        }
    ];

    const titleItemsCopm = titlesItems.map((item) =>   
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

    const certItemsComp = certificatesItems.map((item) => 
            <div className="cert-description">{item.title} | {item.org} ({item.date})</div>
    );

     return (
        <div className="education">
            <div className="title">
                <img className="image" src="/images/education.png"  alt="education" />
                Education
            </div>
            <List>
                {titleItemsCopm}

                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={
                            <div className="exp-title">
                                <span className="primery-color">Certificates</span> 
                            </div>}
                        secondary={
                            <>
                               {certItemsComp}
                            </>
                        }
                    />
                </ListItem>
            </List>
        </div>
    );
  }
  
export default Education;