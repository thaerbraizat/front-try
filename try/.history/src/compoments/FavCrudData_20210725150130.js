import axios from 'axios'
import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
import axios from 'axios';


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
        axios.post(url).then(
        this.setState({
            hideData:true
        })
        )
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
                               
                            </Card.Body>
                        </Card>
                


            </>
        )
    }
}

export default FavCrudData
