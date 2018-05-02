import React, { Component } from 'react'

class ConstructProperty extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInitialState() {
    return {
      property_name: "",
      property_value: ""
    }
  }

  resetState() {
    this.setState(this.getInitialState());
  }

  handlePropertyInput(event, type) {
    let update = {};
    update[`property_${type}`] = event.target.value;
    this.setState(update);
  }

  handleSubmit(e) {
    const { property_name, property_value } = this.state;
    const property = {
      name: property_name,
      value: property_value
    };
    this.props.submitProperty(property);
    this.resetState();
  }

  render() {
    return (
      <div className="example-property-inputs-container form-inline">
        <div className="example-property-name">
          <input
            value={this.state.property_name}
            className="example-property-name-input form-inline"
            type="text"
            onChange={event => this.handlePropertyInput(event, `name`)} /> &nbsp; Enter property name
        </div>
        <div className="example-property-value form-inline">
          <input
            type="text"
            className="example-property-value-input"
            value={this.state.property_value}
            onChange={event => this.handlePropertyInput(event, `value`)}/> &nbsp; Enter property value
        </div>
        <div className="example-property-ctas">
          <span className="example-property-submit example-btn" onClick={this.handleSubmit}>Add Property</span>
        </div>
      </div>
    )
  }

}

// AddProperty.propTypes = {
//   name: PropTypes.string,
//   uri: PropTypes.string
// };

export default ConstructProperty;
