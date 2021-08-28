import React, { Component, useState, createRef, useEffect } from "react";

import "./Chat.css";
import Avatar from "../conversations/Avatar";
import ChatItem from "./ChatItems";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonRoundedIcon from "@material-ui/icons/InsertEmoticonRounded";

export default class Chat extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1565224488272-DUCP9VES10HV1V4TCONW/Best+professional+actor+headshots+Los+Angeles.jpg?format=750w",
      type: "",
      msg: "Hi Henry!!",
    },
    {
      key: 2,
      image:
        "https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1565224488272-DUCP9VES10HV1V4TCONW/Best+professional+actor+headshots+Los+Angeles.jpg?format=750w",
      type: "",
      msg: "How can I help you today?",
    },
    {
      key: 3,
      image:
        "https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1468263740583-ZHGK901W25YRE68D4WCU/Headshots_Men38.jpg?format=750w",
      type: "other",
      msg: "Hey Bill, nice to meet you!",
    },
    {
      key: 4,
      image:
        "https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1468263740583-ZHGK901W25YRE68D4WCU/Headshots_Men38.jpg?format=750w",
      type: "other",
      msg: "Hope you're doing fine!",
    },
    {
      key: 5,
      image:
        "https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1565224488272-DUCP9VES10HV1V4TCONW/Best+professional+actor+headshots+Los+Angeles.jpg?format=750w",
      type: "",
      msg: "I am good thanks for asking",
    },
    {
      key: 6,
      image:
        "https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1468263740583-ZHGK901W25YRE68D4WCU/Headshots_Men38.jpg?format=750w",
      type: "other",
      msg: "I am interested to know more about your prices and services you offer",
    },
    {
      key: 7,
      image:
        "https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1565224488272-DUCP9VES10HV1V4TCONW/Best+professional+actor+headshots+Los+Angeles.jpg?format=750w",
      type: "",
      msg: "Sure, please check bollow to find more information: http://mazepixel.com/portfolio",
    },
    {
      key: 8,
      image:
        "https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1468263740583-ZHGK901W25YRE68D4WCU/Headshots_Men38.jpg?format=750w",
      type: "other",
      msg: "Awesome will get in touch if there's anything unclear. Thanks for now!",
    },
    {
      key: 9,
      image:
        "https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1468263740583-ZHGK901W25YRE68D4WCU/Headshots_Men38.jpg?format=750w",
      type: "other",
      msg: "Have a great day!",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1468263740583-ZHGK901W25YRE68D4WCU/Headshots_Men38.jpg?format=750w"
              />
              <p>Henry Boyd</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <AttachFileIcon className="attachButton" />
            </button>
            <input
              type="text"
              placeholder="Enter your message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <InsertEmoticonRoundedIcon className="emoji"/>
            <button className="btnSendMsg" id="sendMsgBtn">
              <SendIcon className="sendbutton" /> <text>Send</text>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
