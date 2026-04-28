import axios from "axios";

const db = "http://localhost:3001/persons";

const getAll = () => axios.get(db).then((response) => response.data);

const add = (newPerson) =>
  axios.post(db, newPerson).then((response) => response.data);

export default { getAll, add };
