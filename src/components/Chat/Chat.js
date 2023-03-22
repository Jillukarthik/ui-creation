import React, { useState } from "react";
import { FiMessageSquare, FiChevronUp, FiChevronDown } from "react-icons/fi";
import "./Chat.css";
function Chat({data}) {
  const [popUp, setPopup] = useState(false);
console.log(data,"cfghjkl")
  return (
    <div className="chat">
      <div>
        <div className={!popUp ?"chat__message" :"chat__messagepopup" } onClick={() => setPopup(!popUp)}>
          <div className="chat__text">
            <p>
              <FiMessageSquare className="chat__icon"/>
            </p>
            <p>Chats</p>
          </div>
          <div>{popUp ? <FiChevronDown /> : <FiChevronUp />}</div>
        </div>
        <div className={`chatbox ${popUp ? 'open' : ''}`}>
        <div>
            {data.map((x)=>(
                <div className="chat__group">
                    <img className="chat__image" src={x.profilepicture} alt={x.name}/>
                    <p className="chat__name">{x.name}</p>
                </div>
            ))

            }
        </div>
      </div>
      </div>
    </div>
  );
}

export default Chat;
