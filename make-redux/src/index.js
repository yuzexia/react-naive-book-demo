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
			state.title.text = action.text;
			break;
		case 'UPDATE_TITLE_COLOR':
			state.title.color = action.color;
			break;
		default:
			break;	
	}
}

function createStore(state, stateChanger) {
	const getState = () => state;
	const dispatch = (action) => stateChanger(state, action);
	return { getState, dispatch }
} 

function renderApp (appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}

function renderTitle(title) {
	const titleDOM = document.getElementById('title');
	titleDOM.innerHTML = title.text;
	titleDOM.style.color = title.color;
}

function renderContent(content) {
	const contentDOM = document.getElementById('content');
	contentDOM.innerHTML = content.text;
	contentDOM.style.color = content.color;
}

const store = createStore(state, stateChanger)

renderApp(store.getState()); // 首次渲染页面

store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《react.js小书》' }); // 更改title.text
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' }); //更改title.color

renderApp(store.getState()); // 再次渲染页面