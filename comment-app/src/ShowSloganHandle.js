import React, { Component } from 'react';
import ShowSlogan from './ShowSlogan';

class ShowSloganHandle extends Component {
    constructor() {
        super();
        this.state = {
            isDisplay: true
        }
    }
    handleClick() {
        console.log('handleClick');
        console.log(this.button.clientHeight); // 使用ref获取原生DOM的属性值
        this.setState({
            isDisplay: !this.state.isDisplay
        })
    }
    render() {
        return (
            <div className="slogan-box">
                {this.state.isDisplay ? <ShowSlogan slogan="hello react.js"/> : null}
                <button className="slogan-button" ref={(button) => this.button = button} onClick={this.handleClick.bind(this)}>{this.state.isDisplay ? 'Hidden' : 'Show' } Slogan</button>
            </div>
        )
    }
}

export default ShowSloganHandle;
