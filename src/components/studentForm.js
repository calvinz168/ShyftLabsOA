import React, {useState, useRef} from "react";
// import DatePicker from 'react-datepicker'

const StudentForm = () => {
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="studentForm">
      <form>
        <label>
          First name:
          <input type="text" name="fname" />
        </label>
        <label>
          Family name:
          <input type="text" name="lname" />
        </label>
        <label>
          Date of Birth:
          <input type="date" onChange={handleChange} ref={dateInputRef}></input>
        </label>
        <input type="submit" value="Submit" />
        {/* all need to be filled, dob must be valid, student must be at least 10 years old */}
      </form>
    </div>
  );
};

export default StudentForm;
