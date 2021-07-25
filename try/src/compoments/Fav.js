
import React, { Component } from 'react'
import axios from 'axios';
import FavCrudData from './FavCrudData';

export class Fav extends Component {
    constructor(){
        super()
        this.state={
            favData:[],
            showFavData:false,
        }
    }
    componentDidMount =()=>{
        axios.get(`http://localhost:8080/dotaH`).then( favi => {
            this.setState({
                favData:favi.data,
                showFavData:true
            })
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        console.log(this.state.favData);
        return (
            <>
               {this.state.showFavData && this.state.favData.map((item,i)=>{
                   return(
                       <>
                       <FavCrudData
                       key={i} 
                       favData={item}
                       />
                      
                       </>
                   )

               })
               
               }
            </>
        )
    }
}

export default Fav
