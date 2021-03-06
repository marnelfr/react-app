import React from 'react';
import ReactDOM from 'react-dom/client';
import { Calculator } from './Calculator';
import FormWithContext from './FormWithContext';
import './index.css';
import Reducing from './Reducing';
// import { Todo } from './Todo'
import reportWebVitals from './reportWebVitals';
import TodoList from './TodoList/TodoList';
// import { PostTable } from './PostTable';
// import { Binding, Form } from './Binding';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormWithContext />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
