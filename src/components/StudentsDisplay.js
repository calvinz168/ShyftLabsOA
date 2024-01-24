import React from "react";
import Student from "./Student";

const StudentsDisplay = ({ studentsValues }) => {
  return (
    <>
      {studentsValues.map((student) => (
        <Student key={student.id} student={student} />
      ))}
    </>
  );
};

export default StudentsDisplay
