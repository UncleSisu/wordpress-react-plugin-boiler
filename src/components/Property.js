import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Property extends Component {
  constructor(props) {
    super(props)
    this.handleRemoval = this.handleRemoval.bind(this);
  }

  handleRemoval(e, property) {
    this.props.removeProperty(property);
  }

  render() {
    const { property, configView } = this.props;
    return (
      <div className="example-property-item">
      <pre>{`\t{\n\t name: ${property.name},\n\t value: ${property.value}\n\t},`}</pre>
      {!configView ?
        (<span className="example-property-remove" onClick={(e) => this.handleRemoval(e, property)}>Remove</span>)
        : null}
      </div>
    );
  }
}

// Property.propTypes = {
//   name: PropTypes.string,
//   uri: PropTypes.string
// };

export default Property;
