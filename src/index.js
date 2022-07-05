import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.min.css';
import mixpanel from 'mixpanel-browser';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(<App />, document.getElementById('root'));

mixpanel.init('700c6b5fc208d4aae168933b59958a6c', {debug: true}); 
mixpanel.track('Visit Travelia Safari landing page', {
  'source': "Travelia safari source code",
  'Opted out of email': true,
});



reportWebVitals();
