import React from "react";
import "./Home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "../Button/Index";
const Index = () => {
  return (
    <div className="home">
      <div className="intro">
        <div className="intro-logo">
          <img src="/img/profile-pic.png" alt="" />
        </div>
        <h1
        
        >
          Arslan Shahab
        </h1>
        <div className="intro-txt">
          <p
            className="intro-txt-para"
            // style={{ marginTop: "-20px", fontSize: "17px", lineHeight: 1.5 }}
          >
            I'm true Front-End Developer
          </p>
        </div>
        <div className="intro-icon">
          {HOMEICONS.map((element) => {
            return (
              <ListItemButton key={element.icon}>
                <ListItemIcon color={element.color}>
                  <div style={{ color: "#FF4C60" }}>{element.icon}</div>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </div>
        <Button btn_text="Hire me" />

        <div className="scroll">
          <a href="./about/About.jsx">Scroll Down</a>
          <a href="#" className="mouse_click">
            <div className="scroll_mouse">
              <div className="scroll_mouse_dot"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
const HOMEICONS = [
  {
    icon: <GitHubIcon style={{ color: "#353353", fontSize: "21px" }} />,
  },
  {
    icon: <InstagramIcon style={{ color: "#ff4c60", fontSize: "21px" }} />,
  },
  {
    icon: <TwitterIcon style={{ color: "#0d6efd", fontSize: "21px" }} />,
  },
  {
    icon: <WhatsAppIcon style={{ color: "#198754", fontSize: "21px" }} />,
  },
];
