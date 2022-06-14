import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/ContactMe.css';
import githubURL from '../static/github.png';
import instagramURL from '../static/instagram.png';

export default class ContactMe extends Component {
  render() {
    return (
      <div className="bc">
        <h2>Contact Me</h2>
        <Form onSubmit={this.props.handleFormSubmit} className="formLayout">
          <Form.Group className="mg-bot" onChange={this.props.handleNameChange} controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group onChange={this.props.handleRequestChange} className="mg-bot" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your request</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Type your request here" />
          </Form.Group>
          <Button className="btn" type="submit">Submit</Button>
        </Form>
        {this.props.formEmailSent && 
          <div className="email-success">
            Success
          </div>
        }
        <hr className="hr"></hr>
        <div className="imges">
          <div className="imges">
            <a href="https://github.com/harris2310"><img src={githubURL} alt="github"></img></a>
          </div>
          <div className="imges">
            <a href="https://www.instagram.com/khanozides/?hl=el"><img src={instagramURL} alt="instagram"></img></a>
          </div>
        </div>
        <div className="smallT">
          <div className="smallT">
            Icon taken from icons8.com
          </div>
          <div className="smallT">
            Harris Hanozidis @2022
          </div>
        </div>
      </div>
    )
  }
}
