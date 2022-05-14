import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

const Book = (props) => {
  return React.createElement('div', {}, [
      React.createElement('h2', {}, props.name),
      React.createElement('p', {}, props.year),
      React.createElement('p', {}, props.price)
  ])
}

const App = () => {
  return React.createElement('div', {}, [
      React.createElement('h1', {id: 'title', className: 'paragraph'}, "Hello world"),
      React.createElement(Book, {name: 'JS for beginners', year: 2019, price: 50+'$'}),
      React.createElement(Book, {name: 'React for beginners', year: 2020, price: 60+'$'}),
      React.createElement(Book, {name: 'Vue for beginners', year: 2021, price: 70+'$'}),
  ])
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

