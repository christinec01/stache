import React, { Component } from "react";
import SpacesFilters from "./SpacesFilters";
import CardsSection from "./CardsSection";
import carratDown from "./carrat-down.svg";
import DrawerPopOut from "./DrawerPopOut";

export default function SpacesShelf({
  onFiltersClick,
  shouldReplaceCardsWithMap
}) {
  return (
    <div
      className={"pll prl"}
      style={{ width: "77%", backgroundColor: "#FDFDFD" }}
    >
      <DrawerPopOut />
      <SpacesFilters onFiltersClick={onFiltersClick} />
      <CardsSection shouldReplaceCardsWithMap={shouldReplaceCardsWithMap} />
    </div>
  );
}
