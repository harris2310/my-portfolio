import React, { Component } from 'react';
import '../css/Header.css';

/*eslint-disable */
export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="stickyHeader">
          <nav>
            <ul>
              <div className="name">
                <h1 onClick={this.props.handleHarris}>Harris Hanozidis</h1>
              </div>
              <li onClick={this.props.handleAbout}>About Me</li>
              <li onClick={this.props.handleContact}>Contact Me</li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
