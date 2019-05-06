import React, { Component } from 'react';

import search from '../../Search.svg';
import avatar from '../../Avatar.svg';


class Header extends Component {
  render(){
    return(
      <header className="App-header">
         <div className="container-fluid">
            <div className="row">
               <div className="col-sm-6 col-md-7">
                  <h1>Settings</h1>
               </div>
               <div className="col-sm-4 col-md-3">
                  <form className="form-inline App-search-wrapper">
                     <img className="ml-2" src={search} alt="Search Icon" />
                     <input className="App-search form-control form-control-sm ml-2 w-75" type="text" placeholder="Search People" aria-label="Search People" />
                  </form>
               </div>
               <div className="col-sm-2">
                  <a href="# "><img src={avatar} alt="Avatar Icon" /></a>
               </div>
            </div>
            <div className="row">
               <div className="col-sm-12">
                  <ul className="list-unstyled list-inline secondary-nav-list">
                     <li className="list-inline-item"><a href="# ">Your Account</a></li>
                     <li className="list-inline-item"><a href="# ">Contact</a></li>
                     <li className="list-inline-item"><a className="active" href="# ">Default</a></li>
                     <li className="list-inline-item"><a href="# ">Political</a></li>
                     <li className="list-inline-item"><a href="# ">Domain</a></li>
                     <li className="list-inline-item"><a href="# ">Payment process</a></li>
                     <li className="list-inline-item"><a href="# ">Apps</a></li>
                     <li className="list-inline-item"><a href="# ">Developer</a></li>
                     <li className="list-inline-item"><a href="# ">Database</a></li>
                     <li className="list-inline-item"><a href="# ">Privacy</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </header>

    );
  }
}

export default Header;
