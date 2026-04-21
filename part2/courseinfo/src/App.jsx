const Course = (props) => {
  return (
    <>
      <Header course={props.course.name}></Header>
      <Content course={props.course.parts}></Content>
      <Total course={props.course.parts}></Total>
    </>
  );
};

const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) => (
  <div>
    {props.course.map((part) => (
      <Part key={part.id} name={part.name} exercises={part.exercises}></Part>
    ))}
  </div>
);

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
);

const Total = (props) => {
  const parts = props.course.map((obj) => obj.exercises);

  const sumParts = (sum, part) => {
    return sum + part;
  };

  const total = parts.reduce(sumParts, 0);
  return (
    <>
      <p>total of {total} exercises</p>
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
