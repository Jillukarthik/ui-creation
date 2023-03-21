import React from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

function Profile() {
  const location=useLocation();
  const res=location.state.data;
  const index=location.state.index;
  console.log(res[index],"ressssssssssss")
  return (
    <Dashboard>
      <div className="profile">
        <div className="profile__group">heyy</div>
      </div>
    </Dashboard>
  );
}

export default Profile;
