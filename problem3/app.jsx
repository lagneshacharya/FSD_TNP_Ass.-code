import React, { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

import { StudentProvider, StudentContext } from "./StudentContext";

// Home Page
function Home() {
  const student = useContext(StudentContext);

  return (
    <div>
      <h1>Student Course Management</h1>
      <h2>Welcome, {student.name}</h2>
      <p>College: {student.college}</p>
    </div>
  );
}

// Courses Page
function Courses() {
  return (
    <div>
      <h1>Courses</h1>

      <ul>
        <li>
          <Link to="/course/101">React JS</Link>
        </li>

        <li>
          <Link to="/course/102">Node JS</Link>
        </li>
      </ul>
    </div>
  );
}

// Dynamic Course Page
function Course() {
  const { id } = useParams();

  return (
    <div>
      <h1>Course Details</h1>

      {id === "101" && <p>Course: React JS</p>}
      {id === "102" && <p>Course: Node JS</p>}

      <p>Course ID: {id}</p>
    </div>
  );
}

// About Page
function About() {
  const student = useContext(StudentContext);

  return (
    <div>
      <h1>About</h1>
      <p>Student Name: {student.name}</p>
      <p>Course: {student.course}</p>
      <p>This is a Student Course Management Application.</p>
    </div>
  );
}

// Main App
function App() {
  return (
    <StudentProvider>
      <BrowserRouter>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/courses">Courses</Link> |{" "}
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />

          {/* Dynamic Route */}
          <Route path="/course/:id" element={<Course />} />
        </Routes>

      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;