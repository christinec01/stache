import React, { Component } from "react";
import logo from "./logo.svg";
import Nav from "./Nav";
import SpacesShelf from "./SpacesShelf";
import Map from "./Map";
import "./App.css";
import Drawer from "react-drawer";
import DrawerContents from "./DrawerContents";
import Footer from "./footer.jsx";

class App extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <div className="App">
        <Nav onFiltersClick={() => this.setState({ open: true })} />

        <Drawer
          open={this.state.open}
          position={"left"}
          onClose={() => this.setState({ open: false })}
          noOverlay={false}
        >
          <i onClick={this.closeDrawer} className="icono-cross" />

          <DrawerContents />
        </Drawer>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <SpacesShelf onFiltersClick={() => this.setState({ open: true })} />
          <Map />
        </div>
        <Footer style={{ display: "flex" }} />
      </div>
    );
  }
}

export default App;