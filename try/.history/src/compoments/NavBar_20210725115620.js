
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <Nav style={{}} as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/favorite">Favorite</Nav.Link>
                    </Nav.Item>
                   
                </Nav>
            </div>
        )
    }
}

export default NavBar
// import React, { Component } from 'react'
// import Nav from 'react-bootstrap/Nav'
// export class NavBar extends Component {
//     render() {
//         return (
//             <div>
//             <Nav as="ul">
//             <Nav.Item as="li">
//               <Nav.Link href="/">Home</Nav.Link>
//             </Nav.Item>
//             <Nav.Item as="li">
//               <Nav.Link href="/Fav">Fav</Nav.Link>
//             </Nav.Item>
         
//           </Nav>
//           </div>
//         )
//     }
// }

// export default NavBar
