import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

import { FaPlayCircle, FaShoppingCart } from "react-icons/fa";
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
        <nav className="w-full ">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link to="/">
                  <h2 className="text-2xl text-[white] font-bold">Dauqu</h2>
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
                className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                  }`}
              >
                <ul className="items-center justify-center space-y-4 md:flex md:space-x-4 md:space-y-0">
                  <li className="text-[white] hover:cursor-pointer hover:font-bold">
                    <Link to="/">Home</Link>
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
                    <>
                      <li className="text-[white] hover:cursor-pointer hover:font-bold">
                        <Link to="/profile">Profile</Link>
                      </li>
                    </>
                  )}

                </ul>
              </div>
            </div>
            <div className="min-w-[120px] hidden md:block">
              <button className="bg-[#337681] p-2 text-[#DCE8E9] text-[14px] text-center font-semibold">
                Install Now 
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
          transition={{ duration: 0.7, stiffness: 500 }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div className="text-center items-center  p-8">
            <div className="text-white font-bold text-[40px] mt-10">
              Diploy your app in minutes with Dauqu
            </div>
            <div className="  text-[#B1CBCF] text-[17px] md:w-1/2 m-auto text-center mt-5">
              Using Dauqu you can deploy your app in minutes. Dauqu is a cloud based platform that allows you to deploy your app in minutes. Dauqu support all major languages and frameworks. 
            </div>
            <div className="flex mt-8 justify-center">
              <div className="">
                <button className="bg-[#FFFFFF] p-2 text-[#3E6F7A] font-semibold mt-10">
                  Get Started
                </button>
              </div>
              <div className="w-[20px]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Header;
