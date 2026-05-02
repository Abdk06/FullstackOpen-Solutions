const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        name:{" "}
        <input onChange={props.onChangeName} value={props.valueName}></input>
      </div>
      <div>
        number: <input onChange={props.onChangeNum} value={props.valueNum} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
