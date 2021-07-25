import axios from 'axios'
import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'

export class FavCrudData extends Component {
    constructor(){
        super()
        this.state={
            showForm:false,
            hideData:false,
            item:this.props.favData,
        }
    }
    showForm =()=>{
        this.setState({
            showForm:true
        })
    }
    deleteFav = async (localized_name)=>{
    
        const url =`http://localhost:8080/dotaH/${localized_name}`
        axios.post(url);
        this.setState({
            hideData:true
        })
    }
    render() {
    if(this.state.hideData)
    return null
        return (
            <>
                
                <Card style={{ width: '18rem' }} className="card">
                            <Card.Img variant="top" src={this.state.item.img} />
                            <Card.Body>
                                <Card.Title>{this.state.item.localized_name}</Card.Title>
                                <Card.Title>{this.state.item.attack_type}</Card.Title>
                                <Button onClick={e => { this.deleteFav(this.state.item.localized_name) }} variant="primary">Delete</Button>
                                <Button onClick={this.showForm} variant="primary">Update</Button>
                            </Card.Body>
                        </Card>
                
{/* 
                <Update update={this.updateForm} show={this.state.showForm} hideModal={this.hideModal} /> */}

            </>
        )
    }
}

export default FavCrudData
