import React from "react";
import Student from "./Student";

const StudentsDisplay = ({ studentsValues }) => {
  return (
    <div>
      <h2>Current Student List</h2>
      {studentsValues.map((student) => (
        <Student key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentsDisplay;