import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const hook = () => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  };

  useEffect(hook, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumChange = (event) => {
    setNewNum(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
      number: newNum,
    };

    axios.post("http://localhost:3001/persons", newPerson).then((response) => {
      setPersons(persons.concat(response.data));
      setNewName("");
      setNewNum("");
    });
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange} value={newFilter}></Filter>
      <h3>Add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        onChangeName={handleNameChange}
        valueName={newName}
        onChangeNum={handleNumChange}
        valueNum={newNum}
      ></PersonForm>
      <h3>Numbers</h3>
      <Persons persons={persons} filter={newFilter}></Persons>
    </div>
  );
};

export default App;
