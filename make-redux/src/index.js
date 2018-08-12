/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

const appState = {
	title: {
		text: 'react.js小书',
		color: 'red'
	},
	content: {
		text: 'React.js 小书内容',
		color: 'blue'
	}
}

function dispatch(action) {
	switch (action.type) {
		case 'UPDATE_TITLE_TEXT':
			appState.title.text = action.text;
			break;
		case 'UPDATE_TITLE_COLOR':
			appState.title.color = action.color;
			break;
		default:
			break;	
	}
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

renderApp(appState); // 首次渲染页面

dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《react.js小书》' }); // 更改title.text
dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' }); //更改title.color

renderApp(appState); // 再次渲染页面