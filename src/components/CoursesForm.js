import React, { useState } from "react";

const CoursesForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add the course name!");
      return;
    }

    onAdd({ text });

    setText("");
    alert("New course has been added!");
  };

  return (
    <div className="mainContentForm">
      <h2>New Course Form</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group row">
          <label class="col-sm-5 col-form-label">Course Name:</label>
          <div class="col-sm-7">
            <input
              type="text"
              name="course"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="form-control"
              placeholder="Enter course name"
            />
          </div>
        </div>
        <button
          type="submit"
          value="Submit"
          class="btn btn-primary studentSubmitButton"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CoursesForm;
