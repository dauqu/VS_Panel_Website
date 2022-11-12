import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import "../assets/css/Footer.css";
function Footer() {
  return (
    <div className="bg-[#FAFAFA] mb-12 p-6">
      <div className="lg:w-1/2 min-w-[280px]  md:p-10 m-auto items-center text-center xl:p-[120px]">
        <div className="flex justify-center">
          <IoMdMail className="shadow-lg"
            style={{
              color: "#165461",
              border: "10px solid #FFFFFF",
              fontSize: "55px",
            }}
          />
        </div>
        <div className="text-[#333333] md:text-[40px] font-bold mt-4">
          Join Our (Free) Open Beta
        </div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          vitae, eveniet explicabo magnam dicta saepe, laboriosam hic dolore
        
        </div>
        <div className="flex justify-center mt-8 ">
          <div className="w-[80%]">
            <input type="email" placeholder="Email address" className="inputt rounded w-full" />
          </div>
          <div className="">
            <button className="arrowbtn bg-[#165461] lg:w-[150px] md:w-[100px] sm:w-[85px] min-w-[70px] flex justify-center hover:sha">
              <BsArrowUpRight
                style={{ color: "white", fontSize: "42px", padding: "2px",textAlign:"center" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] flex flex-col text-center md:flex-row  items-center   m-auto xl:p-8  my-6    justify-evenly ">
        <div className="md:w-[20%]  my-5 md:my-0">
          <div className="">
            <div className="text-[45px] text-[#124957] font-semibold">
              saasta
            </div>
            <div className="text-[#3A3A3A]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              rerum
            </div>
          </div>
          <div className="mt-10 text-[#3A3A3A]">Copyright 2022 by saasta</div>
        </div>
        <div className="md:w-[20%]  md:my-0 ">
          <div className="text-[25px] items-center mt-2 text-[#3A3A3A] font-semibold">
            Solutions
          </div>
          <div className="">
            <div className="text-[#3A3A3A]  cursor-pointer  mt-2">
              Software Programme
            </div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">
              App Solutions
            </div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">
              Social Media Management
            </div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">
              Business analycis
            </div>
            <div className="text-[#3A3A3A] cursor-pointer  mt-2">
              Plans & Signup
            </div>
          </div>
        </div>
        <div className="md:w-[20%]  md:my-0">
          <div className="text-[25px] items-center mt-2 text-[#3A3A3A] font-semibold">
            Company
          </div>
          <div className="">
            <div className="text-[#3A3A3A]  cursor-pointer  mt-2">
              About Us{" "}
            </div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">Services</div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">Price</div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">
              Testimonials
            </div>
            <div className="text-[#3A3A3A] cursor-pointer  mt-2">
              Our Clients
            </div>
          </div>
        </div>
        <div className="md:w-[20%]  md:my-0">
          <div className="text-[25px] items-center mt-2 text-[#3A3A3A] font-semibold">
            Contact
          </div>
          <div className="">
            <div className="text-[#3A3A3A]  cursor-pointer  mt-2">
              358 Vioncent Spurs
            </div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">
              Roashadnvol
            </div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">
              <b>E: &nbsp;</b>support@saasta.com
            </div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">
              {" "}
              <b>P: &nbsp;</b>+(27) 89678677
            </div>
            <div className="text-[#3A3A3A] md:w-1/2 m-auto cursor-pointer justify-evenly  mt-2 flex  ">
              <div className="md:w-[15%] hover:text-[#1773EB]">
                <FaFacebookF style={{ fontSize: "20px" }} />
              </div>
              <div className="md:w-[15%] hover:text-[#1363BC]">
                <FaLinkedinIn style={{ fontSize: "20px" }} />
              </div>
              <div className="md:w-[15%] hover:text-[#8a3ab9]">
                <FaInstagram style={{ fontSize: "20px" }} />
              </div>
              <div className="md:w-[15%] hover:text-[#33A9EC]">
                <AiOutlineTwitter style={{ fontSize: "20px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
