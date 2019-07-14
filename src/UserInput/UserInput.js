import React from 'react';

const userInput = props => {
  const styles = {
    border: '2px solid lightblue',
    padding: '3px',
    borderRadius: '5px',
  };
  return <input type="text" style={styles} onChange={props.changed} value={props.username} />;
};

export default userInput;
