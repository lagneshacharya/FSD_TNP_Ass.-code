import React, { createContext } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const student = {
    name: "Rahul",
    course: "B.Tech CSE",
    college: "GIET University"
  };

  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
}