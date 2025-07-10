// NavBar.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NavBar extends Component {
  static propTypes = {
    mode: PropTypes.string,
    toggleMode: PropTypes.func
  };

  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">NewsMonkey</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
              </ul>

              {/* Dark Mode Toggle */}
              <div className={`form-check form-switch text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={this.props.toggleMode}
                  id="flexSwitchCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  Enable {this.props.mode === 'light' ? 'Dark' : 'Light'} Mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
