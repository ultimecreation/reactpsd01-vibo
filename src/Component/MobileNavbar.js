import React, { Component } from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import { withRouter } from "react-router-dom";
class MobileNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({ open: !prevState.open }));
  }
  render() {
    const { history } = this.props;

    return (
      <div className="mobile-menu" onClick={this.toggleMenu}>
        <div className="mobile-menu__hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>

        {this.state.open && (
          <nav>
            <NavLink
              to="/#home"
              className={history.location.hash === "#home" ? "active" : ""}
            >
              Home
            </NavLink>
            <NavLink
              to="/#about"
              className={history.location.hash === "#about" ? "active" : ""}
            >
              About
            </NavLink>
            <NavLink
              to="/#app"
              className={history.location.hash === "#app" ? "active" : ""}
            >
              App
            </NavLink>
            <NavLink
              to="/#info"
              className={history.location.hash === "#info" ? "active" : ""}
            >
              Info
            </NavLink>
          </nav>
        )}
      </div>
    );
  }
}
export default withRouter(MobileNavbar);
