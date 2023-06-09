import "./Dashboard.css";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function Dashboard({ children }) {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate(-1);
  };
 
  const handlePost = () => {
    navigate("/post");
  
    
  };

  const handleGallery = () => {
    navigate("/gallery");
   
  };

  const handleTodo = () => {
    navigate("/todo");
   
  };



  return (
    <div className="dashboard">
      <div className="dashboard__group">
        <div className="dashboard__left">
          <div className="dashboard__data">
            <div className="dashboard__items" onClick={handleProfile}>
              <h4 className="dashboard__profile" >Profile</h4>
              <div>
                <BiChevronRight className="dashboard__icon" />
              </div>
            </div>
            <hr  className="dashboard__line"/>
            <div className="dashboard__items" onClick={handlePost}>
              <h4 className="dashboard__post">Post</h4>
              <div>
                <BiChevronRight className="dashboard__icon" />
              </div>
            </div>
            <hr className="dashboard__line"/>
            <div className="dashboard__items" onClick={handleGallery}>
              <h4 className="dashboard__gallery">Gallery</h4>
              <div>
                <BiChevronRight className="dashboard__icon" />
              </div>
            </div>
            <hr className="dashboard__line"/>
            <div className="dashboard__items" onClick={handleTodo}>
              <h4 className="dashboard__todo">ToDo</h4>
              <div>
                <BiChevronRight className="dashboard__icon" />
              </div>
            </div>
            <hr className="dashboard__line"/>
          </div>
        </div>
        <div className="dashboard__right">{children}</div>
      </div>
    </div>
  );
}

export default Dashboard;
