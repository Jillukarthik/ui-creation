import React from "react";
import Chat from "../Chat/Chat";
import Dashboard from "../Dashboard/Dashboard";

function Gallery() {
  return (
    <Dashboard>
      <div className="todo">
        <div className="todo__header">
          <h3>Gallery</h3>
          <div style={{display:"flex",alignItems:"center"}}>
          <img
              className="profile__accountimage"
              src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
              alt="pic"
            />
            <p className="profile__accountname">Leanne Graham</p>
          </div>
        </div>
        <div className="todo__middle">
          <h1>Coming Soon</h1>
        </div>
        <div>
        {/* <Chat/> */}
        </div>
      </div>
    </Dashboard>
  );
}

export default Gallery;
