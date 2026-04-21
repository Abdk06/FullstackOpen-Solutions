const Course = (props) => {
  return (
    <>
      {props.courses.map((course) => (
        <div key={course.id}>
          <Header course={course.name}></Header>
          <Content course={course.parts}></Content>
          <Total course={course.parts}></Total>
        </div>
      ))}
    </>
  );
};

const Header = (props) => <h2>{props.course}</h2>;

const Content = (props) => (
  <>
    {props.course.map((part) => (
      <Part key={part.id} name={part.name} exercises={part.exercises}></Part>
    ))}
  </>
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
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </>
  );
};

export default App;
