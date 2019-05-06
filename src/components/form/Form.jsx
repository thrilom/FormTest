import React, { useState, Fragment } from 'react'
import AddSettingsForm from './forms/AddSettingsForm'
import EditSettingsForm from './forms/EditSettingsForm'
import SettingsTable from './tables/SettingsTable'

const App = () => {
	// Data
	const settingsData = [
		{ id: 1, name: 'Tania', slug: 'floppy_diskette', type: 'Text'},
		{ id: 2, name: 'Craig', slug: 'silicone_idolon', type: 'Text'},
		{ id: 3, name: 'Ben', slug: 'drop_slug', type: 'Link'},
	]

	const initialFormState = { id: null, name: '', slug: '', type: ''}

	// Setting state
	const [ setting, setSettings ] = useState(settingsData)
	const [ currentSettings, setCurrentSettings ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// Settings operations
	const addSettings = settings => {
		settings.id = settings.length + 1
		setSettings([ ...setting, settings ])
	}

	const deleteSettings = id => {
		setEditing(false)

		setSettings(setting.filter(settings => settings.id !== id))
	}

	const updateSettings = (id, updatedSettings) => {
		setEditing(false)

		setSettings(setting.map(settings => (settings.id === id ? updatedSettings : settings)))
	}

	const editRow = settings => {
		setEditing(true)

		setCurrentSettings({ id: settings.id, name: settings.name, slug: settings.slug, type: settings.type })
	}

	return (
    <div className="container forms-app p-0">
      <div className="row">
        <div className="col-sm-12 p-0">
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<div className="col-sm-12">
								<h2>Sharing custom field settings</h2>
								<p>You are sharing custom field settings. All custom fields you create will automatically become available to your networked nations.</p>
							</div>
							<EditSettingsForm
								editing={editing}
								setEditing={setEditing}
								currentSettings={currentSettings}
								updateSettings={updateSettings}
							/>
						</Fragment>
					) : (
						<Fragment>
						<div className="col-sm-12">
							<h2>Sharing custom field settings</h2>
							<p>You are sharing custom field settings. All custom fields you create will automatically become available to your networked nations.</p>
						</div>
							<AddSettingsForm addSettings={addSettings} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<SettingsTable settings={setting} editRow={editRow} deleteSettings={deleteSettings} />
				</div>
			</div>
		</div>
  </div>
</div>
	)
}

export default App
