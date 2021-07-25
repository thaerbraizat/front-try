
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

    componentDidMount= async()=>{
        const url = `http://localhost:8080/dotaH`
      axios.get(url).then(error,)

        this.setState({
            favData:resp.data,
            showFavData:true
        })
    }
    render() {
        console.log(this.state.favData);
        return (
            <>
               {this.state.showFavData && this.state.favData.map((item,i)=>{
                   return(
                       <FavCrudData
                       key={i} 
                       favData={item}
                       />
                   )
               })
               
               }
            </>
        )
    }
}

export default Fav
