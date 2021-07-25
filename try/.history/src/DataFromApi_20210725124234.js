import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export class DataFromApi extends Component {
    render() {
        return (
            this.props.dataArr.map((item,i)=>{
                return(  <Card key={i} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{item.localized_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                       {item.attack_type}
                    </Card.Text>
                </Card.Body>
            </Card>)
      
            })
            
        )
    }
}

export default DataFromApi
