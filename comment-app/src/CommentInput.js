import React, { Component } from 'react';

class CommentInput extends Component {
    /* static propTypes = {
        onSubmit: PropTypes.func
    } */
    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }
    componentWillMount() {
        this._loadUsername();
    }
    // 构造DOM元素插入页面
    componentDidMount() {
        this.textarea.focus();
    }

    // 从localStorage获取username
    _loadUsername() {
        const username = localStorage.getItem('username');
        if(username) {
            this.setState({username})
        }
    }
    
    // 保存username到localStorage
    _saveUsername(username) {
        localStorage.setItem('username', username)
    }
    handleUsernameBlur(event) {
        this._saveUsername(event.target.value)
        console.log(localStorage)
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
            this.props.onSubmit({username, content, createdTime: +new Date()});
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
                        onBlur={this.handleUsernameBlur.bind(this)}
                        onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea 
                        ref={(textarea) => this.textarea = textarea}
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