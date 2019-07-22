import React, { useState } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import UserOutputDin from './UserOutputDin/UserOutputDin';
import Validation from './Validation/Validation';
import Char from './Char/Char';

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

  const personChangedHandler = (e, id) => {
    const personIndex = personsState.findIndex(p => {
      return p.id === id;
    });

    const person = { ...personsState[personIndex] };

    person.username = e.target.value;

    const username = [...personsState];

    username[personIndex] = person;

    setPersonState([...username]);
  };

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
    const persons = [...personsState];
    persons.splice(personIndex, 1);
    setPersonState([...persons]);
  };

  let persons = null;

  if (showUsername.usernameIsDisplayed) {
    persons = (
      <div>
        {personsState.map((person, index) => {
          return (
            <UserOutputDin
              clicked={() => deletePerson(index)}
              username={person.username}
              city={person.city}
              key={person.id}
              updated={e => personChangedHandler(e, person.id)}
            />
          );
        })}
      </div>
    );
  }
  const [inputValue, setInputValue] = useState({
    userInput: '',
  });
  const inputChangedHandler = e => {
    setInputValue({ userInput: e.target.value });
  };

  const deleteChar = index => {
    const text = inputValue.userInput.split('');
    text.splice(index, 1);

    const updatedText = text.join('');
    setInputValue({
      userInput: updatedText,
    });
  };
  const charList = inputValue.userInput.split('').map((char, index) => {
    return <Char character={char} key={index} clicked={() => deleteChar(index)} />;
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
      </header>
      <UserInput changed={usernameChangedHandler} username={usernameState.username} />
      <UserOutput username={usernameState.username} />
      <button onClick={toggleUsername}> Other Cities</button>
      {persons}
      <hr />
      <input onChange={inputChangedHandler} value={inputValue.userInput} type="text" />
      <p>{inputValue.userInput}</p>
      <Validation textEntered={inputValue.userInput.length} />
      {charList}
    </div>
  );
}

export default App;
