import React, { Component } from 'react'

export class Home extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    componentDidMount = async (req,res)=>{
        const url =process.env.REACT_APP_PORT;
        console.log(url);
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
