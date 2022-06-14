import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';

import emailjs from 'emailjs-com';

export default class App extends Component {
  state = {
    name: '',
    requestDetails: '',
    formEmailSent: false,
  }

  handleNameChange = (e) => {
    const { value } = e.target
    this.setState({
      name: value,
    })
  }

  handleRequestChange = (e) => {
    const { value } = e.target
    this.setState({
      requestDetails: value,
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const service_id = "gmail";
    const template_id = "form";
    const user_id = "user_LOSNyooKn4kN1NC1ZmDb5";
    emailjs.send(service_id, template_id, this.state, user_id)
      .then(res => {
        this.setState({formEmailSent: true})
      }, (err) => {
        this.setState({formEmailNotSent: true})
      })
  }

  handleHarris = (event) => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  handleAbout = (event) => {
    window.scroll({
      top: 950,
      behavior: 'smooth',
    })
  }

  handleContact = (event) => {
    window.scroll({
      top: 1900,
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <div className="App">
        <div className="stickyHeader">
          <Header handleHarris={this.handleHarris}
                  handleAbout={this.handleAbout}
                  handleContact={this.handleContact} />
        </div>  
        <Body />
        <AboutMe />
        <ContactMe formEmailSent={this.state.formEmailSent}
                   handleNameChange={this.handleNameChange}
                   handleRequestChange={this.handleRequestChange}
                   handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}
