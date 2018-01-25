import React from 'react';
import ReactDOM from 'react-dom';

// works only with webpack + appropriate loaders
import './styles/styles.scss';

ReactDOM.render(
    <div className='row'>
        <h1> Expensify </h1>
    </div>
    , document.querySelector('#app')
);
