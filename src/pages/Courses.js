import React, { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CoursesForm from "../components/CoursesForm";
import CoursesDisplay from "../components/CoursesDisplay";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const coursesFromServer = await fetchCourses();
      setCourses(coursesFromServer);
    };

    getCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await fetch("http://localhost:5000/courses");
    const data = await res.json();

    return data;
  };

  const addCourse = async (course) => {
    const res = await fetch("http://localhost:5000/courses", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(course),
    });

    const data = await res.json();
    setCourses([...courses, data]);
  };

  return (
    <div className="mainContainer">
      <Header />
      <div className="d-flex flex-row">
        <SideNav />
        <div className="mainContent d-flex flex-row">
          <CoursesForm onAdd={addCourse} />
          <CoursesDisplay coursesValues={courses} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
