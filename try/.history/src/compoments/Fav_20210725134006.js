import axios from 'axios'
import React, { Component } from 'react'

export class Fav extends Component {
    constructor(){
        super()
        this.state={
            favData:[],
        }
    }

    componentDidMount= async()=>{
        const url = `http://localhost:8080/dotaH`
        const resp = await axios
    }
    render() {
        return (
            <>
               
            </>
        )
    }
}

export default Fav
