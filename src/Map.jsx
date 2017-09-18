import React, { Component } from "react";
import map from "./Map.png";
import sideArrow from "./side-arrow.png";

export default function Map({ className }) {
  return (
    <div className={className} style={{ position: "relative" }}>
      <button
        style={{
          height: 60,
          position: "absolute",
          top: 20,
          bordeRadius: 2,
          borderStyle: "none",
          backgroundColor: "white",
          width: 45,
          borderRadius: 2
        }}
      >
        <img src={sideArrow} />
      </button>
      <img src={map} style={{ width: "100%" }} />
    </div>
  );
}
