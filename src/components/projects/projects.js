import React from 'react';
import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './projects.css';

function Projects() {

    const projectsItems = [
          {
            'title': 'MemoFun - fun and simple cards memory game',
            'image': '/images/memo-fun.png',
            'description': `Android free memory cards game, 
                            very simple thats integrate with google play game services.`,
            'link': 'https://play.google.com/store/apps/details?id=com.ofirelarat.memofun',
            'linkLabel': 'play store page'
        },
        {
            'title': 'Actuar',
            'image': '/images/actuar.png',
            'description': `Website that help you calculate money value and interest.
                            Actuar site build with NodeJS and react.`,
            'link': 'https://actuar.herokuapp.com/',
            'linkLabel': 'Website'
        },
        {
            'title': 'Medicine Cabinet',
            'image': '/images/medicine-icon.png',
            'description': `the place to save your medicine organize
                            The project include web service that built with asp.NET, android app and MongoDB
                            that store the data.`,
            'link': 'http://medicinecabinetapp.azurewebsites.net/',
            'linkLabel': 'Website'
        },
        {
            'title': 'SafeApp – lecturer moderator Dr. Nava Shaked',
            'image': '/images/safeapp-icon.png',
            'description': `Android app that lets you use your smartphone while driving using the multimodality
                            approach.`,
            'link': 'https://github.com/ofirelarat/SafeApp',
            'linkLabel': 'GitHub page'
        }
    ];

    const projectsComp = projectsItems.map((item) => 
        <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Card className="card">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={item.title}
                        height="110"
                        image={item.image}
                        title={item.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </a>
    );

    return (
        <div className="projects">
            <div className="title">
                <img className="image" src="/images/projects.png"  alt="projects" />
                Projects
            </div>
            {/* <div className="cards-container"> */}
                <Carousel className="carousel">
                    {projectsComp}
                </Carousel>
            {/* </div> */}
        </div>
    );
  }
  
export default Projects;