import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sidebar />, div);
});
