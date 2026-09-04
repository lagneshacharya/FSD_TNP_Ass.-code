import React, { useState } from "react";
import styles from "./StudentForm.module.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const [student, setStudent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setStudent({
      name: name,
      email: email,
      course: course
    });
  };

  return (
    <div className={styles.container}>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Course:</label>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Enter your course"
        />

        <button type="submit">Register</button>
      </form>

      {student && (
        <div className={styles.result}>
          <h2>Submitted Student Details</h2>
          <p><b>Name:</b> {student.name}</p>
          <p><b>Email:</b> {student.email}</p>
          <p><b>Course:</b> {student.course}</p>
        </div>
      )}
    </div>
  );
}

export default App;