import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div className="container">
      <Details />
      <Result />
    </div>
  );
}

function Details() {
  return (
    <div className="detailscontainer">
      <p>
        Name: <span className="namespan">Daniel Atewe ChukwuEmeka</span>
      </p>
      <p>
        Mat. No: <span className="matnospan">9999999</span>
      </p>
      <p>
        level <span className="levelspan">200</span>
      </p>
      <p>
        Course: <span className="coursespan">CMS201</span>
      </p>
      <p>
        Dept: <span className=""> Electrical Engineering</span>
      </p>
    </div>
  );
}

function Result() {
  const [result, setResult] = useState(70);
  // const [grade, setGrade] = useState("A");
  function resultsetter() {
    setResult(document.querySelector("#scoreinput").value);
  }

  const date = 7;

  return (
    <div className="result">
      <div>
        <div className="flex">
          <p>Course</p>
          <p>CMS 202</p>
        </div>

        <div className="flex">
          <p>Score</p>
          <p>{result}</p>
        </div>

        <div className="flex">
          <p>Grade</p>
          <p>
            {result >= 70
              ? "A"
              : result <= 69 && result >= 60
              ? "B"
              : result >= 50 && result <= 59
              ? "C"
              : result >= 45 && result <= 49
              ? "D"
              : "E"}
          </p>
        </div>

        <div className="flex">
          <p>Remark</p>
          <p>
            {result >= 70
              ? "Excellent"
              : result <= 69 && result >= 60
              ? "Good"
              : result >= 50 && result <= 59
              ? "Credit"
              : result >= 45 && result <= 49
              ? "Pass"
              : "You need to work harder"}
          </p>
        </div>
      </div>
      <div className="inputdiv">
        <input
          type="text"
          name="score"
          id="scoreinput"
          placeholder="Enter your Score"
        />
        <button type="button" onClick={resultsetter}>
          Get Grade
        </button>
        {/* {document.onclick(())} */}
      </div>

      <Message
        score={result}
        grade={
          result >= 70
            ? "A"
            : result <= 69 && result >= 60
            ? "B"
            : result >= 50 && result <= 59
            ? "C"
            : result >= 45 && result <= 49
            ? "D"
            : "E"
        }
        remark={
          result >= 70
            ? "Excellent"
            : result <= 69 && result >= 60
            ? "Good"
            : result >= 50 && result <= 59
            ? "Credit"
            : result >= 45 && result <= 49
            ? "Pass"
            : "You need to work harder"
        }
      />
    </div>
  );
}

function Message(props) {
  return (
    <p className="message">
      Your score is {props.score}
      {props.score >= 70
        ? "🥳"
        : props.score <= 69 && props.score >= 60
        ? "😄"
        : props.score >= 50 && props.score <= 59
        ? "😁"
        : props.score >= 45 && props.score <= 49
        ? "😢"
        : "😡"}
      and your grade is {props.grade}.{props.remark}!!!.
    </p>
  );
}
export default App;
