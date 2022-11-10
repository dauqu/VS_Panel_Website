import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

import { FaPlayCircle } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import axios from "axios";
function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  // --------------
  const [user, setUser] = useState("");
  // console.log(setUser.length);
  async function GetUsers() {
    try {
      const response = await axios.get("http://localhost:4000/api/profile", {
        withCredentials: true,
      });
      setUser(response.data);
      // console.log(response.data);
    } catch (error) {
      // console.log(error);
    }
  }
  React.useEffect(() => {
    GetUsers();
  }, []);

  //------------------
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="mainheader bg-[#165461]    ">
        {/* top part-----------start form here------------------ */}
        {/* <div className="flex justify-around p-6 items-center ">
        <div className="text-[#F6F9F9] text-[30px] text-center font-semibold w-[100px]">
          saasta
        </div>
        <div className=" items-center justify-center text-white text-[15px] w-full  hidden md:flex">
          <div className="m-2 text-center cursor-pointer">Home+</div>
          <div className="m-2 text-center cursor-pointer">Features</div>
          <div className="m-2 text-center cursor-pointer">Service</div>
          <div className="m-2 text-center cursor-pointer">Pricing</div>
          <div className="m-2 text-center cursor-pointer">Contact</div>
        </div>
        <div className="min-w-[120px] hidden md:block">
          <button className="bg-[#337681] p-2 text-[#DCE8E9] text-[14px] text-center font-semibold">
            Get The App
          </button>
        </div>
        
        <div className="" onClick={function() {
            if (document.getElementsByClassName("menubar")[0].style.left == "0px") {
              document.getElementsByClassName("menubar")[0].style.left = "-100%";
              document.getElementsByClassName("menubar")[0].style.transition = "0.5s";
            } else {
              document.getElementsByClassName("menubar")[0].style.left = "0px";
              document.getElementsByClassName("menubar")[0].style.transition = "0.5s";
            }
          }}>
          <button className="block md:hidden"><GoThreeBars style={{color:"white"}}/></button>
        </div>
      </div> */}
        <nav className="w-full ">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link to="/">
                  <h2 className="text-2xl text-[white] font-bold">Saastaa</h2>
                </Link>
                <div className="md:hidden">
                  <button
                    className="p-2 text-[white] rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-4 md:flex md:space-x-4 md:space-y-0">
                  <li className="text-[white] hover:cursor-pointer hover:font-bold">
                    <a href="javascript:void(0)">Home</a>
                  </li>

                  <li className="text-[white] hover:cursor-pointer hover:font-bold">
                    <a href="javascript:void(0)">About US</a>
                  </li>
                  <li className="text-[white] hover:cursor-pointer hover:font-bold">
                    <a href="javascript:void(0)">Contact US</a>
                  </li>
                  {user.length == 0 ? (
                    <li className="text-[white] hover:cursor-pointer hover:font-bold">
                      <Link to="/login">Login</Link>
                    </li>
                  ) : (
                    <li className="text-[white] hover:cursor-pointer hover:font-bold">
                      <Link to="/profile">Profile</Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="min-w-[120px] hidden md:block">
              <button className="bg-[#337681] p-2 text-[#DCE8E9] text-[14px] text-center font-semibold">
                Get The App
              </button>
            </div>
          </div>
        </nav>
        {/* top part-----------ends here------------------ */}

        {/* middle part-----------start form here------------------ */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5, stiffness: 500 }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div className="text-center items-center  p-8 mb-[180px]">
            <div className="text-white font-bold text-[40px]  ">
              Discover With New Dashboard
            </div>
            <div className="  text-[#B1CBCF] text-[17px] md:w-1/2 m-auto text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              qui delectus ad facilis sunt repudiandae quod quas dolorum
              accusantium dignissimos id, corrupti possimus impedit consequuntur
              eveniet sint deleniti! Doloremque, earum.
            </div>
            <div className="flex mt-8 justify-center">
              <div className="">
                <button className="bg-[#FFFFFF] p-2 text-[#3E6F7A] font-semibold  ">
                  Get Started
                </button>
              </div>
              <div className="w-[20px]"></div>
              <div className="flex items-center cursor-pointer  ">
                <div>
                  <FaPlayCircle
                    style={{
                      color: "white",
                      fontSize: "38px",
                      border: "3px solid #71A1A8",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="text-[#D3E2E4] ml-2 text-[18px] ">
                  Play Demo
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* middle part-----------ends here------------------ */}
      </div>
      {/* <div className="menubar fixed  left-[-100%] top-[80px] h-[100vh] bg-[white] p-4 z-10 w-full">
        <div className="cursor-pointer text-[20px] font-semibold mt-4">
          Home{" "}
        </div>
        <div className="cursor-pointer text-[20px] font-semibold mt-4">
          Feature
        </div>
        <div className="cursor-pointer text-[20px] font-semibold mt-4">
          Service
        </div>
        <div className="cursor-pointer text-[20px] font-semibold mt-4">
          Pricing
        </div>
        <div className="cursor-pointer text-[20px] font-semibold mt-4">
          Contact
        </div>
      </div> */}
    </>
  );
}

export default Header;
