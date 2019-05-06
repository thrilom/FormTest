import React from 'react'
import arrow from '../../../Select.svg';

const SettingsTable = props => (
  <div>
  <table className="people-table">
    <thead>
      <tr className="header">
        <th scope="col"> </th>
        <th scope="col">Name</th>
        <th scope="col">Slug</th>
        <th scope="col">Type</th>
        <th scope="col"> </th>
      </tr>
    </thead>
    <tbody>
      {props.settings.length > 0 ? (
        props.settings.map(settings => (
          <tr className="created-row" key={settings.id}>
            <th className="edit-cell" scope="row">
              <button onClick={() => { props.editRow(settings) }} className="editSettings button muted-button">
                Edit
              </button>
            </th>
            <td>{settings.name}</td>
            <td>{settings.slug}</td>
              <td className="edit-cell">
                <div className="form-group custom-form-group">
                  <div className="custom-dropdown dropdown col-sm-12 p-0">
                    <button className="btn btn-dropdown dropdown-toggle col-sm-12 p-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {settings.type}
                      <img className="select-arrow" src={arrow} alt="Select Arrow" />
                    </button>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <button onClick={() => props.deleteSettings(settings.id)} className="deleteSettings btn btn-secondary">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No settings</td>
        </tr>
      )}
    </tbody>
  </table>
</div>
)

export default SettingsTable
