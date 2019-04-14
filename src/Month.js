import React, {Component} from 'react';
import DaysHeader from './DaysHeader';
import './DaysHeader.css';
import { Week } from './Day';


function Weeks(props){
    return(
        props.weeks.map(week => <Week days={week}/>)
    );
}

class Month extends Component{
    render(){
        return(
            <div className='dayNames' >
            <div>{this.props.month.name}</div>
                <DaysHeader />
                <Weeks weeks={this.props.month.weeks} />
            </div>
        );
    }
}

export default Month;
/*
    display: flex;
    flex-flow: column;
*/