import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="container my-5">
      <div className="row justify-content-center gap-5">
        <div className="col-lg-4 bg-white p-5" style={{ borderRadius: "50px" }}>
          <div className="d-flex justify-content-center">
            <i className="bi bi-robot display-2"></i>
          </div>

          <p
            className="p-3 m-3 "
            style={{
              borderRadius: "20px 20px 2px 20px",
              border: "1px solid black",
              backgroundColor: "#ffffff",
            }}
          >
            Do you want admission counseling ?
          </p>

          <p
            className="p-3 m-3"
            style={{
              borderRadius: "20px 20px 2px 20px",
              border: "1px solid black",
              backgroundColor: "#ffffff",
            }}
          >
            Are you looking for the most suitable school for you to study ?
          </p>

          <p
            className="p-3 m-3"
            style={{
              borderRadius: "20px 20px 2px 20px",
              border: "1px solid black",
              backgroundColor: "#ffffff",
            }}
          >
            I will give you the best advice to choose a school.
          </p>

          <p
            className="p-3 m-3"
            style={{
              borderRadius: "20px 20px 2px 20px",
              border: "1px solid black",
              backgroundColor: "#ffffff",
            }}
          >
            You will have more options when you receive my advice.
          </p>
        </div>

        <div className="col-lg-4">
          <p className="display-4 fw-semibold">Hi, I'm ChatBot.</p>

          <p className="fs-5">
            I'm a chatbot, not a human being. I will help you choose the best
            school and learning environment.
          </p>

          <div className="row">
            <div className="col-6">
              <NavLink
                className="btn btn-secondary p-3 rounded-pill fs-5 fw-semibold"
                to={"/chatting"}
              >
                Start Chatting
              </NavLink>
            </div>

            <div className="col-6">
              <NavLink
                className="btn btn-success p-3 rounded-pill fs-5 fw-semibold"
                to={"/register"}
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
