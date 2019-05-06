import React, { Component } from 'react';

class Table extends Component {
  render(){
    return(
      <div>
        <table className="people-table">
          <thead>
            <tr className="header">
              <th scope="col"> </th>
              <th scope="col">Name</th>
              <th scope="col">Slug</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="created-row">
              <th className="edit-cell" scope="row">
                <a href="# ">Edit</a>
              </th>
              <td>Nation slug</td>
              <td>nationslug</td>
              <td>
                <div className="form-group custom-form-group">
                   <select id="select" disabled className="custom-select col-sm-3">
                        <option value="0" disabled>Select Option</option>
                        <option value="Text">Text</option>
                        <option value="Checkbox">Checkbox</option>
                        <option value="Link">Link</option>
                   </select>
                </div>
              </td>
            </tr>
            <tr className="created-row">
              <th className="edit-cell" scope="row">
                <a href="# ">Edit</a>
              </th>
              <td>DNS providor</td>
              <td>dns_providor</td>
              <td>
                <div className="form-group custom-form-group">
                   <select id="select" disabled className="custom-select col-sm-3">
                        <option value="0" disabled>Select Option</option>
                        <option value="Text">Text</option>
                        <option value="Checkbox">Checkbox</option>
                        <option value="Link">Link</option>
                   </select>
                </div>
              </td>
            </tr>
            <tr className="created-row">
              <th className="edit-cell" scope="row">
                <a href="# ">Edit</a>
              </th>
              <td>Web designer</td>
              <td>web_designer</td>
                <td>
                  <div className="form-group custom-form-group">
                     <select id="select" disabled className="custom-select col-sm-3">
                        <option value="0" disabled>Select Option</option>
                        <option value="1">Text</option>
                        <option value="2">Checkbox</option>
                        <option value="3">Link</option>
                     </select>
                  </div>
                </td>
            </tr>
          </tbody>
        </table>
</div>
 );
}
}

export default Table;
