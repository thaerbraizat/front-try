import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
import axios from 'axios'
import Update from './Update'


export class FavCrudData extends Component {
    constructor(props){
        super(props)
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
        axios.delete(url).then(res =>{
        this.setState({
            hideData:true
        })}
        )
    }
    updateForm = (e) => {
        e.preventDefault();
        const object = {
            localized_name: e.target.elements.des.value,
            attack_type: e.target.elements.des1.value,
            img: e.target.elements.des2.value,

        }
        axios.put(`http://localhost:8080/dotaH/${this.state.item.localized_name}`, object).then(res => {
            this.setState({
                item: { ...this.state.item,
                     localized_name: e.target.elements.des.value,
                     attack_type: e.target.elements.des1.value,
                     img: e.target.elements.des2.value     },
                showForm: false
            })
        })

    }
    hideModal = () => {
        this.setState({
            showForm: false
        })
    }
    render() {
        console.log(this.state.showForm);
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
                

                        <Update update={this.updateForm} show={this.state.showForm} hideModal={this.hideModal} />
            </>
        )
    }
}

export default FavCrudData
