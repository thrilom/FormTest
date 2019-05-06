import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Form from '../form/Form.jsx';

class Tabs extends Component {
  render(){
    return(
      <Router>
      <div className="container">
         <div className="tabbable">
            <ul className="nav nav-tabs" id="interest_tabs">
               <li><a href="#basics" data-toggle="tab">Basics</a></li>
               <li><a className="active" href="#Custom-fields" data-toggle="tab">Custom Fields</a></li>
               <li><a href="#Social-capital" data-toggle="tab">Social Capital</a></li>
               <li><a href="#Finance-types" data-toggle="tab">Finance Types</a></li>
               <li><a href="#dashboard" data-toggle="tab">Dashboards</a></li>
               <li><a href="#Permission-sets" data-toggle="tab">Permission sets</a></li>
               <li><a href="#unsubscribe" data-toggle="tab">Unsubscribe</a></li>
            </ul>
            <div className="tab-content" id="mytabs">
               <div id="basics" className="tab-pane">
                  <ul className="nav nav-tabs" id="all_tabs">
                     <li><a className="active" href="#basic" data-toggle="tab">Basic</a></li>
                     <li><a href="#unique" data-toggle="tab">Unique</a></li>
                  </ul>
                  <div className="tab-content">
                     <div className="tab-pane fade in active show" id="basic">
                       <div className="container">
                          <div className="row">
                             <div className="col-sm-12">
                               <p>pop all content</p>
                             </div>
                           </div>
                         </div>
                     </div>
                     <div className="tab-pane fade" id="unique">
                       <div className="container">
                          <div className="row">
                             <div className="col-sm-12">
                               <p>unique all content</p>
                               </div>
                             </div>
                           </div>
                     </div>
                  </div>
               </div>
               <div id="Custom-fields" className="tab-pane active">
                  <ul className="nav nav-tabs" id="brands_tabs">
                     <li><a className="active" href="#people" data-toggle="tab">People</a></li>
                     <li><a href="#donations" data-toggle="tab">Donations</a></li>
                  </ul>
                  <div className="tab-content">
                     <div className="tab-pane fade in active show" id="people">
                        <div className="container">
                           <div className="row">
                              <div className="col-sm-12">
                                <Route exact path="/" component={Form}/>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="donations">
                        <div className="container">
                           <div className="row">
                              <div className="col-sm-12">
                                 <p>Donate</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="Social-capital" className="tab-pane">
                  <ul className="nav nav-tabs" id="media_tabs">
                     <li><a className="active" href="#media" data-toggle="tab">Media</a></li>
                     <li><a href="#new_media" data-toggle="tab">New Media</a></li>
                  </ul>
               </div>
               <div id="Finance-types" className="tab-pane">
                  <ul className="nav nav-tabs" id="music_tabs">
                     <li><a className="active" href="#testing" data-toggle="tab">Testing</a></li>
                     <li><a href="#tested" data-toggle="tab">Tested</a></li>
                  </ul>
               </div>
               <div id="dashboard" className="tab-pane">
                  <ul className="nav nav-tabs" id="public_figures_tabs">
                     <li><a className="active" href="#employees" data-toggle="tab">Employees</a></li>
                     <li><a href="#clients" data-toggle="tab">Clients</a></li>
                  </ul>
               </div>
               <div id="Permission-sets" className="tab-pane">
                  <ul className="nav nav-tabs" id="sports_tabs">
                     <li><a className="active" href="#sports" data-toggle="tab">Sports</a></li>
                     <li><a href="#sports_unique" data-toggle="tab">Unique Sports</a></li>
                  </ul>
               </div>
               <div id="unsubscribe" className="tab-pane">
                  <ul className="nav nav-tabs" id="tv_movies_tabs">
                     <li><a className="active" href="#movies" data-toggle="tab">Movies</a></li>
                     <li><a href="#movies_unique" data-toggle="tab">Unique Movies</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
    </Router>
);
}
}

export default Tabs;
