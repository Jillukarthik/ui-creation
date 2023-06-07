import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Chat from "../Chat/Chat";
import Dashboard from "../Dashboard/Dashboard";
import "./Profile.css";
function Profile() {
  const location = useLocation();
  const res = location.state.data;
  const index = location.state.index;
  const[getData,setgetData]=useState( res[index])
  
  console.log(getData);
const navigate=useNavigate()
  const [popup, setPopup] = useState(false);
 
  const handlePopup = () => {
    setPopup(!popup);
  };

  const handleLogout=()=>{
    navigate("/")
  }

  const handleChangeone=()=>{
    setgetData(res[index+1])
   
  }
  const handleChangetwo=()=>{
    setgetData(res[index+2])
   
  }
  return (
    <Dashboard>
      <div className="profile">
        <div className="profile__header">
          <p className="profile__title">Profile</p>
          <div className="profile__account" onClick={handlePopup}>
            <img
              className="profile__accountimage"
              src={getData.profilepicture}
              alt={getData.name}
            />
            <p className="profile__accountname">{getData.name}</p>
          </div>
        </div>
        <hr className="profile__accountline" />

        {popup && <div className="popup__screen">
          <div className="account__details">
            <img src={getData.profilepicture} alt={getData.name} className="account__image" />
            <p className="account__name">{getData.name}</p>
            <p className="account__email">{getData.email}</p>
          </div>
          <hr className="account__line"/>
          <div className="account__details1" onClick={handleChangeone}>
          <img src={res[index+1].profilepicture} alt={res[index+1].name} className="account1__image" />
          <p className="account1__name">{res[index+1].name}</p>
          </div>
          <hr className="account__line"/>
          <div className="account__details2" onClick={handleChangetwo}>
          <img src={res[index+2].profilepicture} alt={res[index+2].name} className="account2__image" />
          <p className="account2__name">{res[index+2].name}</p>
          </div>
          <button className="btn btn__state--logout" onClick={handleLogout}>
            SignOut
          </button>
          </div>}

        <div className="profile__footer">
          <div className="profile__footerleft">
            <div>
              <div className="profile__footerleftDetails">
                <div>
                  <img
                    src={getData.profilepicture}
                    alt={getData.name}
                    className="profile__footerleftimage"
                  />
                </div>
                <div>
                  <p className="profile__fonts">{getData.name}</p>
                </div>
                <div className="profile__data">
                  <p>
                    <span className="profile__datauser">Username:</span>
                    <span className="profile__datauserfont">
                      {" "}
                      {getData.username}
                    </span>
                  </p>
                  <p>
                    <span className="profile__datauser">e-mail:</span>
                    <span className="profile__datauserfont">
                      {getData.email}
                    </span>
                  </p>
                  <p>
                    <span className="profile__datauser">Phone:</span>
                    <span className="profile__datauserfont">
                      {getData.phone}
                    </span>
                  </p>
                  <p>
                    <span className="profile__datauser">Website:</span>
                    <span className="profile__datauserfont">
                      {getData.website}
                    </span>
                  </p>
                </div>
                <hr />
                <div className="profile__fontp">Company</div>
                <div className="profile__footerbottomleft">
                  <p>
                    <span className="profile__datauser">Name:</span>
                    <span className="profile__companydel1">
                      {getData.company.name}
                    </span>
                  </p>
                  <p>
                    <span className="profile__datauser">CatchPhrase:</span>
                    <span
                      className="profile__companydel2"
                      id="profile__companycatch"
                    >
                      {" "}
                      {getData.company.catchPhrase}
                    </span>
                  </p>
                  <p>
                    <span className="profile__datauser">bs:</span>
                    <span className="profile__companydel3">
                      {getData.company.bs}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="profile__line" />
          <div className="profile__footerright">
            <div className="profile__address">
              <p className="profile__fontp">Address:</p>
              <div className="profile__addressdetails">
                <p>
                  <span className="profile__datauser">Street:</span>
                  <span className="profile__datauserfont">
                    {getData.address.street}
                  </span>
                </p>
                <p>
                  <span className="profile__datauser">Suite : </span>
                  <span className="profile__datauserfont">
                    {getData.address.suite}
                  </span>
                </p>
                <p>
                  <span className="profile__datauser">City : </span>
                  <span className="profile__datauserfont">
                    {getData.address.city}
                  </span>
                </p>
                <p>
                  <span className="profile__datauser">Zipcode : </span>
                  <span className="profile__datauserfont">
                    {getData.address.zipcode}
                  </span>
                </p>
              </div>
            </div>
            <div>
              <iframe
                className="profile__map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38210.50469716664!2d80.2219240097967!3d13.0288223631122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266ebc772bfc1%3A0x57c7c06d2918742b!2sArulmigu%20Vadapalani%20Murugan%20Temple!5e0!3m2!1sen!2sin!4v1679467129926!5m2!1sen!2sin"
              ></iframe>
              <div className="profile__latlong">
                <small>Lat: {getData.address.geo.lat}</small>
                <small>Long: {getData.address.geo.lng}</small>
              </div>
            </div>
          </div>
        </div>
        <div className="profile__chat">
          <Chat />
        </div>
      </div>
    </Dashboard>
  );
}

export default Profile;
