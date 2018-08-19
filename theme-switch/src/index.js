import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import Header from './Header'
import Content from './Content'
import registerServiceWorker from './registerServiceWorker';

function createStore (reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
      state = reducer(state, action)
      listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化 state
    return { getState, dispatch, subscribe }
}
  
const themeReducer = (state, action) => {
    if (!state) return {
      themeColor: 'red'
    }
    switch (action.type) {
      case 'CHANGE_COLOR':
        return { ...state, themeColor: action.themeColor }
      default:
        return state
    }
}
  
const store = createStore(themeReducer)

class Index extends Component {
    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext() {
        return { store }
    }

    componentWillMount() {
        console.log(this)
        console.log(store)
    }

    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root'));
registerServiceWorker();
