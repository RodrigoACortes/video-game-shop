import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Log In With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
          <Link
          to={this.props.auth ? "/add_credits" : "/add_credits"}
          className="btn"
        >
          Add Credits
        </Link></li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2"><a href="/api/logout">Logout</a></li>
        ];
    }
  }   

  render() {
    return (
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: `blue`, display: `fixed`, left: `0`}}>
          <Link
            to={this.props.auth ? "/" : "/"}
            className="left brand-logo"
          >
            Shop
          </Link>
          <ul className="right">{this.renderContent()}</ul>
          {/* <ul className="right">{this.renderAddGame()}</ul> */}
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
