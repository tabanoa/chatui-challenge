import React, { Component } from "react";
import "./Profile.css";
import ArchiveIcon from "@material-ui/icons/Archive";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default class Profile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1468263740583-ZHGK901W25YRE68D4WCU/Headshots_Men38.jpg?format=750w" />
          </div>
          <p className="info__text">
            <MailOutlineIcon className="material__icons" /> henryboyd@gmail.com
          </p>
          <p className="info__text">
            <AccountCircleIcon className="material__icons" />
            Henry Boyd
          </p>
          <div className="archive">
            <button className="archive__button">
              <p className="archive__text">
                Archive
                <ArchiveIcon className="material__icons" />
              </p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
