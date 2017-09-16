import React, { Component } from "react";
import fbIcon from "./fb-icon.png";

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
            fontSize: 16
          }}
        >
          Follow Us On Social Media
        </span>
      </div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <a href={"#"} /> <img src={fbIcon} style={{ padding: 20 }} />
        <a href={"#"} /> <img src={fbIcon} style={{ padding: 20 }} />
        <a href={"#"} /> <img src={fbIcon} style={{ padding: 20 }} />
      </div>
    </div>
  );
}
