import React, { Component } from "react";
import basement from "./basement.png";
import garage from "./garage.png";
import parking from "./parking.png";
import bedroom from "./bedroom.png";
import threeStar from "./three-stars.png";
import fourStar from "./four-stars.png";
import fiveStar from "./five-stars.png";
import carIcon from "./car-icon.png";
import house from "./house.png";
import basementIcon from "./basement-icon.png";
import garageIcon from "./garage-icon.png";
import Map from "./Map";

export default function CardsSection({ shouldReplaceCardsWithMap }) {
  if (shouldReplaceCardsWithMap) {
    return <Map className={"map2"} />;
  }
  return (
    <div
      className={"cardsdiv"}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}
    >
      <Card
        heading={"Garage"}
        image={garage}
        type="Medium Basement (100 sq ft)"
        cost="$33.50"
        rating={threeStar}
      />

      <Card
        heading={"Parking 1"}
        image={parking}
        type="Medium Basement (100 sq ft)"
        cost="$78.50"
        rating={fourStar}
      />

      <Card
        heading={"Basement"}
        image={basement}
        type="Medium Basement (100 sq ft)"
        cost="$166"
        rating={fiveStar}
      />

      <Card
        heading={"Bedroom"}
        image={bedroom}
        type="Medium Basement (100 sq ft)"
        cost="$166"
        rating={fiveStar}
      />
    </div>
  );
}

const HEADER_ICON_DICT = {
  "Parking 1": carIcon,
  Bedroom: house,
  Basement: basementIcon,
  Garage: garageIcon
};

function Card({ heading, image, type, cost, rating, headerIcon }) {
  return (
    <div
      className="card-size pbm mtm"
      style={{
        boxShadow: "0 2px 7px 0 rgba(0,0,0,0.2)"
      }}
    >
      <div
        style={{
          display: "flex",

          justifyContent: "flex-start",
          alignItems: "center",
          padding: 10,
          fontWeight: 400,
          letterSpacing: 0.1,
          textTransform: "uppercase"
        }}
      >
        <img style={{ padding: 20 }} src={HEADER_ICON_DICT[heading]} alt="" />
        {heading}
      </div>
      <img style={{ width: "100%" }} src={image} alt="" />
      <div
        className={"plm"}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        <div
          className={"ptm"}
          style={{ fontWeight: 300, color: "#585B6F", paddingBottom: "10px" }}
        >
          {type}
        </div>
        <div
          style={{
            fontSize: "18px",
            paddingBottom: "10px",
            letterSpacing: 1
          }}
        >
          {cost}
          <span style={{ color: "#B2B2B2" }}>/month</span>
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#B2B2B2",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <img src={rating} />
          <span style={{ paddingLeft: 5 }}>(10 ratings)</span>
        </div>
      </div>
    </div>
  );
}
