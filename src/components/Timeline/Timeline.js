import React, { useState } from "react";
import fakedata from "../../fakedata/users";
import "./Timeline.css";
import User from "../User/User";
import Dashboard from "../Dashboard/Dashboard";
const Timeline = () => {
  const [users, setUser] = useState([...fakedata]);
  const [dashboard, setDashboard] = useState([]);
  const handleUser = (user) => {
    const newdashboard = [...dashboard, user];
    setDashboard(newdashboard);
  };
  return (
    <div className="page-container">
      <div className="userContainer">
        {users.map((user) => (
          <User user={user} handleAddUser={handleUser}></User>
        ))}
      </div>
      <div className="details">
        <Dashboard dashboard={dashboard}></Dashboard>
      </div>
    </div>
  );
};

export default Timeline;
