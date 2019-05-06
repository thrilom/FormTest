import React, { useState, useEffect } from 'react'

const EditSettingsForm = props => {
  const [ setting, setSettings ] = useState(props.currentSettings)

  useEffect(
    () => {
      setSettings(props.currentSettings)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setSettings({ ...setting, [name]: value })
  }

  return (
    <div className="container forms-app">
			<div className="row">
				<div className="col-sm-12">
          <form
            onSubmit={event => {
              event.preventDefault()

              props.updateSettings(setting.id, setting)
            }}
          >
          <div className="form-group custom-form-group row">
            <label htmlFor="name" className="col-sm-12 col-form-label">Name<sup>*</sup></label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="name" placeholder=""
                     name="name" value={setting.name} onChange={handleInputChange} />
            </div>
          </div>

          <div className="form-group custom-form-group row">
            <label htmlFor="slug" className="col-sm-12 col-form-label">Slug<sup>*</sup></label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="slug" placeholder=""
                     name="slug" value={setting.slug} onChange={handleInputChange} />
            </div>
            <div className="col-sm-6">
  						<p class="mute-text">Choose carefully, for data integrity reasons, this cannot be changed later.</p>
  					</div>
          </div>

          <div className="form-group custom-form-group row">
						<label htmlFor="fieldtype" className="col-sm-12 col-form-label">Field Type<sup>*</sup></label>
						<div className="col-sm-4">
              <select
  									className="custom-select"
  									id="fieldtype"
  									value={setting.type}
  									name="type"
  									onChange={handleInputChange}
  								>
  									<option value="Select option">Select option</option>
  									<option value="Text">Text</option>
  									<option value="Checkbox">Checkbox</option>
  									<option value="Link">Link</option>

  						</select>
						</div>
					</div>

          <div className="form-group row">
            <div className="col-sm-6">
              <button type="submit" className="btn btn-primary">Update field</button>

              <button onClick={() => props.setEditing(false)} className="d-none btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default EditSettingsForm
