import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import Day from './Day'; <Day day="1"/>
import Month from './Month';


const april = { name : "April", 
                weeks : 
                [[0,1,2,3,4,5,6], 
                 [7,8,9,10,11,12,13],
                 [14,15,16,17,18,19,20],
                 [21,22,23,24,25,26,27],
                 [28,29,30,0,0,0,0]]
                };


ReactDOM.render(<Month month={april}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();