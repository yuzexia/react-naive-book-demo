import React, { Component } from 'react';

class LikeButton extends Component {
    constructor() {
        super();
        this.state = {isLiked: false}
    }

    handleClickOnLikeButton(e) {
        console.log(e.target.innerHTML)
        console.log('this.state.isLiked', this.state.isLiked)
        this.setState({
            isLiked: !this.state.isLiked
        })
        console.log('this.state.isLiked', this.state.isLiked)
        this.setState((prevState) => {
            return {count: 0}
        })
        this.setState((prevState) => {
            console.log(prevState.count)
            return {count: prevState.count + 1}
        })
        this.setState((prevState) => {
            console.log(prevState.count)
            return {count: prevState.count + 2}
        })
    }
    render() {
        return (
             <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? '取消' : '点赞'}
            </button>
        )
    }
}

export default LikeButton;