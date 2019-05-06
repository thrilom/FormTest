import React, { useState } from 'react'

const AddSettingsForm = props => {
	const initialFormState = { id: null, name: '', slug: '', type: '' }
	const [ setting, setSettings ] = useState(initialFormState)

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
							if (!setting.name || !setting.slug || !setting.type) return

							props.addSettings(setting)
							setSettings(initialFormState)
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
							<p className="mute-text">Choose carefully, for data integrity reasons, this cannot be changed later.</p>
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
									<option value="text">Text</option>
									<option value="checkbox">Checkbox</option>
									<option value="link">Link</option>

						</select>
						</div>
					</div>

					<div className="form-group row">
						<div className="col-sm-10">
							<button type="submit" className="btn btn-primary">Create Field</button>
						</div>
					</div>
			</form>
		</div>
	</div>
</div>
	)
}

export default AddSettingsForm
