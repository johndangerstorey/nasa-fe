import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './components/TodoList'

ReactDOM.render(<div className="background">
    <TodoList/>
</div>, document.getElementById('root'));
