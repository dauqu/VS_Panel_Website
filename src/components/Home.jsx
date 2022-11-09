import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
       
      <div className="">
        <Header />
      </div>
      <div className="">
        <Body />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
