import { useState } from "react";

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

const StatisticLine = (props) => {
  if (props.text == "average") {
    return (
      <tr>
        <td>average {(-1 * props.bad + props.good) / props.total}</td>
      </tr>
    );
  }
  if (props.text == "positive") {
    return (
      <tr>
        <td>positive {(props.good * 100) / props.total} %</td>
      </tr>
    );
  }
  return (
    <>
      <tr>
        <td>
          {props.text} {props.value}
        </td>
      </tr>
    </>
  );
};

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  if (total == 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good}></StatisticLine>
          <StatisticLine text="neutral" value={props.neutral}></StatisticLine>
          <StatisticLine text="bad" value={props.bad}></StatisticLine>
          <StatisticLine text="all" value={total}></StatisticLine>
          <StatisticLine
            text="average"
            bad={props.bad}
            good={props.good}
            total={total}
          ></StatisticLine>
          <StatisticLine
            text="positive"
            good={props.good}
            total={total}
          ></StatisticLine>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"></Button>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"></Button>
      <Button onClick={() => setBad(bad + 1)} text="bad"></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
