import React, { Component } from "react";
import "./Conversations.css";
import ConversationsItems from "./ConversationsItems";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export default class Conversations extends Component {
  allChatUsers = [
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1468263740583-ZHGK901W25YRE68D4WCU/Headshots_Men38.jpg?format=750w",
      id: 1,
      name: "Henry Boyd",
    },
    {
      image:
        "https://srkheadshotday.com/wp-content/uploads/Lisa_Masten_Headshot_17B2797_Crop32-1024x683.jpg",
      id: 2,
      name: "Martha Curtis",
      message: "2",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1506638689213-Q2X3AOK0SHMP80PDO38E/Terrell+Carter+Headshot+Marc+Cartwright.jpg?format=750w",
      id: 3,
      name: "Phillip Tucker",
    },
    {
      image:
        "https://pixelstudioproductions.com/wp-content/uploads/fly-images/5421/pixelstudioproductions.com-0496-1-749x749.jpg",
      id: 4,
      name: "Christine Reid",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1468263743711-CVCLCCJ1EJ0IE26UY5Y1/Headshots_Men47.jpg?format=750w",
      id: 5,
      name: "Jerry Guzman",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/57809f1fe6f2e12e1da3e283/1468263758214-3S0PVBHT2CSF7ZBSJLIH/Headshots_Men80.jpg?format=750w",
      id: 6,
      name: "Russel Williams",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }

  render() {
    return (
      <div className="main__chatlist">
        <div className="chatlist__items">
          {/* <MyProfile className="profile__component"/> */}
        </div>
        <div className="chatlist__heading">
          <h2 className="chatlist__title">
            Active Conversations <text className="number">4</text>
            <ExpandLessIcon className="center__button" />
          </h2>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ConversationsItems
                name={item.name}
                key={item.id}
                image={item.image}
              />
            );
          })}
        </div>

        <div className="chatlist__heading">
          <h2 className="chatlist__title">
            Archived Conversations <text className="number">7</text>
            <ExpandMoreIcon className="center__button" />{" "}
          </h2>
        </div>
      </div>
    );
  }
}
