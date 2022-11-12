import React from "react";
import img from "../assets/images/ar.png";
import img1 from "../assets/images/gii.png";
import img2 from "../assets/images/nf.png";
import img3 from "../assets/images/en.png";
import img4 from "../assets/images/sl.png";
import { AiFillEye } from "react-icons/ai";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { FaGooglePlay, FaMobile, FaEdit, FaDatabase } from "react-icons/fa";
import { AiFillSetting, AiFillDollarCircle, AiFillStar } from "react-icons/ai";
import { AiFillBulb } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { MdFormatQuote } from "react-icons/md";
import user from "../assets/images/user.png";
import user2 from "../assets/images/user2.png";
import { FiMonitor } from "react-icons/fi";
import { GrAmazon } from "react-icons/gr";
import { SiAppstore } from "react-icons/si";
import run from "../assets/images/run.png";
import trust from "../assets/images/trust.png";
import anl from "../assets/images/anl.png";
import lock from "../assets/images/lock.png";
import bgg from "../assets/images/bgg.png";
import bg from "../assets/images/bg.png";
import back from "../assets/images/back.png";
import "../assets/css/Body.css";
import Slider from "./Slider";
import { motion } from "framer-motion";
import { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";

function Body() {
  // stripe payment gateway code strat from here------------------------
  const plan1 = 15,
    plan2 = 25,
    plan3 = 35,
    plan4 = 45;
    
  const handleToken = (token) => {
    fetch("http://localhost:4000/api/stripepayment/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, plan1, plan2, plan3, plan4 }),
    })
      .then((res) => res.json())
      .then((_) => {
        window.alert("Transaction Successful.");
      })
      .catch((_) => window.alert("Transaction Failed."));
  };
  // stripe payment gateway code end here------------------------

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
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
      {" "}
      <div className="">
        <div className="imagecontiner mt-12">
          <img
            src={back}
            style={{
              position: "relative",
              top: "-200px",
              margin: "auto",
              borderRadius: "8px",
            }}
            alt=""
          />
        </div>
        {/* <div className="flex justify-evenly  p-10">
      <div className="">
        <img
          src={img2}
          style={{ width: "70%", margin: "auto" }}
          alt=""
          srcset=""
        />
      </div>
      <div className="">
        <img
          src={img1}
          style={{ width: "70%", margin: "auto" }}
          alt=""
          srcset=""
        />
      </div>
      <div className="">
        <img
          src={img}
          style={{ width: "70%", margin: "auto" }}
          alt=""
          srcset=""
        />
      </div>
      <div className="">
        <img
          src={img4}
          style={{ width: "70%", margin: "auto" }}
          alt=""
          srcset=""
        />
      </div>
      <div className="">
        <img
          src={img3}
          style={{ width: "70%", margin: "auto" }}
          alt=""
          srcset=""
        />
      </div>
    </div> */}
        <div className="">
          <Slider />
        </div>
        {/* middle content */}
        <div className="bg-[#FAFAFA] items-center p-8 xl:p-16   ">
          <div className="items-center flex justify-center">
            <AiFillEye
              className="shadow-lg"
              style={{
                color: "#165461",
                fontSize: "50px",
                border: "10px solid White",
              }}
            />
          </div>
          <div className="text-[#333333] md:text-[40px] flex justify-center font-bold mt-6 mb-6">
            Lets See How it Works
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-center   m-auto pt-8 w-full">
            <div className="bg-[#FFFFFF] p-3 xl:p-6 text-center items-center w-[300px] my-5 md:my-0">
              <div className="">
                <img src={run} className="m-auto" alt="" />
              </div>
              <div className="text-[20px] font-bold text-[#333333] mt-2">
                Manage Smartly
              </div>
              <div className="text-[15px] text-[#888888] mt-2">
                Stay on the top of the game & Stay in touch with joy
              </div>
              <div className=" mt-2">
                <button className="bg-[#FFFFFF] border-2 border[#588992] p-2 text-[#588992] font-semibold hover:bg-[#165461] hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-[#FFFFFF]  p-3 xl:p-6 text-center items-center w-[300px] my-5 md:my-0">
              <div className="">
                <img src={anl} className="m-auto" alt="" />
              </div>
              <div className="text-[20px] font-bold text-[#333333] mt-2">
                Monitor Analytics
              </div>
              <div className="text-[15px] text-[#888888] mt-2">
                Stay on the top of the game & Stay in touch with joy
              </div>
              <div className=" mt-2">
                <button className="bg-[#FFFFFF] hover:bg-[#165461] hover:text-white border-2 border[#588992] p-2 text-[#588992] font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-[#FFFFFF]  p-3 xl:p-6 text-center items-center w-[300px] my-5 md:my-0">
              <div className="">
                <img src={trust} className="m-auto" alt="" />
              </div>
              <div className="text-[20px] font-bold text-[#333333] mt-2">
                Sage & Trusted
              </div>
              <div className="text-[15px] text-[#888888] mt-2">
                Stay on the top of the game & Stay in touch with joy
              </div>
              <div className=" mt-2">
                <button className="bg-[#FFFFFF] hover:bg-[#165461] hover:text-white border-2 border[#588992] p-2 text-[#588992] font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-[#FFFFFF]  p-3 xl:p-6 text-center items-center w-[300px] my-5 md:my-0">
              <div className="">
                <img src={lock} className="m-auto" alt="" />
              </div>
              <div className="text-[20px] font-bold text-[#333333] mt-2">
                Fast Support
              </div>
              <div className="text-[15px] text-[#888888] mt-2">
                Stay on the top of the game & Stay in touch with joy
              </div>
              <div className=" mt-2">
                <button className="bg-[#FFFFFF]  hover:bg-[#165461] hover:text-white border-2 border[#588992] p-2 text-[#588992] font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* download the app content  */}
        <div className="w-full m-auto bg-[#FFFFFF]    lg:flex p-[30px] xl:p-[100px]">
          <div className="lg:w-1/2 w-full">
            <img src={bgg} style={{ width: "85%", margin: "auto" }} alt="" />
          </div>
          <div className="lg:w-1/2 w-full my-5 lg:my-0 ">
            <div className="flex justify-center">
              <BsFillCloudDownloadFill
                className="shadow-md   "
                style={{
                  fontSize: "60px",
                  color: "#165461",
                  border: "10px solid white",
                }}
              />
            </div>
            <div className="md:text-[35px] text-center font-bold text-[#373737]  ">
              Get the app today
            </div>
            <div className="text-[17px] w-[80%] m-auto text-center text-[#838383] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. ma cumque
              adipisci quos, quod tempore? Ratione?
            </div>
            <div className="mt-4 md:flex items-center   justify-around   ">
              <div className="bg-[#FEF4F1] flex p-6 w-[300px] m-auto my-5 md:my-0 justify-around items-center cursor-pointer hover:shadow-lg">
                <div className="bg-[#F78F71] rounded-full p-2">
                  <SiAppstore style={{ color: "#FEF4F1", fontSize: "45px" }} />
                </div>
                <div className="">
                  <div className="text-[#7E7C7C] text-[17px] font-semibold">
                    Download on the{" "}
                  </div>
                  <div className="text-[#333333] text-[25px] font-bold">
                    App Store
                  </div>
                </div>
              </div>
              <div className="bg-[#F3E8FF] flex p-6 w-[300px] m-auto my-5 md:my-0 justify-around items-center cursor-pointer hover:shadow-lg">
                <div className="  p-2">
                  <FaGooglePlay
                    style={{ color: "#831FFE", fontSize: "45px" }}
                  />
                </div>
                <div className="">
                  <div className="text-[#7E7C7C] text-[17px] font-semibold">
                    Get it on{" "}
                  </div>
                  <div className="text-[#333333] text-[25px] font-bold">
                    Google Play
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 md:flex justify-around ">
              <div className="bg-[#E8FAF4] flex p-6 w-[300px] justify-around  m-auto my-5 md:my-0 items-center cursor-pointer hover:shadow-lg">
                <div className="bg-[#48CB8A] rounded-full p-2">
                  <FiMonitor style={{ color: "#FEF4F1", fontSize: "45px" }} />
                </div>
                <div className="">
                  <div className="text-[#7E7C7C] text-[17px] font-semibold">
                    Download from{" "}
                  </div>
                  <div className="text-[#333333] text-[25px] font-bold">
                    {" "}
                    Mac
                  </div>
                </div>
              </div>
              <div className="bg-[#FEF7E6] flex p-8 w-[300px] justify-around m-auto my-5 md:my-0 items-center cursor-pointer hover:shadow-lg">
                <div className="bg-[#F9A901] rounded-full p-2">
                  <GrAmazon style={{ color: "#FEF4F1", fontSize: "45px" }} />
                </div>
                <div className="">
                  <div className="text-[#7E7C7C] text-[17px] font-semibold">
                    Available At{" "}
                  </div>
                  <div className="text-[#333333] text-[25px] font-bold">
                    Amazon Store
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* services content */}
        <div className="bg-[#FAFAFA] p-3 xl:p-8">
          <div className="items-center flex justify-center">
            <AiFillSetting
              className="shadow-lg"
              style={{
                color: "#165461",
                fontSize: "50px",
                border: "10px solid White",
              }}
            />
          </div>
          <div className="w-[70%] m-auto text-center md:text-[40px]  text-[#333333] mt-8 font-bold">
            Easily Integrate with your favorite Services
          </div>
          <div className="flex flex-col md:flex-row mt-8 p-8 items-center   m-auto  justify-evenly">
            <div className="card flex bg-[#FFFFFF] p-6 w-[350px] shadow-lg my-5 md:my-0">
              <div className="w-[20%]  ">
                <AiFillBulb
                  style={{
                    color: "#F9A901",
                    fontSize: "40px",
                    background: "#FEF7E6",
                    padding: "4px",
                  }}
                />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-[20px] font-bold">
                  Creative Design
                </div>
                <div className="text-[#808080]">
                  Lorem ipsum dolor sit tus obcaecati reiciendis laborum?
                </div>
                <div className="mt-4">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="card flex bg-[#FFFFFF] p-6 w-[350px] shadow-lg my-5 md:my-0">
              <div className="w-[20%]  ">
                <FaMobile
                  style={{
                    color: "#48CB8A",
                    fontSize: "40px",
                    background: "#E8FAF4",
                    padding: "4px",
                  }}
                />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-[20px] font-bold">
                  Fully Responsive
                </div>
                <div className="text-[#808080]">
                  Lorem ipsum dolor sit tus obcaecati reiciendis laborum?
                </div>
                <div className="mt-4">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="card flex bg-[#FFFFFF] p-6 w-[350px] shadow-lg my-5 md:my-0">
              <div className="w-[20%]  ">
                <FaEdit
                  style={{
                    color: "#831FFE",
                    fontSize: "40px",
                    background: "#F3E8FF",
                    padding: "4px",
                  }}
                />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-[20px] font-bold">
                  Creative Design
                </div>
                <div className="text-[#808080]">
                  Lorem ipsum dolor sit tus obcaecati reiciendis laborum?
                </div>
                <div className="mt-4">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-8 p-8 items-center   m-auto  justify-evenly">
            <div className="card flex bg-[#FFFFFF] p-6 w-[350px] shadow-lg my-5 md:my-0">
              <div className="w-[20%]  ">
                <FaDatabase
                  style={{
                    color: "#F78F71",
                    fontSize: "40px",
                    background: "#FEF4F1",
                    padding: "4px",
                  }}
                />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-[20px] font-bold">
                  Server Solutions
                </div>
                <div className="text-[#808080]">
                  Lorem ipsum dolor sit tus obcaecati reiciendis laborum?
                </div>
                <div className="mt-4">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="card flex bg-[#FFFFFF] p-6 w-[350px] shadow-lg my-5 md:my-0">
              <div className="w-[20%]  ">
                <BiLink
                  style={{
                    color: "#165461",
                    fontSize: "40px",
                    background: "#E6EEF0",
                    padding: "4px",
                  }}
                />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-[20px] font-bold">
                  Quick Link
                </div>
                <div className="text-[#808080]">
                  Lorem ipsum dolor sit tus obcaecati reiciendis laborum?
                </div>
                <div className="mt-4">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="card flex bg-[#FFFFFF] p-6 w-[350px] shadow-lg my-5 md:my-0">
              <div className="w-[20%]  ">
                <BsFillFileEarmarkCodeFill
                  style={{
                    color: "#1D86FF",
                    fontSize: "40px",
                    background: "#E6F3FF",
                    padding: "4px",
                  }}
                />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-[20px] font-bold">
                  Well Documented
                </div>
                <div className="text-[#808080]">
                  Lorem ipsum dolor sit tus obcaecati reiciendis laborum?
                </div>
                <div className="mt-4">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* plan choose content */}
        <div className="bg-[#FAFAFA] p-8  ">
          <div className="items-center flex justify-center">
            <AiFillDollarCircle
              className="shadow-lg"
              style={{
                color: "#165461",
                fontSize: "50px",
                border: "10px solid White",
              }}
            />
          </div>
          <div className="w-[70%] m-auto text-center md:text-[40px] text-[#333333] mt-8 font-bold">
            Choose our price plan
          </div>
          <div className=""></div>
          <div className="flex flex-col md:flex-row  items-center   m-auto justify-around">
            <div className="cardd shadow-md border w-[310px] mt-8 p-6 bg-[#FFFFFF] text-center  hover:scale-110 hover:transition-all">
              <div className="text-[#22616C] font-semibold mt-4">Basic</div>
              <div>
                <span className="text[#222222] font-bold text-[40px] mt-4 ">
                  ${plan1}
                </span>
                /year
              </div>
              <hr className="mt-4" />
              <div className="text-[#383838] font-semibold mt-6">
                1 Landing Page
              </div>
              <div className="text-[#383838] font-semibold mt-6">
                10 Illustration
              </div>
              <div className="text-[#383838] font-semibold mt-6">
                10 Template
              </div>
              <div className="text-[#383838] font-semibold mt-6">3d Icon</div>
              <div className="text-[#383838] font-semibold mt-6">
                10 Photo Assets
              </div>
              <div className="mt-8">
                <button
                  className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                  style={{ border: "1px solid #215E6A" }}
                >
                  <StripeCheckout
                    stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
                    token={handleToken}
                    name=""
                    panelLabel={`Donate`}
                    currency="USD"
                    amount={plan1 * 100}
                    className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                    style={{ border: "1px solid #215E6A" }}
                  >
                    Buy Package
                  </StripeCheckout>
                </button>
              </div>
            </div>
            <div className="cardd shadow-md border w-[310px] mt-8 p-6 bg-[#FFFFFF] text-center  hover:scale-110 hover:transition-all">
              <div className="text-[#22616C] font-semibold mt-4">Standard</div>
              <div>
                <span className="text[#222222] font-bold text-[40px] mt-4 ">
                  ${plan2}
                </span>
                /year
              </div>
              <hr className="mt-4" />
              <div className="text-[#383838] font-semibold mt-6">
                1 Landing Page
              </div>
              <div className="text-[#383838] font-semibold mt-6">
                10 Illustration
              </div>
              <div className="text-[#383838] font-semibold mt-6">
                10 Template
              </div>
              <div className="text-[#383838] font-semibold mt-6">3d Icon</div>
              <div className="text-[#383838] font-semibold mt-6">
                10 Photo Assets
              </div>
              <div className="mt-8">
                <button
                  className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                  style={{ border: "1px solid #215E6A" }}
                >
                  <StripeCheckout
                    stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
                    token={handleToken}
                    name=""
                    panelLabel={`Donate`}
                    currency="USD"
                    amount={plan2 * 100}
                    className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                    style={{ border: "1px solid #215E6A" }}
                  >
                    Buy Package
                  </StripeCheckout>
                </button>
              </div>
            </div>
            <div className="cardd shadow-md border w-[310px] mt-8 p-6 bg-[#FFFFFF] text-center  hover:scale-110 hover:transition-all">
              <div className="text-[#22616C] font-semibold mt-4">Pro</div>
              <div>
                <span className="text[#222222] font-bold text-[40px] mt-4 ">
                  ${plan3}
                </span>
                /year
              </div>
              <hr className="mt-4" />
              <div className="text-[#383838] font-semibold mt-6">
                1 Landing Page
              </div>
              <div className="text-[#383838] font-semibold mt-6">
                10 Illustration
              </div>
              <div className="text-[#383838] font-semibold mt-6">
                10 Template
              </div>
              <div className="text-[#383838] font-semibold mt-6">3d Icon</div>
              <div className="text-[#383838] font-semibold mt-6">
                10 Photo Assets
              </div>
              <div className="mt-8">
                <button
                  className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                  style={{ border: "1px solid #215E6A" }}
                >
                  <StripeCheckout
                    stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
                    token={handleToken}
                    name=""
                    panelLabel={`Donate`}
                    currency="USD"
                    amount={plan2 * 100}
                    className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                    style={{ border: "1px solid #215E6A" }}
                  >
                    Buy Package
                  </StripeCheckout>
                </button>
              </div>
            </div>
            <div className="cardd shadow-md border w-[310px] mt-8 p-6 bg-[#FFFFFF] text-center  hover:scale-110 hover:transition-all">
              <div className="text-[#22616C] font-semibold mt-4">Ultra Pro</div>
              <div>
                <span className="text[#222222] font-bold text-[40px] mt-4 ">
                  ${plan4}
                </span>
                /year
              </div>
              <hr className="mt-4" />
              <div className="text-[#383838] font-semibold mt-6">
                1 Landing Page
              </div>
              <div className="text-[#383838] font-semibold mt-6">
                10 Illustration
              </div>
              <div className="text-[#383838] font-semibold mt-6">
                10 Template
              </div>
              <div className="text-[#383838] font-semibold mt-6">3d Icon</div>
              <div className="text-[#383838] font-semibold mt-6">
                10 Photo Assets
              </div>
              <div className="mt-8">
                <button
                  className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                  style={{ border: "1px solid #215E6A" }}
                >
                  <StripeCheckout
                    stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
                    token={handleToken}
                    name=""
                    panelLabel={`Donate`}
                    currency="USD"
                    amount={plan2 * 100}
                    className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                    style={{ border: "1px solid #215E6A" }}
                  >
                    Buy Package
                  </StripeCheckout>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* customer content */}
        <div className="md:p-10   bg-[#FAFAFA]">
          <div className="items-center flex justify-center">
            <MdFormatQuote
              className="shadow-lg"
              style={{
                color: "#165461",
                fontSize: "50px",
                border: "10px solid White",
              }}
            />
          </div>
          <div className="w-[70%] m-auto text-center md:text-[40px] text-[#333333] mt-8 font-bold">
            What Say Customers
          </div>
          <div className="flex flex-col md:flex-row  items-center   m-auto  justify-around  p-4  ">
            <div className="md:w-1/2 sm:flex p-2 bg-[#FFFFFF] shadow-md m-auto my-5 md:my-0 ">
              <div className="w-full">
                <img
                  src={user}
                  className="min-w-[60px] max-w-[160px] m-auto"
                  alt=""
                />
              </div>
              <div className="">
                <div className="text-[#333333] text-[30px] font-semibold">
                  Sean Harvey
                </div>
                <div className="text-[#8B8B8B] text-[15px] font-semibold">
                  Founder & CEO
                </div>
                <div className="flex mt-2">
                  <div className="text-[#165461]">
                    <AiFillStar style={{ fontSize: "22px" }} />
                  </div>
                  <div className="text-[#165461]">
                    <AiFillStar style={{ fontSize: "22px" }} />
                  </div>
                  <div className="text-[#165461]">
                    <AiFillStar style={{ fontSize: "22px" }} />
                  </div>
                  <div className="text-[#165461]">
                    <AiFillStar style={{ fontSize: "22px" }} />
                  </div>
                  <div className="text-[#165461]">
                    <AiFillStar style={{ fontSize: "22px" }} />
                  </div>
                </div>
                <div className="text-[#898989] text-[15px]  text-justify font-semibold mt-4 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                  qui repellat excepturi nostrum doloribus quam nobis, tenetur
                  earum quibusdam! Ad iusto suscipit explicabo non minima
                  similique distinctio veniam, obcaecati magni!
                </div>
              </div>
            </div>
            <div className="md:w-1/2   sm:flex p-2 bg-[#FFFFFF] shadow-md  m-auto my-5 md:my-0">
              <div className="w-full">
                <img
                  src={user2}
                  className="min-w-[60px] max-w-[160px] m-auto"
                  alt=""
                />
              </div>
              <div className="">
                <div className="text-[#333333] text-[30px] font-semibold">
                  Hope Spencer
                </div>
                <div className="text-[#8B8B8B] text-[15px] font-semibold">
                  Founder & CEO
                </div>
                <div className="flex mt-2">
                  <div className="text-[#165461]">
                    <AiFillStar style={{ fontSize: "22px" }} />
                  </div>
                  <div className="text-[#165461]">
                    <AiFillStar style={{ fontSize: "22px" }} />
                  </div>
                  <div className="text-[#165461]">
                    <AiFillStar style={{ fontSize: "22px" }} />
                  </div>
                  <div className="text-[#165461]">
                    <AiFillStar style={{ fontSize: "22px" }} />
                  </div>
                  <div className="text-[#165461]">
                    <AiFillStar style={{ fontSize: "22px" }} />
                  </div>
                </div>
                <div className="text-[#898989] text-[15px] text-justify font-semibold mt-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                  qui repellat excepturi nostrum doloribus quam nobis, tenetur
                  earum quibusdam! Ad iusto suscipit explicabo non minima
                  similique distinctio veniam, obcaecati magni!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Body;
