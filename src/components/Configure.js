import React from 'react';
import Options from './Options';

export default props => (
  <div className='container'>
    <h1>Options</h1>
    <Options options={props.options}/>
  </div>
);
