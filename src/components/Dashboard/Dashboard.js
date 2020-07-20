import React from "react";
import "./Dashboard.css";
const Dashboard = (props) => {
  const dashboard = props.dashboard;
  const total = dashboard.reduce((total, usr) => total + usr.salary, 0);
  return (
    <div className="dashboard">
      <div className="totalFriend">
        <h3>Total Friends : {dashboard.length}</h3>
      </div>
      <div className="totalSalary">
        <h3>Total Salary :{total}</h3>
      </div>
    </div>
  );
};

export default Dashboard;
