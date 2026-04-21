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

export default Course;
