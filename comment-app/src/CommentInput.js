import React, { Component } from 'react';

class CommentInput extends Component {
    constructor() {
        console.log('constructor 阶段')
        super();
        this.state = {
            username: '',
            content: ''
        }
    }
    componentWillMount() {
        console.log('组件commentInput: componentWillMount阶段')
    }
    // 构造DOM元素插入页面
    componentDidMount() {
        console.log('组件commentInput: componentDidMount阶段')
    }
    // 从页面中删除元素
    componentWillUnmount() {
        console.log('组件commentInput: componentWillUnmount阶段')
    }
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmit() {
        console.log(this.props)
        if (this.props.onSubmit) {
            const { username, content } = this.state;
            this.props.onSubmit({username, content});
        }
        this.setState({ content: '' });
    }
    render () {
        console.log('render阶段')
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input type="text" 
                        value={this.state.username}
                        onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea 
                        value={this.state.content}
                        onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput