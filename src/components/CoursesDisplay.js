import React from "react";

const CoursesDisplay = ({ coursesValues }) => {
  return (
    <div>
      <h2>Current Courses List</h2>
      <ul>
        {coursesValues.map((course, index) => (
          <li>
            <h3 key={index}> {course.text} </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesDisplay;
