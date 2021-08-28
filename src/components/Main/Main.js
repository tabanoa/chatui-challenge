import React, { Component } from "react";
import "./Main.css";
import Conversations from "../conversations/Conversations";
import MyProfile from "../myprofile/MyProfile";
import Profile from "../profile/Profile";
import Chat from "../chat/Chat";

export default class Main extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <MyProfile className="myprofile__box" />
        <Conversations className="conversations__box" />
        <Chat className="chat__box" />
        <Profile className="profile__box" />
      </div>
    );
  }
}
