import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear, address}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();


    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt=""  loading="lazy"/>
                </div>
                <div className="experience-details">
                    <p style={{color: theme.primary}}>{startYear}-{endYear}</p>
                    <h2 style={{color: theme.tertiary}}>{jobtitle}</h2>
                    <h3 style={{color: theme.tertiary80}}>{company}</h3>
                    <p style={{color: theme.primary}}>{address}</p>
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard
