import React, { Component } from 'react';
import Motto from './Motto';
import Nav from './Nav';
import HomepageIcon from './HomepageIcon';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import '../style/homepage.css';

class Homepage extends Component {
  render() {
    return (
	    <Row className="homePageGrid">
	      <Col className="mottoCol" xs={12} sm={12}  md={5}><Motto /></Col>
	      <Col className="iconCol" xs={12} sm={12} md={2}><HomepageIcon /></Col>
	      <Col className="navCol" xs={12} sm={12} md={5}><Nav /></Col>
	    </Row>
    );
  }
}

export default Homepage;