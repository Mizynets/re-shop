import React from 'react';
import './ErrorIndicator.module.css';
import icon from './error.png';

const ErrorIndicator = () => {
    return(
        <div className={classes.Error_Indicator}>
            <img src={icon} alt="error icon"/>
            <h3>BOOM!</h3>
            <p>something was wrong</p>
            <p>but we already sent droids to fix it</p>
        </div>
    );
};

export default ErrorIndicator;