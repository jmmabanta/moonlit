import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Routes, HashRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Routes>
        {['/', '/portfolio/:id'].map((path, idx) => (
          <Route path={path} element={<App />} key={idx} />
        ))}
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
