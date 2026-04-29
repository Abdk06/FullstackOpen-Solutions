import axios from "axios";

const db = "http://localhost:3001/persons";

const getAll = () => axios.get(db).then((response) => response.data);

const addPerson = (newPerson) =>
  axios.post(db, newPerson).then((response) => response.data);

const deletePerson = (id) =>
  axios.delete(`${db}/${id}`).then((response) => response.data);

export default { getAll, addPerson, deletePerson };
