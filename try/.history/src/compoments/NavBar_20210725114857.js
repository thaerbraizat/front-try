import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'

export class NavBar extends Component {
    render() {
        return (
            <DIV>
            <Nav as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
         
          </Nav>
        )
    }
}

export default NavBar
