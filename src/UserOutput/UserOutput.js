import React from 'react';
import './UserOutput.css';

const userOutput = props => {
  return (
    <div className="UserOutput" onDoubleClick={props.clicked}>
      <p>Username: {props.username}</p>
      <p>Lives in: {props.city}</p>
    </div>
  );
};
userOutput.defaultProps = { city: 'San Francisco' };

export default userOutput;
