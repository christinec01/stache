import React, { Component } from "react";
import Input from "./Input";
import Select from "react-select";
import GreenArrow from "./GreenArrow";
import filterIcon from "./filter-icon.png";
import mapIcon from "./map-icon.png";
import SelectedOption from "./SelectedOption";
import LABEL_TO_SIZE_ICON from "./labelToSizeIcon";

export default class SpacesFilters extends Component {
  state = {
    sizeOption: "small",
    location: null
  };

  render() {
    var options = [
      { value: "tiny", label: "Tiny (25 sq ft)" },
      { value: "small", label: "Small (50 sq ft)" },
      { value: "medium", label: "Medium (100 sq ft)" },
      { value: "large", label: "Large (300 sq ft)" }
    ];
    var locationOptions = [
      { value: "az", label: "Phoenix, AZ" },
      { value: "oh", label: "Cincinnati, OH" },
      { value: "ca", label: "San Francisco, CA" },
      { value: "westoros", label: "Westoros" }
    ];
    return (
      <div
        className={"ptm"}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <div style={{ display: "flex", flex: 3, flexWrap: "wrap" }}>
          <div className={"mrm"} style={{ flex: 1, minWidth: 200 }}>
            <Select
              name="form-field-name"
              value={this.state.sizeOption}
              onChange={size => this.setState({ sizeOption: size })}
              options={options}
              optionComponent={SizeOption}
              arrowRenderer={GreenArrow}
              valueRenderer={SelectedOption}
            />
          </div>
          <div className={"mrm"} style={{ flex: 1.3, minWidth: 250 }}>
            <Select
              name="form-field-name"
              value={this.state.location}
              onChange={location => this.setState({ location })}
              options={locationOptions}
              placeholder="Location"
              arrowRenderer={GreenArrow}
              valueRenderer={SelectedOption}
            />
          </div>
        </div>
        <div>
          <button
            className={"hollow-green-btn clickable"}
            onClick={this.props.onFiltersClick}
          >
            filters
          </button>
        </div>
      </div>
    );
  }
}

function SizeOption(props) {
  return (
    <div
      className="pam Select-option"
      style={{ display: "flex", alignItems: "center", width: 400 }}
      onClick={() => props.onSelect(props.option.value)}
    >
      <div>
        <img src={LABEL_TO_SIZE_ICON[props.option.value]} />
      </div>
      <div className="plm">{props.option.label}</div>
    </div>
  );
}
