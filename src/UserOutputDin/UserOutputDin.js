import React from 'react';
import './UserOutputDin.css';

const userOutputDin = props => {
  return (
    <div className="UserOutputDin" onDoubleClick={props.clicked}>
      <p>Username: {props.username}</p>
      <p>Lives in: {props.city}</p>
      <input value={props.username} onChange={props.updated} />
    </div>
  );
};
userOutputDin.defaultProps = { city: 'San Francisco' };

export default userOutputDin;
