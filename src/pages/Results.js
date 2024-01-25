import React from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { useState, useEffect } from "react";
import GradeTable from "../components/GradeTable";
import Footer from "../components/Footer";

const Results = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectionCourse, setSelectionCourse] = useState("Course");
  const [selectionStudent, setSelectionStudent] = useState("Student Name");
  const [selectionGrade, setSelectionGrade] = useState("-");

  const onAdd = async (course) => {
    const res = await fetch("http://localhost:5000/grades", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(course),
    });

    const data = await res.json();
    setStudents([...students, data]);
  };

  function handleSelectCourse(value) {
    setSelectionCourse(value.target.value);
  }

  function handleSelectStudent(value) {
    setSelectionStudent(value.target.value);
  }

  function handleSelectGrade(value) {
    setSelectionGrade(value.target.value);
  }

  useEffect(() => {
    const getStudents = async () => {
      const studentsFromServer = await fetchStudents();
      setStudents(studentsFromServer);
    };

    const getCourses = async () => {
      const coursesFromServer = await fetchCourses();
      setCourses(coursesFromServer);
    };
    getStudents();
    getCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await fetch("http://localhost:5000/courses");
    const data = await res.json();
    return data;
  };

  const fetchStudents = async () => {
    const res = await fetch("http://localhost:5000/students");
    const data = await res.json();

    return data;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (selectionCourse === "Course" || selectionCourse === "placeholder") {
      alert("Please select a course!");
      return;
    }
    if (
      selectionStudent === "Student Name" ||
      selectionStudent === "placeholder"
    ) {
      alert("Please select a student!");
      return;
    }
    if (selectionGrade === "-" || selectionGrade === "placeholder") {
      alert("Please select a grade!");
      return;
    }

    onAdd({ selectionCourse, selectionStudent, selectionGrade });
    window.location.reload(false);
    alert("New student grade has been added!");
  };

  return (
    <div>
      <Header />
      <div className="d-flex flex-row">
        <SideNav />
        <div className="coursesForm">
          <h2 className="newStudentTitle">Enter Students' Grades</h2>
          <div className=" d-flex flex-row">
            <form onSubmit={onSubmit}>
              <div className="form-group row">
                <label class="col-sm-5 col-form-label">Select a Course:</label>
                <div class="col-sm-7">
                  <select
                    className="form-control"
                    onChange={handleSelectCourse}
                    defaultValue={"placeholder"}
                  >
                    <option value={"placeholder"}>Select Course</option>
                    {courses.map((course) => (
                      <option value={course.text}>{course.text}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label class="col-sm-5 col-form-label">Select a Student:</label>
                <div class="col-sm-7">
                  <select
                    className="form-control"
                    onChange={handleSelectStudent}
                    defaultValue={"placeholder"}
                  >
                    <option value={"placeholder"}>Select Student</option>
                    {students.map((student) => (
                      <option value={student.text + " " + student.text2}>
                        {student.text} {student.text2}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label class="col-sm-5 col-form-label">Select a Grade:</label>
                <div class="col-sm-7">
                  <select
                    className="form-control"
                    onChange={handleSelectGrade}
                    defaultValue={"Select Grade"}
                  >
                    <option value={"placeholder"}>Select Grade</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                  </select>
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
            <GradeTable onAdd={onAdd} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Results;
