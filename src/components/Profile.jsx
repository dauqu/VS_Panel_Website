import { data } from "autoprefixer";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import loginplease from "../assets/images/loginPlease.jpg";
import SecondHeader from "./SecondHeader";
import { BiPowerOff } from "react-icons/bi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { MdNotifications } from "react-icons/md";
import { FaKey, FaUserAlt } from "react-icons/fa";
// import { BsFillPatchCheckFill } from "react-icons/bs";
function Profile() {
  // handleLogout
  const HandleUpdate = () => {
    window.alert("This feature will be available soon.");
  };
  // getting data of user profile from profile api
  const [user, setUser] = useState("");
  console.log(setUser.length);
  async function GetUsers() {
    try {
      const response = await axios.get("http://localhost:4000/api/profile", {
        withCredentials: true,
      });
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    GetUsers();
  }, []);

  //   logout function
  async function UserLogut() {
    try {
      const resp = await axios.get("http://localhost:4000/api/logout", {
        withCredentials: true,
      });
      console.log(resp.data);
      console.log("logout done");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {/* header */}
      <SecondHeader />
      {/* main content  */}
      {user.length !== 0 ? (
        <section className="pt-16 sm:pt-32  ">
          <div className=" bg-[#fbfbfb] shadow-xl lg:w-[900px] w-full p-4 sm:p-0  m-auto sm:flex   ">
            <div className="border sm:w-[200px] ">
              <div className="p-4  text-left">
                <div className="w-[150px] m-auto ">
                  <img
                    src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                    className="rounded-full"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="flex justify-center items-center">
                  <div className="text-[22px] flex   font-semibold mt-2 text-center">
                    {user.name}
                  </div>
                  <div className="">
                    <BsFillPatchCheckFill
                      style={{
                        fontSize: "23px",
                        color: "#3392E9",
                        textAlign: "center",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="">
                  <button className="border w-full text-center text-[#342B3D] flex items-center   hover:bg-[#165461] justify-center hover:text-[white]  p-4 ">
                    <div className="w-[30px]">
                      <AiFillHome />
                    </div>
                    <div className="">Account</div>
                  </button>
                </div>
                <div className="">
                  <button
                    className="border w-full text-center text-[#342B3D] flex items-center   hover:bg-[#165461] justify-center hover:text-[white]  p-4 "
                    onClick={() => HandleUpdate()}
                  >
                    <div className="w-[30px]">
                      <FaUserAlt />
                    </div>
                    <div className="">Security</div>
                  </button>
                </div>
                <div className="">
                  <button
                    className="border w-full text-center text-[#342B3D] flex items-center   hover:bg-[#165461] justify-center hover:text-[white]  p-4 "
                    onClick={() => HandleUpdate()}
                  >
                    <div className="w-[30px]">
                      <FaKey />
                    </div>
                    <div className="">Password</div>
                  </button>
                </div>
                <div className="">
                  <button
                    className="border w-full text-center text-[#342B3D] flex items-center   hover:bg-[#165461] justify-center hover:text-[white]  p-4 "
                    onClick={() => HandleUpdate()}
                  >
                    <div className="w-[30px]">
                      <FiMonitor />
                    </div>
                    <div className="">Application</div>
                  </button>
                </div>
                <div className="">
                  <button
                    className="border w-full text-center text-[#342B3D] flex items-center   hover:bg-[#165461] justify-center hover:text-[white]  p-4 "
                    onClick={() => HandleUpdate()}
                  >
                    <div className="w-[30px]">
                      <MdNotifications />
                    </div>
                    <div className="">Notification</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="border w-full p-12">
              <div className="flex items-center justify-between ">
                <div className="text-[25px] text-[#342B3D] font-bold">
                  Account Settings
                </div>
                <div className="">
                  <button
                    className="p-[6px] w-full bg-[#165461] text-[white] rounded font-semibold"
                    onClick={() => UserLogut()}
                  >
                    Logout
                  </button>
                </div>
              </div>

              <div className="md:flex w-full  mt-2">
                <div className="mt-4  w-full md:w-1/2 m-2">
                  <div className="text-[17px] text-[#342B3D] font-semibold">
                    Name
                  </div>
                  <div className="mt-2 ">
                    <input
                      className="rounded w-full "
                      type="text"
                      name=""
                      placeholder={user.name}
                      id=""
                      disabled
                    />
                  </div>
                </div>
                <div className="mt-4 w-full  md:w-1/2  m-2">
                  <div className="text-[17px]  text-[#342B3D] font-semibold">
                    Username
                  </div>
                  <div className="mt-2 ">
                    <input
                      className="rounded w-full"
                      type="text"
                      name=""
                      placeholder={user.username}
                      id=""
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex w-full  mt-2">
                <div className="mt-4  w-full md:w-1/2 m-2">
                  <div className="text-[17px] text-[#342B3D] font-semibold">
                    Email
                  </div>
                  <div className="mt-2 ">
                    <input
                      className="rounded  w-full "
                      type="text"
                      name=""
                      placeholder={user.email}
                      id=""
                      disabled
                    />
                  </div>
                </div>
                <div className="mt-4  w-full md:w-1/2 m-2">
                  <div className="text-[17px]  text-[#342B3D] font-semibold">
                    Address
                  </div>
                  <div className="mt-2 ">
                    <input
                      className="rounded  w-full"
                      type="text"
                      name=""
                      placeholder={user.address}
                      id=""
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex w-full  mt-2">
                <div className="mt-4  w-full md:w-1/2 m-2">
                  <div className="text-[17px] text-[#342B3D] font-semibold">
                    Phone{" "}
                  </div>
                  <div className="mt-2 ">
                    <input
                      className="rounded  w-full "
                      type="text"
                      name=""
                      placeholder={user.phone}
                      id=""
                      disabled
                    />
                  </div>
                </div>
                <div className="mt-4  w-full md:w-1/2 m-2">
                  <div className="text-[17px]  text-[#342B3D] font-semibold">
                    Age
                  </div>
                  <div className="mt-2 ">
                    <input
                      className="rounded  w-full"
                      type="text"
                      name=""
                      placeholder={user.age}
                      id=""
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="flex mt-8 justify-center w-1/2">
                <div className="w-[100px]">
                  <button
                    className="p-[6px] w-full bg-[#165461] text-[white] rounded font-semibold"
                    onClick={() => HandleUpdate()}
                  >
                    Update
                  </button>
                </div>
                <div className="w-[100px]">
                  <button className="p-2 font-semibold text-[#342B3D] w-full ">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="pt-16 bg-blueGray-50">
          <div className="w-full lg:w-4/12 px-4 mx-auto ">
            <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <img src={loginplease} alt="" srcset="" />
                  <div className="pb-4">
                    <h1 className="text-3xl font-bold text-center">
                      Please Login First
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Profile;
