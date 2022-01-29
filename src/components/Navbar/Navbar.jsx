import "./navbar.scss"
import React from 'react';
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";

const Navbar = () => {
  return <div className="navbar">
      <div className="container">
          <div className="left">
              <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
              <span>Homepage</span>
              <span>Series</span>
              <span>Movies</span>
              <span>New and Popular</span>
              <span>My List</span>
             
          </div>
          <div className="right">
              <Search className="icon"/>
              <span>KID</span>
              <Notifications className="icon"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Johnny_Sins.jpg" alt="" />
             <div className="profile">

            
             
              <ArrowDropDown className="icon"/>
              <div className="options">
                  <span>Settings</span>
                  <span>Logout</span>
              </div>
              </div>

          </div>
         
      </div>
  </div>;
};

export default Navbar;
