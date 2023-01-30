import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import notification from './Notifications';

ReactDOM.render(
  <React.StrictMode>
    <div className='root-notifications'>{notification}</div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
