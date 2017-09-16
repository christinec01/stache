import React, { Component } from "react";
import popOut from "./pop-out.png";

export default function DrawerPopOut() {
  return (
    <div className={"drawerButton"}>
      <button
        style={{
          height: 70,
          borderStyle: "none",
          backgroundColor: "transparent"
        }}
      >
        <img style={{ height: "100%" }} src={popOut} />
      </button>
    </div>
  );
}
