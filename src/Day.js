import React, {Component} from 'react';

class Day extends Component{
   render() {
        return (
            <div>
                <h1>{this.props.day}</h1>
            </div>
        );
    }
}
export default Day;