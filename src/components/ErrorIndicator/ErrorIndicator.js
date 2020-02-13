import React from 'react';

import style from './ErrorIndicator.module.scss';

const ErrorIndicator = () => {
    return (
        <div className={style.errorIndicator}>
            <span className={style.boom}>
                BOOM!
            </span>
            <span>
                something has gone terribly, wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    )
};

export default ErrorIndicator;