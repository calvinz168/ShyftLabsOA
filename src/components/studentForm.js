import React, { useState } from "react";
import validator from "validator";

const StudentForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add the first name");
      return;
    }
    if (!text2) {
      alert("Please add the last name");
      return;
    }

    const formattedDate = date.split("-");
    const formattedDate2 = date.replaceAll("-","/")
    console.log(formattedDate2)
    console.log(validator.isDate(new Date(date)))
    if (
      parseInt(formattedDate[0]) < 2024 &&
      parseInt(formattedDate[0]) > 2014
    ) {
      alert("Student must be at least 10 years old");
      return;
    }

    if (!validator.isDate(new Date(date))) {
      alert("Please add a valid date");
      return;
    }

    onAdd({ text, text2, date });

    setText("");
    setText2("");
    setDate("");

    alert("New student has been added!");
  };

  return (
    <div className="studentForm">
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>
            First name:
            <input
              type="text"
              name="fname"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <div className="form-control">
          <label>
            Family name:
            <input
              type="text"
              name="lname"
              value={text2}
              onChange={(e) => setText2(e.target.value)}
            />
          </label>
        </div>
        <div className="form-control">
          <label>
            Date of Birth:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min="1900-1-1"
              max="2014-12-31"
            ></input>
          </label>
        </div>
        <input type="submit" value="Submit" className="btn btn-outline-dark" />
      </form>
    </div>
  );
};

export default StudentForm;
