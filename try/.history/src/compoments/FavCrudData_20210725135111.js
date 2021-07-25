import React, { Component } from 'react'

export class FavCrudData extends Component {
    constructor()
    render() {
        return (
            <>
                
                <Card style={{ width: '18rem' }} className="card">
                            <Card.Img variant="top" src={this.state.item.thumbnail} />
                            <Card.Body>
                                <Card.Title>{this.state.item.title}</Card.Title>
                                <Card.Title>{this.state.item.artist_display}</Card.Title>
                                <Button onClick={e => { this.deleteFav(this.state.item.title) }} variant="primary">Delete</Button>
                                <Button onClick={this.showForm} variant="primary">Update</Button>
                            </Card.Body>
                        </Card>
                

                <Update update={this.updateForm} show={this.state.showForm} hideModal={this.hideModal} />

            </>
        )
    }
}

export default FavCrudData
