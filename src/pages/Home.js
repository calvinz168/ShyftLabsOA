import React from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

const Home = () => {
  return (
    <div style={style}>
        <Header/>
        <SideNav/>
    </div>
  )
}

const style = {
    backgroundColor: "daedf4",
    // outerHeight: 100
};

export default Home