import React from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import StudentForm from "../components/StudentForm";

const Students = () => {
  return (
    <div style={style}>
      <Header />
      <div style={{backgroundColor:"blue",display:"inline-flex"}}>
      <SideNav />
      <StudentForm />
      </div>
    </div>
  )
}

const style = {
  backgroundColor: "daedf4",
  // outerHeight: 100
};
export default Students;
