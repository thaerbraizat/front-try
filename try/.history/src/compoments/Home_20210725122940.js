import axios from 'axios'
import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export class Home extends Component {
    constructor() {
        super()
        this.state = {
            dataArr: [],
            showData: false

        }
    }
    componentDidMount = async (req, res) => {
        const url = `http://localhost:8080/dota`
        const resaxios.get(url)
           
            this.setState({
                dataArr: data.data,
                showData: true
            })

      
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

