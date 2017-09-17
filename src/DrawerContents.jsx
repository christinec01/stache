import React, { Component } from "react";
import Input from "./Input";
import Select from "react-select";
import LABEL_TO_TYPE_ICON from "./labelToSpaceTypeIcon";
import GreenArrow from "./GreenArrow";
import carrat from "./carrat-down.svg";
import SelectedOption from "./SelectedOption";
import moment from "moment";
import DatePicker from "react-datepicker";

export default class DrawerContents extends Component {
  state = {
    typeOption: "house",
    rangeOption: "low",
    selectedDate: moment()
  };
  render() {
    var options = [
      { value: "garage", label: "Garage" },
      { value: "house", label: "Room" },
      { value: "basement", label: "Basement" },
      { value: "parking", label: "Parking" }
    ];
    return (
      <div>
        <div className={"flexCentert miniNav"}>
          <div className={"pll ptm clickable"}>FILTERS</div>
          <div className={"prl ptm"}>
            <a
              href={"#"}
              style={{
                fontFamily: "sans-serif",
                fontWeight: 200,
                color: "#2DB991"
              }}
            >
              Reset
            </a>
          </div>
        </div>

        <div className={"ptl pll prl"}>
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingBottom: 10
            }}
          >
            Space
          </span>
          <Select
            name="form-field-name"
            value={this.state.typeOption}
            onChange={type => this.setState({ typeOption: type })}
            optionComponent={TypeOption}
            options={options}
            arrowRenderer={GreenArrow}
            valueRenderer={SelectedOption}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
          className={"pll ptm"}
        >
          <input type="checkbox" value="Shared Space" id="Shared Space" />

          <label
            HTMLfor="Shared Space"
            style={{
              paddingLeft: 10,
              color: " #9597a4",
              fontWeight: 200
            }}
          >
            Shared Space
          </label>
        </div>
        <div className={"ptl pll prl"}>
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingBottom: 10
            }}
          >
            Date
          </span>
          <table>
            <tr>
              <td>Since</td>
              <td />
              <DatePicker
                selected={this.state.selectedDate}
                onChange={date => this.setState({ selectedDate: date })}
                dateFormat="MM/DD/YY"
              />
              <td>
                <img src={carrat} />
              </td>
            </tr>
            <tr>
              <td>Until</td>
              <td />
              <DatePicker
                selected={this.state.selectedDate}
                onChange={date => this.setState({ selectedDate: date })}
                dateFormat="MM/DD/YY"
              />
              <td>
                <img src={carrat} />
              </td>
            </tr>
          </table>
        </div>
        <div className={"ptl pll prl"}>
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingBottom: 10
            }}
          >
            Features
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column"
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" value="Features" id="Features" />

              <label
                HTMLfor="Features"
                style={{
                  paddingLeft: 10,
                  color: " #9597a4",
                  fontWeight: 200
                }}
              >
                24hr Access
              </label>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", paddingTop: 10 }}
            >
              <input type="checkbox" value="Features" id="Features" />

              <label
                HTMLfor="Features"
                style={{
                  paddingLeft: 10,
                  color: " #9597a4",
                  fontWeight: 200
                }}
              >
                Climate Controlled
              </label>
            </div>
          </div>
        </div>

        <div className={"ptl pll prl"}>
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingBottom: 10
            }}
          >
            Price
          </span>
          <Select
            name="form-field-name"
            value={this.state.rangeOption}
            onChange={range => this.setState({ rangeOption: range })}
            optionComponent={TypeOption}
            options={ranges}
            arrowRenderer={GreenArrow}
          />
        </div>
        <div
          style={{
            marginTop: 50,
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: 200,
            marginRight: 70
          }}
        >
          <button
            onClick={this.closeDrawer}
            onClose={() => this.setState({ open: false })}
            className="icono-cross"
            style={{
              borderRadius: 2,
              backgroundColor: "#2DB991",
              color: "white",
              borderStyle: "none",
              paddingTop: 20,
              paddingBottom: 20,
              paddingRight: 20,
              paddingLeft: 20,
              fontSize: 14
            }}
          >
            APPLY
          </button>
        </div>
      </div>
    );
  }
}
function TypeOption(props) {
  return (
    <div
      className="pam Select-option"
      style={{ display: "flex", alignItems: "center" }}
      onClick={() => props.onSelect(props.option.value)}
    >
      <div>
        <img
          style={{ paddingRight: 5 }}
          src={LABEL_TO_TYPE_ICON[props.option.value]}
        />
      </div>
      <div className="plm">{props.option.label}</div>
    </div>
  );
}

var ranges = [
  { value: "low", label: "$1000 to $2000/month" },
  { value: "mid", label: "$2000 to $2500/month" },
  { value: "high", label: "$2000 to $2500/month" },
  { value: "very high", label: "$ +2500/month" }
];
function RangeOption(props) {
  return (
    <div
      className="pam Select-option"
      style={{ display: "flex", alignItems: "center" }}
      onClick={props.ranges}
    >
      <div className="plm">{props.ranges.label}</div>
    </div>
  );
}
