import axios from "axios";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  console.log(message);

  // useEffect(() => {
  //   // Apply overflow: hidden to prevent scrolling
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, []);

  const validation = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Email is not valid"),
  });

  async function sendData(values) {
    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:5000/api/user/forgotpassword`,
        values
      );

      // Check if the status is 200 (OK)
      if (response.status === 200) {
        setMessage(response.data.message);
        toast.success("Register Successful. Reset Email Sent.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }

      setLoading(false);
    } catch (err) {
      // Handle errors
      setLoading(false);
      const errorMessage = err.response?.data?.error || "Internal Server Error";
      setError(errorMessage);

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validation,
    onSubmit: sendData,
  });

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center m-auto" style={{ background: 'linear-gradient(to right, #3B82F6, #4C1D95' }}>
        <div className="w-full flex flex-col items-center justify-start py-5 md:py-0">
          <div className="container mx-auto flex justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5 bg-white rounded-lg shadow-lg">
              <div className="px-8 py-8">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
                  Forgot Password
                </h1>

                <form onSubmit={formik.handleSubmit}>
                  {error ? (
                    <p className="text-center text-red-500 mb-4">{error}</p>
                  ) : (
                    ""
                  )}
                  <input
                    type="email"
                    className="w-full bg-gray-200 rounded-lg py-3 px-4 mb-4"
                    placeholder="Enter Email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />

                  <button
                    id="change"
                    type="submit"
                    className="w-full bg-blue-500 rounded-lg text-white py-3 font-bold transition duration-300 ease-in-out hover:bg-blue-600 mb-4"
                  >
                    {loading ? (
                      <div className="flex justify-center">
                        <Oval
                          height={30}
                          width={30}
                          color="#fff"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                          ariaLabel="oval-loading"
                          secondaryColor="#86b7fe"
                          strokeWidth={2}
                          strokeWidthSecondary={2}
                        />
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </button>
                  {message && <p className="text-green-500 font-semibold text-center w-full">{message}</p>}
                </form>
              </div>
            </div>
          </div>
          <div className="text-center text-white mt-4">  
            <p>
              <Link to="/login" className="font-bold hover:underline">
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
