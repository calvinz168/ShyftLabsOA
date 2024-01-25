import React from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import StudentForm from "../components/StudentForm";
import { useState, useEffect } from "react";
import StudentsDisplay from "../components/StudentsDisplay";
import Footer from "../components/Footer";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const studentsFromServer = await fetchStudents();
      setStudents(studentsFromServer);
    };

    getStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await fetch("http://localhost:5000/students");
    const data = await res.json();

    return data;
  };

  const addStudent = async (course) => {
    const res = await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(course),
    });

    const data = await res.json();
    setStudents([...students, data]);
  };

  return (
    <div className="mainContainer">
      <Header />
      <div className="d-flex flex-row">
        <SideNav />
        <div className="mainContent d-flex flex-row">
          <StudentForm onAdd={addStudent} />
          <StudentsDisplay studentsValues={students} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Students;
