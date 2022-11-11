import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { BiCreditCard } from "react-icons/bi";
import SecondHeader from "./SecondHeader";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStripeS } from "react-icons/fa";
import { BsPaypal } from "react-icons/bs";
import { SiRazorpay } from "react-icons/si";

function Cart() {
  // scroll to top function
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
    <div className="">
      <div className="">
        <SecondHeader />
      </div>

      <div className="bg-[#fbfbfb] md:p-6 p-4 mt-16">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2, stiffness: 500 }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div className="md:p-10 p-4 bg-[white]  m-auto   shadow-xl lg:w-[1000px] w-full">
            <div className="   p-6 m-auto sm:flex items-center justify-between">
              <div className="w-[200px]   text-[22px] font-bold text-[#393C3F]">
                Cart
              </div>
              <div className="flex items-center">
                <div className="w-[70px] text-[#626262] cursor-pointer">
                  Shop
                </div>
                <div className="w-[70px] text-[#626262] cursor-pointer">
                  List
                </div>
                <div className="w-[70px] text-[#626262] cursor-pointer">
                  View
                </div>
                <div className="w-[70px] text-[#626262] cursor-pointer">
                  Order
                </div>
                <div className="w-[70px] text-[#626262] cursor-pointer">
                  <BiSearch />
                </div>
                <div className="w-[70px] text-[#626262] cursor-pointer">
                  <BsHandbag />
                </div>
              </div>
            </div>
            <div className="md:flex mt-2 p-4">
              <div className="md:w-1/2 w-full md:m-2 m-0 md:p-6 p-2">
                <div className="text-[22px] p-2 text-[#393C3F] font-semibold">
                  <div className="">Shopping Cart</div>
                </div>
                <div className="">
                  <div className="cardd shadow-md border md:w-[310px]  w-full md:mt-8 m-auto p-6 bg-[#FFFFFF] text-center   ">
                    <div className="text-[#22616C] font-semibold mt-4">
                      Basic
                    </div>
                    <div>
                      <span className="text[#222222] font-bold text-[40px] mt-4 ">
                        $15
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
                    <div className="text-[#383838] font-semibold mt-6">
                      3d Icon
                    </div>
                    <div className="text-[#383838] font-semibold mt-6">
                      10 Photo Assets
                    </div>
                  </div>
                </div>
                <div className="mt-8  flex items-center  ">
                  <Link to="/">
                    <div className="w-[200px]  text-[17px] font-semibold hover:text-[#165461]">
                      Continue Shopping
                    </div>
                  </Link>
                  <div className="text-[17px] font-semibold">
                    Total - <span className=" text-[20px] font-bold">$15</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full m-2   text-[#393C3F] font-semibold md:p-6 p-2 bg-[#FAFAFA] rounded-[5px]">
                <div className="text-[22px]">Payment Info</div>
                <div className="">
                  <div className="mt-4">
                    Payment Method
                    <div className=" mt-2">
                      <div className="flex items-center ">
                        <div className="w-[30px]">
                          <input
                            type="radio"
                            id="html"
                            name="fav_language"
                            value="HTML"
                          />
                        </div>

                        <div className="flex items-center">
                          <label for="html ">Credit Card</label>
                          <div className="w-[30px] ml-2">
                            <BiCreditCard />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center ">
                        <div className="w-[30px]">
                          <input
                            type="radio"
                            id="html"
                            name="fav_language"
                            value="HTML"
                          />
                        </div>

                        <div className="flex items-center">
                          <label for="html ">Pay Pal</label>
                          <div className="w-[30px] ml-2">
                            <BsPaypal />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center ">
                        <div className="w-[30px]">
                          <input
                            type="radio"
                            id="html"
                            name="fav_language"
                            value="HTML"
                          />
                        </div>

                        <div className="flex items-center">
                          <label for="html ">Stripe</label>
                          <div className="w-[30px] ml-2">
                            <FaStripeS />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center ">
                        <div className="w-[30px]">
                          <input
                            type="radio"
                            id="html"
                            name="fav_language"
                            value="HTML"
                          />
                        </div>

                        <div className="flex items-center">
                          <label for="html ">Razor Pay</label>
                          <div className="w-[30px] ml-2">
                            <SiRazorpay />
                          </div>
                        </div>
                      </div>
                      <br /> 
                      <div className="">
                        <form className="flex flex-wrap gap-3 w-full p-5">
                          <label className="relative w-full flex flex-col">
                            <span className="font-bold mb-3">Card number</span>
                            <input
                              className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                              type="text"
                              name="card_number"
                              placeholder="0000 0000 0000"
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                              />
                            </svg>
                          </label>
                          <label className="relative w-full flex flex-col">
                            <span className="font-bold mb-3">Expire date</span>
                            <input
                              className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                              type="text"
                              name="expire_date"
                              placeholder="MM/YY"
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </label>
                          <label className="relative w-full flex flex-col">
                            <span className="font-bold flex items-center gap-3 mb-3">
                              CVV
                              <span className="relative group">
                                <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">
                                  Turn your card over and look at the CVV
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </span>
                            </span>
                            <input
                              className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                              type="text"
                              name="card_cvc"
                              placeholder="•••"
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                              />
                            </svg>
                          </label>
                        </form>
                      </div>
                      <div className="mt-8 text-center">
                        <button
                          className="bg-[#165461] p-2 font-semibold text-[white] hover:bg-[white] hover:text-[#165461] "
                          style={{ border: "1px solid #215E6A" }}
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                    {/* ------------- */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Cart;
