import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    slug: '',
    fieldtype: ''
  };

  nameHandler = (e) => this.setState({ name: e.target.value });
  slugHandler = (e) => this.setState({ slug: e.target.value });

  fieldtypeHandler = (e) => this.setState({ fieldtype: e.target.value });

  submitHandler = (e) => {
    e.preventDefault();
    console.log(`%c${JSON.stringify(this.state, null, 2)}`, "font-size: 20px;")
  };

  renderFieldTypeOptions = () => {};

  render() {
    return (
      <div className="container forms-app">
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={this.submitHandler}>
              <div className="form-group custom-form-group row">
                <label htmlFor="name" className="col-sm-12 col-form-label">Name<sup>*</sup></label>
                <div className="col-sm-8">
                  <input type="text" className="form-control" id="name" placeholder="Your name"
                         value={this.state.name} onChange={this.nameHandler}/>
                </div>
              </div>

              <div className="form-group custom-form-group row">
                <label htmlFor="slug" className="col-sm-12 col-form-label">Slug<sup>*</sup></label>
                <div className="col-sm-8">
                  <input type="text" className="form-control" id="slug" placeholder="Your slug"
                         value={this.state.slug} onChange={this.slugHandler}/>
                </div>
              </div>


              <div className="form-group custom-form-group row">
                <label htmlFor="fieldtype" className="col-sm-12 col-form-label">Field Type<sup>*</sup></label>
                <div className="col-sm-4">
                  <select
                        className="custom-select"
                        id="fieldtype"
                        value={this.state.fieldtype}
                        name="fieldtype"
                        onChange={this.fieldtypeHandler}
                      >
                        <option value="" disabled selected>Select option</option>
                        <option value="vscode">VsCode</option>
                        <option value="atom">Atom</option>

                    { this.renderFieldTypeOptions() }
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
          <div className="col-md-4">
            <pre>
              {JSON.stringify(this.state, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
