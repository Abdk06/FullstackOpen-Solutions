const Persons = (props) => {
  return (
    <div>
      {props.persons
        .filter((person) =>
          person.name.toLowerCase().includes(props.filter.toLowerCase()),
        )
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.number}{" "}
            <button onClick={() => props.onClick(person)}> delete</button>
          </p>
        ))}
    </div>
  );
};

export default Persons;
