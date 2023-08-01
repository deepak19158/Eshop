import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import PersonalInfo from "./components/profile/PersonalInfo";
import OrderHistory from "./components/profile/OrderHistory";
import axios from "axios";
import styled from "styled-components";

const Profile = () => {
  const [order, SetOrder] = useState(null);
  const [user, SetUser] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState("personalInfo");

  const handleLabelClick = (label) => {
    setSelectedLabel(label);
  };

  const getUserInfo = async () => {
    const user = await axios.get("http://localhost:5000/api/auth/getuser", {
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("authToken"),
      },
    });
    SetUser(user.data);

    const res = await axios.get("http://localhost:5000/api/order/getAllOrder", {
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("authToken"),
      },
    });
    SetOrder(res.data.reverse()); //reversing the array and storing in user
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Wrapper style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <label
                    onClick={() => handleLabelClick("personalInfo")}
                    className={selectedLabel === "personalInfo" ? "active" : ""}
                  >
                    Personal Information
                  </label>
                </div>
                <div>
                  <label
                    onClick={() => handleLabelClick("orderDetails")}
                    className={selectedLabel === "orderDetails" ? "active" : ""}
                  >
                    Orders
                  </label>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            {selectedLabel === "personalInfo" ? (
              user ? (
                <PersonalInfo user={user} />
              ) : (
                <p>loading...</p>
              )
            ) : (
              <OrderHistory orders={order} />
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  label {
    cursor: pointer;
    padding: 8px;
    background-color: #f0f0f0;
    border-radius: 4px;
    margin-right: 10px;
  }

  label:hover {
    background-color: #d0d0d0;
  }

  label.active {
    background-color: #007bff;
    color: #fff;
  }
`;
export default Profile;
