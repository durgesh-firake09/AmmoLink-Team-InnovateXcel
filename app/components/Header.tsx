"use client";
import "./default.css"
import { Header, Navbar, Nav } from "rsuite";
import CogIcon from "@rsuite/icons/legacy/Cog";
import WebIcon from "@rsuite/icons/legacy/Web";
import ConnectButton from "./ConnectButton";
import "rsuite/dist/rsuite-no-reset.min.css";

function HeaderFunc() {
  return (
    <Header>
      <Navbar appearance="inverse">
        {/* <Navbar.Brand>
          <a style={{ color: "#fff" }}>AmmoLink</a>
        </Navbar.Brand> */}
        <Nav>
          <Nav.Item>Home</Nav.Item>
          <Nav.Item>News</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Nav.Menu title="About">
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Item>Contact</Nav.Item>
          </Nav.Menu>
        </Nav>
        <Nav pullRight>
          <ConnectButton />
        </Nav>
      </Navbar>
    </Header>
  );
}

export default HeaderFunc;
