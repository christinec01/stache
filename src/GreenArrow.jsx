import React, { Component } from "react";
import carrat from "./carrat-down.svg";

export default function GreenArrow() {
  return (
    <img src={carrat} style={{ position: "absolute", right: 20, top: 25 }} />
  );
}
