import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';



import Settings from './pages/Settings.jsx';





function App() {
  return (

    <Router>
      <div>
        <Route exact path="/" component={Settings}/>

      </div>
    </Router>


  );
}

export default App;
