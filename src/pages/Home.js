import React from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="mainContainer">
      <Header />
      <div className="d-flex flex-row">
        <SideNav />
        <div className="mainContent">
          <h2>Welcome to the Student Result Management System!</h2>
          <h2>Please select an option from the side navigation bar</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;