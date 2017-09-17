import React, { Component } from "react";
import fbIcon from "./fb-icon.png";
import twitterIcon from "./twitter-icon.png";
import youtubeIcon from "./youtube-icon.png";
import Input from "./Input";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#44d2a0",
        marginTop: 100,
        height: 300
      }}
    >
      <div>
        <span
          style={{
            color: "white",
            fontSize: 24
          }}
        >
          Follow Us On Social Media
        </span>
      </div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <a href={"#"} /> <img src={fbIcon} style={{ padding: 20 }} />
        <a href={"#"} /> <img src={twitterIcon} style={{ padding: 20 }} />
        <a href={"#"} /> <img src={youtubeIcon} style={{ padding: 20 }} />
      </div>
      <div style={{ display: "flex" }}>
        <button
          className={"clickable"}
          style={{
            letterSpacing: 1,
            fontSize: 16,
            padding: 10,
            marginRight: 10,
            backgroundColor: "orange",
            color: "white",
            borderRadius: 4,
            borderStyle: "none"
          }}
        >
          Join our Newsletter
        </button>
        <input
          type="text"
          value="Email Address"
          style={{ borderRadius: 10, borderStyle: "none" }}
        />
      </div>
    </div>
  );
}
