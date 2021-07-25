import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'

export class NavBar extends Component {
    render() {
        return (
            <div>
            <Nav as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
         
          </Nav>
          </div>
        )
    }
}

export default NavBar
