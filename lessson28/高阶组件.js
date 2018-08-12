import React, { Component } from 'react';

// 高阶组件其实是一个函数
// 它接受一个组件作为参数，返回一个新的组件。这个新的组件会使用你传给它的组件作为子组件

// 下面实现一个简单的高价组件
export default (WrappedComponent) => {
	class NewComponent extends Component {
		// 可以做很多自定义逻辑
		render() {
			return <WrappedComponent />
		}
	}
	return NewComponent;
}
// 它就是简单的构建了一个新的组件类(NewComponent)，然后把传进去的(WrappedComponent)渲染出来


//给上述简单的高阶组件NewComponent做一些数据启动

export default (WrappedComponent, name) => {
	class NewComponent extends Component {
		constructor() {
			super();
			this.state = {
				data: null
			}
		}

		componentWillMount() {
			const data = localStorage.getItem(name);
			this.setState({ data })
		}

		render() {
			return <WrappedComponent data={this.state.data} />
		}
	}
	return NewComponent;
}

// 现在NewComponent会根据第二个参数name在挂在阶段从localStorage中加载数据，并且setState到自己的state.data中，
// 而渲染的时候将state.data通过props.data传递给WrappedComponent

// 如何使用这个高阶函数呢？
// 假设上述高阶函数在src/wrapWithLoadData.js文件中

import wrapWithLoadData from './wrapWithLoadData';

class InputWithUserName extends Component {
	render() {
		return <input value={this.props.data}/>
	}
}

InputWithUserName = wrapWithLoadData(InputWithUserName, 'username');
export default InputWithUserName;

// 其他人用这个组件的时候实际用了被加工之后的组件

import InputWithUserName from './InputWithUserName';

class Index extends Component {
	render() {
		return (
			<div>
				用户名：<InputWithUserName />
			</div>
		)
	}
}

// 如果我们现在需要一个文本框输入组件，它需要把localStorage加载'content'字段的数据。我们需要重新定义个新的组件TextareaWithContent

import wrapWithLoadData from './wrapWithLoadData';

class TextareaWithContent extends Component {
	render() {
		return <textarea value={this.props.data}></textarea>
	}
}

TextareaWithContent = wrapWithLoadData(TextareaWithContent, 'content');
export default TextareaWithContent;


// 假设现在我们需求变化了，现在要的是通过 Ajax 加载数据而不是从 LocalStorage 加载数据。我们只需要新建一个 wrapWithAjaxData 高阶组件：
// wrapWithAjaxData.js

import React, { Component } from 'react';

export default (wrappedComponent, name) => {
	class NewComponent extends Component {
		constructor() {
			super();
			this.state = { data: null }
		}
		componentWillMount() {
			ajax.get('/data/' + name, (data) => {
				this.setState({ data })
			})
		}

		render() {
			return <wrappedComponent data={this.state.data} />
		}
	}
	return NewComponent;
}












