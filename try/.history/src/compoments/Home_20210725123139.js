
import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'

export class Home extends Component {
    constructor() {
        super()
        this.state = {
            dataArr: [],
            showData: false

        }
    }
    componentDidMount = async () => {
        const url = `http://localhost:8080/dota`
        const respo = await axios.get(url);
        
    }
      
    render() {
        console.log(this.state.dataArr);
        return (
            <div>
                {this.state.showData && this.state.dataArr.map(item => {

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{item.localized_name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                               {item.attack_type}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })}

            </div>
        )
    }
}

export default Home

