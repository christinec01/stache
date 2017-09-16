import React from "react";
import LABEL_TO_SIZE_ICON from "./labelToSizeIcon";
import LABEL_TO_TYPE_ICON from "./labelToSpaceTypeIcon";

const ALL_LABELS_TO_ICONS = {
  ...LABEL_TO_SIZE_ICON,
  ...LABEL_TO_TYPE_ICON
};

export default function SelectedOption(props) {
  console.log(props);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={ALL_LABELS_TO_ICONS[props.value]} />
      <div>{props.label}</div>
    </div>
  );
}
