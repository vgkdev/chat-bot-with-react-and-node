import React from "react";

const Success = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row text-center">
        <p className="display-5 fw-semibold">
          Congratulations on your successful registration!
        </p>

        <p className="h5">We will contact you soon.</p>
      </div>

      <div className="row justify-content-center mt-5 text-center">
        <p className="fw-semibold">Follow us</p>
        <div className="col-1 text-center fs-1">
          <i className="bi bi-facebook" style={{ cursor: "pointer" }}></i>
        </div>
        <div className="col-1 text-center fs-1">
          <i className="bi bi-instagram" style={{ cursor: "pointer" }}></i>
        </div>
        <div className="col-1 text-center fs-1">
          <i className="bi bi-tiktok" style={{ cursor: "pointer" }}></i>
        </div>
      </div>
    </div>
  );
};

export default Success;
