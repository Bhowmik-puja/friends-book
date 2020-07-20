import React, { useState } from "react";
import "./User.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faPhoneAlt,
  faEnvelopeOpen,
  faDollarSign,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
const User = (props) => {
  const { name, salary, phone, email, img, company } = props.user;

  const [btnInfo, setBtnInfo] = useState({
    btnText: "Add Friend",
    disable: false,
    icon: faUserPlus,
    btnClass: "add-friend-btn",
  });

  function btnHandler() {
    btnInfo.btnText = "Friend";
    btnInfo.disable = true;
    btnInfo.icon = faUserFriends;
    btnInfo.btnClass = "friend-btn";
  }
  return (
    <div className="user">
      <div>
        <img className="image" src={img} alt="" />
      </div>
      <div className="userInfo">
        <h2>{name}</h2>
        <p>
          <FontAwesomeIcon icon={faEnvelopeOpen} />
          {email}
        </p>
        <p>
          <FontAwesomeIcon icon={faPhoneAlt} />
          {phone}
        </p>
        <p>
          <FontAwesomeIcon icon={faDollarSign} />
          {salary}
        </p>
        <button
          id="btn"
          className="addBtn"
          onClick={() => {
            props.handleAddUser(props.user);
            btnHandler();
          }}
        >
          <FontAwesomeIcon icon={btnInfo.icon} /> {btnInfo.btnText}
        </button>
      </div>
      <div className="companyInfo">
        <h3>Company</h3>
        <p>{company.name}</p>
        <p>{company.catchPhrase}</p>
        <p>{company.bs}</p>
      </div>
    </div>
  );
};

export default User;
