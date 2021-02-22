import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';


import './education.css';

function Education() {
    const titlesItems = [
        {
            'title': 'B.Sc',
            'organization': 'HIT',
            'expTime': '2014 – 2017',
            'descreption': `GPA: 88.75`
        }
    ];

    const certificatesItems = [
        {
            'title': 'Fundamentals of digital marketing',
            'org': 'Google garage',
            'date': '2020'
        },
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

    const publicationsItems = [
        {
            'title': 'Postmortem - incident examination',
            'org': 'Medium',
            'date': '2020',
            'link': 'https://ofirelarat.medium.com/postmortem-incident-examination-process-4cc57db993b'
        },
        {
            'title': '.NET behind the scene',
            'org': 'Medium',
            'date': '2020',
            'link': 'https://ofirelarat.medium.com/net-behind-the-scene-a229f83083d0'
        },
        {
            'title': '.NET CLI',
            'org': 'Medium',
            'date': '2021',
            'link': 'https://ofirelarat.medium.com/net-cli-8e8ecb4604bb'
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

    const publicationItemsComp = publicationsItems.map((item) => 
        <a href={item.link}  className="publication-description">{item.title} | {item.org} ({item.date})</a>
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

                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={
                            <div className="exp-title">
                                <span className="primery-color">Publications</span> 
                            </div>}
                        secondary={
                            <>
                               {publicationItemsComp}
                            </>
                        }
                    />
                </ListItem>
            </List>
        </div>
    );
  }
  
export default Education;