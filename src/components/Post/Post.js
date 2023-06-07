import React from "react";
import Chat from "../Chat/Chat";
import Dashboard from "../Dashboard/Dashboard";

function Post() {
  return (
    <Dashboard>
      <div className="post">
        <div className="todo__header">
          <h3>Post</h3>
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
        <div className="post__chat">
        {/* <Chat/> */}
        </div>
      </div>
    </Dashboard>
  );
}

export default Post;
