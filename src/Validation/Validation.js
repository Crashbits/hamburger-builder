import React from 'react';

const Validation = props => {
  let result = null;
  if (props.textEntered !== 0 && props.textEntered <= 5) {
    result = <p>Text too short</p>;
  }

  return <div>{result}</div>;
};

export default Validation;
