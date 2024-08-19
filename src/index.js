import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import SupportAdmin from './SupportAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));




const path = window.location.pathname

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <React.StrictMode>
        { path.indexOf('/support') === -1 ? <Home /> : <SupportAdmin /> }
</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
