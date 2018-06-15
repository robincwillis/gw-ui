import React from 'react';
import ReactDOM from 'react-dom';

import Sandbox from './containers/Sandbox';

const App = () => (
  <div>
    <h1>My UI</h1>
    <h2>Button</h2>
    <p>Here's an example of button.</p>
  </div>
);


ReactDOM.render(<Sandbox />, document.getElementById('root'));