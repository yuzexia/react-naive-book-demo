import React, { Component } from 'react';

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }
    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
    // 将元素从DOM中删除
    componentWillUnmount() {
        console.log('Date组件： componentWillUnmount阶段')
        clearInterval(this.timer);
    }
    render() {
        return (
            <div className="date-item">
                <p>现在的时间是</p>
                { this.state.date.toLocaleTimeString() }
            </div>
        )
    }
}

export default Clock;