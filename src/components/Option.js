import React, { Component } from 'react';
import ConstructOption from './ConstructOption'
import Properties from './Properties'
import { connect } from 'react-redux'
import { deleteOptionAction } from '../store/actions/optionsActions'
import PropTypes from 'prop-types';


class Option extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState();
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  getInitialState() {
    return {
      edit: false
    }
  }

  resetState() {
    this.setState(this.getInitialState());
  }

  handleChange(e) {
    this.setState({edit: !this.state.edit})
  }

  handleDelete(e) {
    this.props.deleteOption({
      name: this.props.name
    })
  }

  render() {
    const { name, uri, properties, option } = this.props;
    return (
      <div className="example-option-container">
      { this.state.edit ?
        <ConstructOption option={option} finishEdit={this.handleChange} /> : (
        <div className="example-option">
          <p><span className="example-title">Name:</span> {name}</p>
          <p><span className="example-title">URI:</span> {uri}</p>
          <div className="example-option-props">
            <p className="example-title">Properties:</p>
            { Array.isArray(properties) ?
              <Properties
                properties={properties}
                removeProperty={null}
                configView={true}
              />
             : 'No properties configured'}
          </div>
        </div>)}
        { 
        !this.state.edit ?
        (<div className="example-option-ctas">
          <span className="example-change-btn example-btn" onClick={this.handleChange}>Edit Option</span>
          <span className="example-remove-api-btn example-btn" onClick={this.handleDelete}>Delete Option</span></div>) : null
        }
      </div>
    );
  }
}

// option.propTypes = {
//   name: PropTypes.string,
//   uri: PropTypes.string
// };

const mapStateToProps = ({ options }) => ({
  options
})

const mapDispatchToProps = dispatch => ({
  deleteOption: input => dispatch(deleteOptionAction(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(Option);
