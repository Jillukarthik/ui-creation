import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiMessageSquare, FiChevronUp, FiChevronDown } from "react-icons/fi";
import "./Chat.css";
function Chat() {
  const [popUp, setPopup] = useState(false);
  const [set, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((x) => setdata(x.data.users));
  }, []);
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
            {set.map((x)=>(
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
