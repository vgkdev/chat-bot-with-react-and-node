import axios from "axios";

const enrollmentApplication = (data) => {
  // console.log("check data: ", data);
  return axios.post(
    "http://localhost:8080/api/v1/enrollment-application",
    data
  );
};

export { enrollmentApplication };
