import React, { Component } from "react";
import map from "./map.png";

export default function Map() {
  return (
    <div
      className={"map"}
      style={{
        width: "50%",
        overflow: "scroll"
      }}
    >
      <img src={map} />
    </div>
  );
}
