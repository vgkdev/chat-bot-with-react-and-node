import React from "react";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import Footer from "../footer/Footer";

const HomePage = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center gap-5">
        <div className="col-lg-4 bg-white p-5" style={{ borderRadius: "50px" }}>
          <div className="d-flex justify-content-center">
            <i className="bi bi-robot display-2"></i>
          </div>

          <Fade top>
            <p
              className="p-3 m-3"
              style={{
                borderRadius: "20px 20px 2px 20px",
                border: "1px solid black",
                backgroundColor: "#ffffff",
              }}
            >
              How do I get my nudes taken down?
            </p>
          </Fade>

          <Fade top>
            <p
              className="p-3 m-3"
              style={{
                borderRadius: "20px 20px 2px 20px",
                border: "1px solid black",
                backgroundColor: "#ffffff",
              }}
            >
              Should I pay scammers who are threatening to share a video of me?
            </p>
          </Fade>
          <Fade top>
            <p
              className="p-3 m-3"
              style={{
                borderRadius: "20px 20px 2px 20px",
                border: "1px solid black",
                backgroundColor: "#ffffff",
              }}
            >
              I've found deepfake porn of my friend online - how can I help
              them?
            </p>
          </Fade>
          <Fade top>
            <p
              className="p-3 m-3"
              style={{
                borderRadius: "20px 20px 2px 20px",
                border: "1px solid black",
                backgroundColor: "#ffffff",
              }}
            >
              Is it against the law if I share my husband's photo without his
              consent?
            </p>
          </Fade>
        </div>

        <div className="col-lg-4">
          <p className="display-4 fw-semibold">Hi, I'm ChatBot.</p>

          <p className="fs-5">
            I'm a chatbot, not a human being. If you've had intimate images
            taken, created or shablack without your consent, or someone has
            threatened to share your images, I'm here to help. If you're
            supporting someone who's experienced image-based abuse, or you're
            concerned about something you've done, I can help you too.
          </p>

          <p className="fs-5">
            Anyone can ask me questions about where to get help, reporting
            options, online safety and much more.
          </p>

          <p className="fs-5">
            I've been designed to help people who live in Australia, but some of
            my information may be useful if you live in another country.
          </p>

          <NavLink
            className="btn btn-secondary p-3 rounded-pill fs-5 fw-semibold"
            to={"/chatting"}
          >
            Start Chatting
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
