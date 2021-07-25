import axios from 'axios'
import React, { Component } from 'react'

export class FavCrudData extends Component {
    constructor(){
        super()
        this.state={
            showForm:false,
            hideD
            item:this.props.favData,
        }
    }
    showForm =()=>{
        this.setState({
            showForm:true
        })
    }
    deleteFav = async (req,res)=>{
        const localized_name =req.params.localized_name;
        const url =`http://localhost:8080/dotaH/${this.state.item.localized_name}`
        const resp = await axios.post(url);
        this.setState({
            hideData:true
        })
    }
    render() {
        return (
            <>
                
                <Card style={{ width: '18rem' }} className="card">
                            <Card.Img variant="top" src={this.state.item.img} />
                            <Card.Body>
                                <Card.Title>{this.state.item.localized_name}</Card.Title>
                                <Card.Title>{this.state.item.attack_type}</Card.Title>
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
