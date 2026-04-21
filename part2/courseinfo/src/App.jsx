const Course = (props) => {
  return (
    <>
      <Header course={props.course.name}></Header>
      <Content course={props.course.parts}></Content>
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

const Total = (props) => <p>Number of exercises {props.total}</p>;

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
    ],
  };

  return <Course course={course} />;
};

export default App;
