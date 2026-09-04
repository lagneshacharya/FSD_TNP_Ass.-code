import React from "react";

function Student(props) {
  return (
    <div>
      <h2>Student Profile</h2>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
      <p>College: {props.college}</p>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div>
      <Student
        name="Rahul"
        course="B.Tech CSE"
        college="GIET University"
      />

      <Student
        name="Priya"
        course="B.Tech IT"
        college="GIET University"
      />
    </div>
  );
}

export default App;