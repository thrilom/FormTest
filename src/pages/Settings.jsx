import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrimaryNav from '../components/nav/PrimaryNav.jsx';
import Header from '../components/header/Header.jsx';
import Tabs from '../components/tabs/Tabs.jsx';


class Home extends Component {
  render(){
    return(
      <Router>
      <div className="App">
        <Route exact path="/" component={PrimaryNav}/>
          <div className="container-fluid page-wrapper">
            <div className="App-wrapper">
              <Route exact path="/" component={Header}/>
                <section>
                  <Route exact path="/" component={Tabs}/>
                </section>

                <section>

                </section>
                <footer>

                </footer>
              </div>
            </div>
          </div>
        </Router>
    );
  }
}

export default Home;
