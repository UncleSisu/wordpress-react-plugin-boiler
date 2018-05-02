import React, { Component } from 'react';
import Option from './Option';

export default props => {
    const { options } = props;
    const optionsRegistry = Object.keys(options);
    return (
      <div className="example-options-container">
        {
          optionsRegistry.length && optionsRegistry.map((option, id) => {
            console.log('wtf', options, option)
            let name = options[option].name;
            return (
              <Option
                key={`${name}-${id}`}
                option={options[option]}
                name={options[option].name}
                uri={options[option].uri}
                properties={options[option].properties}
              />
            )
          })
        }
      </div>
    )
}
