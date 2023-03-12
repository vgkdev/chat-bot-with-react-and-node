import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-white pt-5 px-0">
      <div className="row justify-content-center gap-3">
        <div className="col-lg-3 text-center">
          <p className="fs-2 fw-semibold">About Us</p>

          <p className="fw-light fs-5">
            I am a chatbot that provides admission counseling for you.
          </p>
        </div>

        <div className="col-lg-3 text-center">
          <p className="fs-2 fw-semibold">Campuses</p>

          <p className="fw-semibold">Ho Chi Minh</p>

          <p className="fw-light fs-5">
            227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh
          </p>
        </div>

        <div className="col-lg-3 text-center">
          <p className="fs-2 fw-semibold">Contact Us</p>

          <p className="fw-light fs-5">Hotline: 0.888.888.888</p>

          <p className="fw-light fs-5">info@example.com</p>
        </div>
      </div>
      <div className="row text-center mt-5">
        <div className="col">
          <p className="">Copyright &copy; 2023 Chat Bot Dialogflow</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
