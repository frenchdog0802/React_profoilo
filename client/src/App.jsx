import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../components/MainRouter';
const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};
export default App;