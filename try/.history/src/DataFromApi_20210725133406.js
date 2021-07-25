import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'

export class DataFromApi extends Component {
    render() {
        return (
            this.props.dataArr.map((data, i) => {
                return (
                    <Card key={i} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={data.img} />
                        <Card.Body>
                            <Card.Title>{data.localized_name}</Card.Title>
                           
                            <Card.Text>
                                {data.attack_type}
                            </Card.Text>
                            <Button onClick={e =>{this.props.favH(data)}} variant="primary">ADD TO FAV</Button>
                        </Card.Body>
                    </Card>)

            })

        )
    }
}

export default DataFromApi
