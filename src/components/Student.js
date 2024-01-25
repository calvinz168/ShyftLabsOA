import React from "react";

const Student = ({ student }) => {
  return (
    <div className="student">
      <ul>
        <li>
          <h3>
            {student.text} {student.text2}
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default Student;
