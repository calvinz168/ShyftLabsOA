import React from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import StudentForm from "../components/StudentForm";
import { useState } from "react";
import StudentsDisplay from "../components/StudentsDisplay";

const Students = () => {
  const [students, setStudents] = useState([
    // {
    //   id: 0,
    //   fname: "Calvin",
    //   lname: "Zheng",
    //   date: "2024-01-24"
    // },
    // {
    //   id: 1,
    //   fname: "Calvin2",
    //   lname: "Zheng2",
    //   date: "2024-02-24"
    // },
    // {
    //   id: 2,
    //   fname: "Calvin3",
    //   lname: "Zheng3",
    //   date: "2024-03-24"
    // },
  ]);

  const addStudent = (student) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newStudent = { id, ...student };
    setStudents([...students, newStudent]);
  };

  return (
    <div style={style}>
      <Header />
      <div style={{backgroundColor:"blue",display:"inline-flex"}}>
      <SideNav />
      <StudentForm onAdd={addStudent}/>
      <StudentsDisplay studentsValues={students}/>
      </div>
    </div>
  )
}

const style = {
  backgroundColor: "daedf4",
  // outerHeight: 100
};
export default Students;
