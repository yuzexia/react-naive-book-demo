import React, { Component } from 'react';

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            timeString: ''
        }
    }

    componentWillMount() {
        this._updateTimeString()
        this.timer = setInterval(() => {
            console.log('componentWillMount')
            this._updateTimeString.bind(this)
        }, 5000)
    }
    componentWillUnmount () {
        clearInterval(this._timer)
    }

    handleDeleteComment () {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    // 格式化时间戳
    _updateTimeString() {
        const comment = this.props.comment
        const duration = (+new Date() - comment.createdTime) / 1000
        let timeString = ''
        if (duration > 86400) {
            timeString = `${Math.round(duration / (3600 * 24))} 天前`
        } else if (duration > 60 && duration > 3600) {
            timeString = `${Math.round(duration / 3600)} 小时前`
        } else if (duration > 60) {
            timeString = `${Math.round(duration / 60 )} 分钟前`
        } else {
            timeString = `${Math.round(Math.max(duration, 1))} 秒前`
        }
        this.setState({
            timeString
        })
    }
    
    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username}</span>：
                </div>
                <p>{this.props.comment.content}</p>
                <span className="comment-createdtime">
                    {this.state.timeString}
                </span>
                <span onClick={this.handleDeleteComment.bind(this)}
                    className="comment-delete">
                    删除
                </span>
            </div>
        )
    }
}

export default Comment;