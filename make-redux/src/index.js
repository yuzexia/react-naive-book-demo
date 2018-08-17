/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

const state = {
	title: {
		text: 'react.js小书',
		color: 'red'
	},
	content: {
		text: 'React.js 小书内容',
		color: 'blue'
	}
}


function stateChanger(state, action) {
	switch (action.type) {
		case 'UPDATE_TITLE_TEXT':
			return { // 构建新的对象，并且返回
				...state,
				title: {
					...state.title,
					text: action.text
				}
			}
		case 'UPDATE_TITLE_COLOR':
			return { // 构建新的对象并且返回
				...state,
				title: {
					...state.title,
					color: action.color
				}
			}
		default:
			return state  // 没有修改，返回原对象	
	}
}

function createStore(state, stateChanger) {
	const listeners = [];
	const subscribe = (listener) => listeners.push(listener)
	const getState = () => state;
	const dispatch = (action) => {
		state = stateChanger(state, action); //覆盖原对象
		listeners.forEach((listener) => listener())
	}
	return { getState, dispatch, subscribe }
} 

function renderApp (newAppState, oldAppState = {}) { // 防止oldAppState没有传入，所有加了默认参数oldAppState={}
	if(newAppState === oldAppState) return // 数据没有变化就不渲染了
	console.log('render app...')
	renderTitle(newAppState.title, oldAppState.title)
	renderContent(newAppState.content, oldAppState.content)
}

function renderTitle(newTitle, oldTitle = {}) {
	if (newTitle === oldTitle) return // 数据没有变化就不渲染了
	console.log('render title...')
	const titleDOM = document.getElementById('title');
	titleDOM.innerHTML = newTitle.text;
	titleDOM.style.color = newTitle.color;
}

function renderContent(newContent, oldContent = {}) {
	if (newContent === oldContent) return // 数据没有变化就不渲染了
	console.log('render content...')
	const contentDOM = document.getElementById('content');
	contentDOM.innerHTML = newContent.text;
	contentDOM.style.color = newContent.color;
}

const store = createStore(state, stateChanger)
let oldState = store.getState() // 缓存旧的state
store.subscribe(() => {
	const newState = store.getState() // 数据可能变化，获取新的state
	renderApp(newState, oldState)  // 把新旧的state传禁区渲染
	oldState = newState // 渲染完以后，新的newState变成就的oldState，等待下一次数据变化重新渲染
})

// store.subscribe(() => renderApp(store.getState()))

renderApp(store.getState()); // 首次渲染页面

store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《react.js小书》' }); // 更改title.text
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'yellow' }); //更改title.color

// ...后面不管如何 store.dispatch，都不需要重新调用 renderApp