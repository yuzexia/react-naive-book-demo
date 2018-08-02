import React, { Component } from 'react';
import Date from './Date';

class HandleDate extends Component {
    constructor() {
        super();
        this.state = {
            isShowClock: true
        }
    }
    handleClick() {
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }
    render() {
        return (
            <div>
                {this.state.isShowClock ? <Date /> : null}
                <button className="clock-button" onClick={ this.handleClick.bind(this)}>Hidden/Show</button>
            </div>
        )
    }
}

export default HandleDate;