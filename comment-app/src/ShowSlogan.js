import React, { Component } from 'react';

class ShowSlogan extends Component {
    constructor() {
        super();
        console.log('组件ShowSlogan: constructor阶段')
    }
    componentWillMount() {
        console.log('组件ShowSlogan: componentWillMount阶段')
    }
    componentDidMount() {
        console.log('组件ShowSlogan: componentDidMount阶段')
    }
    componentWillUnmount() {
        console.log('组件ShowSlogan: componentWillUnmount阶段');
    }
    render() {
        return(
            <div>{this.props.slogan}</div>
        )
    }
}

export default ShowSlogan;
