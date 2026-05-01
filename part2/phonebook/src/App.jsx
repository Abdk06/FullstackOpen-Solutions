import { useState, useEffect } from "react";
import servicePerson from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const hook = () => {
    servicePerson.getAll().then((initialPersons) => setPersons(initialPersons));
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
    let existingPerson;
    if ((existingPerson = persons.find((person) => person.name === newName))) {
      const updatedNumber = { ...existingPerson, number: newNum };
      if (
        confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        servicePerson.updatePerson(updatedNumber).then((updatedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id === updatedPerson.id ? updatedPerson : person,
            ),
          );
        });
        return;
      } else {
        return;
      }
    }

    const newPerson = {
      name: newName,
      number: newNum,
    };

    servicePerson.addPerson(newPerson).then((addedPerson) => {
      setPersons(persons.concat(addedPerson));
      setNewName("");
      setNewNum("");
    });
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const deletePerson = (person) => {
    if (confirm(`Delete ${person.name}?`)) {
      servicePerson.deletePerson(person.id).then((deletedPerson) => {
        setPersons(persons.filter((person) => person.id != deletedPerson.id));
      });
    }
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
      <Persons
        persons={persons}
        filter={newFilter}
        onClick={deletePerson}
      ></Persons>
    </div>
  );
};

export default App;
