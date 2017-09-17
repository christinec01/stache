import React, { Component } from "react";
import map from "./map.png";

export default function Map({ className }) {
  return (
    <div className={className}>
      <img src={map} style={{ width: "100%" }} />
    </div>
  );
}
