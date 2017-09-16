import React from "react";
import carrat from "./carrat-down.svg";

export default function Input(props) {
  return (
    <div
      className={"thin-border-gray"}
      style={{ position: "relative", height: 58, display: "flex" }}
    >
      <div
        className={"plm flexCenter"}
        style={{ color: "#B6B7C0", fontWeight: 300 }}
      >
        {props.placeholder}
      </div>
      <img src={carrat} style={{ position: "absolute", right: 20, top: 25 }} />
    </div>
  );
}
