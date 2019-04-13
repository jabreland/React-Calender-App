import React, {Component} from 'react';
import DaysHeader from './DaysHeader';

class Month extends Component{
    render(){
        return(
            <div className='month'>April
             <DaysHeader/>
            </div>
        );
    }
}

export default Month;