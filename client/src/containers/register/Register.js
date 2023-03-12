import React, { useState } from "react";
import Img from "../../assets/tuyensinh.jpg";
import { Form, Button } from "react-bootstrap";
import { enrollmentApplication } from "../../services/userService";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [address, setAddress] = useState("");
  const [major, setMajor] = useState("");
  const [location, setLocation] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnClick = async () => {
    console.log(
      ">>>check data: ",
      name,
      phoneNumber,
      email,
      school,
      address,
      major,
      location
    );

    if (
      !name ||
      !phoneNumber ||
      !email ||
      !school ||
      !address ||
      !major ||
      !location
    ) {
      console.log("missing parameters");
    } else {
      try {
        const response = await enrollmentApplication({
          name,
          phoneNumber,
          email,
          school,
          address,
          major,
          location,
        });

        console.log("check response: ", response.data.errCode);

        if (response.data.errCode === 0) {
          setName("");
          setPhoneNumber("");
          setEmail("");
          setSchool("");
          setAddress("");
          setMajor("");
          setLocation("");
          navigate("/success");
        }
      } catch (e) {
        console.log(">>>onClick: ", e);
      }
    }
  };

  return (
    <div className="container-fuild my-5">
      <div className="row justify-content-center align-items-center gap-5">
        <div className="col-lg-4">
          <img src={Img} alt="..." className="img-fluid" />
        </div>

        <div className="col-lg-3 bg-white p-0" style={{ borderRadius: "20px" }}>
          <div
            className="bg-primary text-center px-5 py-2 fs-4 fw-semibold text-white"
            style={{ borderRadius: "20px 20px 0 0" }}
          >
            <p>HỌC BỔNG LÊN ĐẾN 400 TRIỆU ĐỒNG</p>
          </div>

          <div className="px-3 mt-3">
            <Form className="p-4">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={name}
                  placeholder="Họ và tên"
                  onChange={(event) => setName(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={phoneNumber}
                  placeholder="Số điện thoại"
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={school}
                  placeholder="Bạn học trường nào"
                  onChange={(event) => setSchool(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={address}
                  placeholder="Bạn sống tại tỉnh/thành phố nào?"
                  onChange={(event) => setAddress(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Select
                  value={major}
                  aria-label="Default select example"
                  onChange={(event) => setMajor(event.target.value)}
                >
                  <option>Chuyên ngành học</option>
                  <option value="Công nghệ thông tin">
                    Công nghệ thông tin
                  </option>
                  <option value="Thiết kế đồ họa">Thiết kế đồ họa</option>
                  <option value="Quản trị kinh doanh">
                    Quản trị kinh doanh
                  </option>
                  <option value="Quản trị marketing">Quản trị marketing</option>
                  <option value="Quản trị truyền thông">
                    Quản trị truyền thông
                  </option>
                  <option value="Quản trị sự kiện">Quản trị sự kiện</option>
                  <option value="Kinh doanh quốc tế">Kinh doanh quốc tế</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Select
                  value={location}
                  aria-label="Default select example"
                  onChange={(event) => setLocation(event.target.value)}
                >
                  <option>Nơi đăng kí xét tuyển</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Thành phố Hồ Chí Minh">
                    Thành phố Hồ Chí Minh
                  </option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Cần Thơ">Cần Thơ</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary" onClick={handleOnClick}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Chúc mừng bạn đăng kí thành công</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Register;
