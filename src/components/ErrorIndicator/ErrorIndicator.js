import React from 'react';
import s from './ErrorIndicator.module.css';
import icon from './error.png';

const ErrorIndicator = () => {
    return(
        <div className={s.Error_Indicator}>
            <img src={icon} alt="error icon"/>
            <h3>BOOM!</h3>
            <p>Something was wrong</p>
        </div>
    );
};

export default ErrorIndicator;