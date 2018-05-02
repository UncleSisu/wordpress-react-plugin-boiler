import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postOptionAction } from '../store/actions/optionsActions'
import Properties from './Properties'
import ConstructProperty from './ConstructProperty'

class ConstructSubscriber extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState(props.option);

    // bind events
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePropertySubmit = this.handlePropertySubmit.bind(this);
    this.handlePropertyRemoval = this.handlePropertyRemoval.bind(this);
  }

  getInitialState(option) {
    let state = option || {
      name: "",
      uri: "",
      properties: []
    }

    state.properties = Array.isArray(state.properties) ? state.properties : [];
    return state;
  }

  resetState() {
    this.setState(this.getInitialState());
  }

  handleSubmit(e) {
    const { name, uri, properties } = this.state;
    this.props.postOption({
      name,
      uri,
      properties
    })

    if (this.props.finishEdit) {
      this.props.finishEdit(e);
    }
    this.resetState();
  }

  handleOptionInput(event, type) {
    let update = {};
    update[type] = event.target.value;
    this.setState(update);
  }

  // Properties
  handlePropertySubmit(property) {
    const { properties } = this.state;
    properties.push(property);
    this.setState({
      properties
    });
  }

  handlePropertyRemoval(property) {
    const properties = this.state.properties.filter(prop => {
      return prop.name !== property.name;
    })
    this.setState({ properties });
  }

  render() {
    return (
      <div className="example-construct-container">
        {
          this.props.finishEdit ? 
          (<div className="example-construct-exit" onClick={this.props.finishEdit}>
            <span>X</span>
          </div>)
           : null
        }
        <div className="example-new-option-container form-inline">
          <input
            value={this.state.name}
            className="example-new-option-alias-input form-inline"
            type="text"
            onChange={event => this.handleOptionInput(event, `name`)} /> &nbsp; Enter OPTION name
        </div>
        <div className="example-new-option-uri-container form-inline">
          <input
            type="text"
            className="example-new-option-uri-input"
            value={this.state.uri}
            onChange={event => this.handleOptionInput(event, `uri`)}/> &nbsp; Enter OPTION uri
        </div>
        <div className="example-property-group">
          <h1>Properties</h1>
          <ConstructProperty submitProperty={this.handlePropertySubmit}/>
          <Properties
            properties={this.state.properties}
            removeProperty={this.handlePropertyRemoval}
            configView={false}
          />
        </div>
        <div className="example-construct-ctas">
          <span className="example-option-submit example-btn" onClick={this.handleSubmit}>{this.props.finishEdit ? 'Save Option' : 'Add Option'}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ options }) => ({
  options
})

const mapDispatchToProps = dispatch => ({
  postOption: input => dispatch(postOptionAction(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConstructSubscriber);
