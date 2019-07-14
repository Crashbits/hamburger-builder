import React, { useState } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  const [usernameState, usernameChanged] = useState({
    username: 'IncrediblyHumb',
  });

  const [showUsername, ShowUsernameChanged] = useState({
    usernameIsDisplayed: false,
  });

  const [personsState, setPersonState] = useState([
    { username: 'Gilbert', city: 'Nevada', id: 1 },
    { username: 'Marina', city: 'Los Angeles', id: 2 },
    { username: 'Hermes', city: 'Chicago', id: 3 },
  ]);

  const usernameChangedHandler = e => {
    usernameChanged({
      username: e.target.value,
    });
  };

  const toggleUsername = () => {
    const userShow = showUsername.usernameIsDisplayed;
    ShowUsernameChanged({
      usernameIsDisplayed: !userShow,
    });
  };

  const deletePerson = personIndex => {
    const persons = personsState;
    persons.splice(personIndex, 1);
    setPersonState([...persons]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
      </header>
      <UserInput changed={usernameChangedHandler} username={usernameState.username} />
      <UserOutput username={usernameState.username} key={14} />
      <UserOutput username="Crashbits" key={24} />
      <button onClick={toggleUsername}> Other Cities</button>
      {showUsername.usernameIsDisplayed ? (
        <div>
          {personsState.map((person, index) => {
            return (
              <UserOutput
                clicked={() => deletePerson(index)}
                username={person.username}
                city={person.city}
                key={person.id}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default App;
