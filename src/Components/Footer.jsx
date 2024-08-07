import React from "react";


function Footer() {
  return (
    <>
      <div className="w-full h-auto bg-[rgb(69,89,91)]">
        <div className="w-full h-auto flex justify-around items-center gap-5 px-10">
          {/* <div
            className="w-[20%] h-full mt-5 md:py-5 flex flex-col justify-center items-start text-white">
              <h2 className="text-4xl font-semibold mb-5 tracking-wider text-white">Address</h2>
              <p className="mb-3">8778445828</p>
              <p className="tracking-wider mb-3"><a href="">agrpremium@gmail.com</a></p>
              <p className="tracking-wider">178/4, jevasakthi complex, periya kadaiveethi, palani - 624601</p>
            </div>  */}

          <div className="lg:w-[40%] h-auto  flex flex-col justify-center items-center p-5">
            <h2 className="text-4xl font-semibold text-white tracking-wider mb-5 ">
              Join With <span className="text-[rgb(129,196,8)]">AGR</span>
            </h2>
            <p className="text-md text-white tracking-wider mb-4 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <button className="px-24 py-2 font-semibold tracking-wider bg-[rgb(129,196,8)] text-white rounded-lg">
              REGISTER
            </button>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center p-5 gap-10 py-10">
          <div className="w-[25%] h-auto border-2 border-[rgb(255,181,36)]  text-white flex justify-center items-center  rounded-xl shadow-xl">
            <div className="w-[70%] flex flex-col justify-center items-center gap-3">
              <h2 className="text-md font-semibold tracking-wider">
                New User
              </h2>
              
            </div>
            <button className="w-[30%] px-6 py-2 font-semibold tracking-wider bg-[rgb(129,196,8)] text-white rounded-lg">
              Register
            </button>
          </div>

          <h3 className="text-4xl font-bold text-[rgb(129,196,8)] tracking-wider">
            AGR STORE
          </h3>

          <div className="w-[25%] h-auto border-2 border-[rgb(255,181,36)]  text-white flex justify-center items-center  rounded-xl shadow-xl">
            <div className="w-[70%] flex flex-col justify-center items-center gap-3">
              <h2 className="text-md font-semibold tracking-wider">
                Already a Member
              </h2>
              
            </div>
            <button className="w-[30%] px-6 py-2 font-semibold tracking-wider bg-[rgb(129,196,8)] text-white rounded-lg">
              Login
            </button>
          </div>
        </div>

        <div className=" w-full h-auto flex p-3 px-10 text-white justify-between  items-center border-t-2 border-[rgb(255,181,36)] text-md font-semibold">
          <h2>Copyright@2024.</h2>
          <h2 className="font-md tracking-wider">
            Designed by{" "}
            <span className="text-[rgb(129,196,8)] font-semibold border-b-2 border-[rgb(255,181,36)] tracking-wider">
              <a href="">SDS Technologies</a>
            </span>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Footer;
