import { render } from 'inferno';
import { BrowserRouter as Router } from 'inferno-router';
import * as serviceWorker from './serviceWorker';

import App from './App';
import './styles/index.css';

render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
);

serviceWorker.unregister();
