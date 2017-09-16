import React, { Component } from "react";
import logo from "./stache.svg";
import profile from "./profile.png";
import filterIcon from "./filter-icon.png";
import mapIcon from "./map-icon.png";
import Select from "react-select";

export default function Nav({ onFiltersClick }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
      className="ptm pbm prl pll thin-border-lightgray"
    >
      <img style={{ width: 60 }} src={logo} />
      <div
        style={{ display: "flex", alignItems: "center" }}
        className={"nav-links"}
      >
        <div className="nav-links prm active-green">Search Spaces</div>
        <div className="nav-links prm">Bookings</div>
        <div className="nav-links prm">Favorites</div>
        <div className="nav-links prm">Message</div>
        <img
          className="filter-icon prm clickable"
          src={filterIcon}
          onClick={onFiltersClick}
        />
        <img
          className="filter-icon clickable"
          src={mapIcon}
          onClick={onFiltersClick}
        />
        <img className="nav-links plm" src={profile} />
      </div>
    </div>
  );
}