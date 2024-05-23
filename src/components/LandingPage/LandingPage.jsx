import React, { useContext } from "react";
import PropTypes from "prop-types";
//styles
import "./LandingPage.css";
//assets
import menuIcon from "../../assets/menu.svg";
//contexts
import { ThemeContext } from "../../AllContexts";
//components
import ChatBody from "../ChatBody/ChatBody";
import PastConvo from "../PastConvo/PastConvo";

const LandingPage = ({
  handleSideBar,
  sidebarON,
  currentChat,
  addChatMsg,
  clearCurrentChat,
  pastConvo,
  likeDislikeReply,
}) => {
  //context
  const [theme] = useContext(ThemeContext);

  return (
    <div className={`LandingPage LandingPageTheme-${theme}`}>
      <div className="LandingPageHead">
        {!sidebarON ? (
          <img onClick={handleSideBar} src={menuIcon} alt="menu icon" />
        ) : null}
        <h1>Bot AI</h1>
      </div>
      {pastConvo ? (
        <PastConvo />
      ) : (
        <ChatBody
          likeDislikeReply={likeDislikeReply}
          clearCurrentChat={clearCurrentChat}
          addChatMsg={addChatMsg}
          currentChat={currentChat}
        />
      )}
    </div>
  );
};

LandingPage.propTypes = {
  handleSideBar: PropTypes.func.isRequired,
  sidebarON: PropTypes.bool.isRequired,
  currentChat: PropTypes.arrayOf(PropTypes.object).isRequired,
  addChatMsg: PropTypes.func.isRequired,
  clearCurrentChat: PropTypes.func.isRequired,
  pastConvo: PropTypes.bool.isRequired,
  likeDislikeReply: PropTypes.func.isRequired,
};

export default LandingPage;
