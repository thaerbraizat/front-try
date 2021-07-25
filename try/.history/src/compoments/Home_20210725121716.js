import axios from 'axios'
import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export class Home extends Component {
    constructor(){
        super()
        this.state={
            dataArr:[],
            showData:false

        }
    }
    componentDidMount = async (req,res)=>{
        const url =`http://localhost:8080/dota`
         axios.get(url).then((err,data)=>{
            this.setState({
                dataArr:data
                
            })

        }).catch(err=>{
            console.log("error");
        })
    }
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Home

