import React, { Component } from "react";
import "./MyProfile.css";
import SettingsIcon from "@material-ui/icons/Settings";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";

export default class MyProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1565224488272-DUCP9VES10HV1V4TCONW/Best+professional+actor+headshots+Los+Angeles.jpg?format=750w" />
          </div>
          <h4>
            Bill Bradford <SettingsIcon />
          </h4>
          <p>Lead UX/UI Designer</p>
          <p>
            <ToggleOnIcon />
            Active
          </p>
        </div>
      </div>
    );
  }
}
