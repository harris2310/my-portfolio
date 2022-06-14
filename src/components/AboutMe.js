import React, { Component } from 'react';
import '../css/AboutMe.css';
import meURL from '../static/Me.jpg';
import { Image, Card }  from 'react-bootstrap';
import reactURL from '../static/react.png';
import nodeURL from '../static/node.png';
import mongoURL from '../static/mongodb.png';

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className="aboutBc">
          <div className="meImg">
            <Image src={meURL} roundedCircle />
          </div>
          <div className="bord">
            <h2 className="line">Technologies I use</h2>
            <div className="logos">
              <div className="cardFlex">
                <Card>
                  <Card.Img variant="top" className="contImg" src={reactURL} />
                  <Card.Body>
                    <Card.Title className="cardT">React</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className="cardFlex">
                <Card>
                  <Card.Img variant="top" className="contImg" src={nodeURL} />
                  <Card.Body>
                    <Card.Title className="cardT">Node.js</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className="cardFlex">
                <Card>
                  <Card.Img variant="top" className="contImg" src={mongoURL} />
                  <Card.Body>
                    <Card.Title className="cardT">MongoDB</Card.Title>
                  </Card.Body>
                </Card>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
