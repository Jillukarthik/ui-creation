import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
function Home() {
  const [set, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((x) => setdata(x.data.users));
  }, []);

  const handleChange = (index) => {
    console.log(index, "fgyuhjk");
    navigate("/profile", { state: { data: set,index :index } });
  };
  console.log(set.users, "settt");
  return (
    <div className="home">
      <div className="home__data">
        <div className="home__group">
          <div className="home__titleheading">
            <h2 className="home__title">Select an account</h2>
          </div>
          <div className="home__content">
            <div className="home__items">
              {set.map((x, index) => (
                <>
                  <div
                    className="home__item"
                    onClick={() => handleChange(index)}
                  >
                    <img
                      className="data__image"
                      src={x.profilepicture}
                      alt={x.name}
                    />
                    <p className="data__name">{x.name}</p>
                  </div>
                  <div>
                    <hr className="data__line" />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
