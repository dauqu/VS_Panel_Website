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
function Profile() {
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
        <section className="pt-16 bg-blueGray-50">
          <div className="w-full lg:w-4/12 px-4 mx-auto ">
            <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 flex justify-center">
                    <div className="w-[100px] m-auto">
                      <img
                        alt="userImg"
                        src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none  m-auto max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 text-center items-center  mt-2">
                    <div className="flex justify-center py-4 lg:pt-4 pt-2">
                      <div className="mr-4 p-3 text-center items-center">
                        <BsFillPatchCheckFill style={{fontSize:"23px",color:"#3392E9",textAlign:"center"}} className="m-auto   mt-[6px]   "/>
                          
                        <span className="text-sm   font-semibold">
                         Subscribe
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm   font-semibold">
                          Projects
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center  ">
                        <button
                          className="bg-[#337681] hover:bg-[#165461] "
                          onClick={() => UserLogut()}
                        >
                          <div className="flex items-center text-center p-2  ">
                            <BiPowerOff
                              style={{ fontSize: "20px" }}
                              className="text-white "
                            />
                            <div className="text-white m-[2px]">Logout</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold leading-normal   text-blueGray-700 mb-2">
                    Hi &nbsp; {user.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold  ">
                    <i className="fas fa-map-marker-alt mr-2   text-blueGray-400"></i>
                    {user.email}
                  </div>

                  <div className="mb-2 text-blueGray-600 mt-6">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    Address - {user.address}
                  </div>
                  <div className="mb-2 text-blueGray-600  ">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Username - {user.username}
                  </div>
                  <div className="mb-2 text-blueGray-600 ">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    Phone Number - {user.phone}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg text-justify leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                    </div>
                  </div>
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
