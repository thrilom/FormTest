import React, { Component } from 'react';
import logo from '../../logo.svg';

import chart from '../../Chart.svg';
import profile from '../../Profile.svg';
import calendar from '../../Calendar.svg';
import convo from '../../Convo.svg';
import file from '../../File.svg';
import database from '../../Database.svg';
import settings from '../../Settings.svg';


class PrimaryNav extends Component {
  render(){
    return(
      <div className="nav-wrapper">
     <a className="branding" href="# ">
        <img className="App-logo" src={logo} alt="My logo" />
        <p className="Brandinglabel">NationBuilder</p>
     </a>
     <nav className="Primary-nav">
        <ul className="list-unstyled list-primary">
           <li>
              <a href="# ">
                 <img src={chart} alt="" />
                 <p className="Hoverlabel">Dashboard</p>
              </a>
           </li>
           <li>
              <a href="# ">
                 <img src={profile} alt="" />
                 <p className="Hoverlabel">People</p>
              </a>
           </li>
           <li>
              <a href="# ">
                 <img src={calendar} alt="" />
                 <p className="Hoverlabel">Website</p>
              </a>
           </li>
           <li>
              <a href="# ">
                 <img src={convo} alt="" />
                 <p className="Hoverlabel">Communication</p>
              </a>
           </li>
           <li>
              <a href="# ">
                 <img src={file} alt="" />
                 <p className="Hoverlabel">Finances</p>
              </a>
           </li>
           <li>
              <a href="# ">
                 <img src={database} alt="" />
                 <p className="Hoverlabel">Nations</p>
              </a>
           </li>
           <li>
              <a className="active" href="# ">
                 <img src={settings} alt="" />
                 <p className="Hoverlabel">Settings</p>
              </a>
           </li>
        </ul>
     </nav>
  </div>

    );
  }
}

export default PrimaryNav;
