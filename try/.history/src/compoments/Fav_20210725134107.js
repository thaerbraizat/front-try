
import React, { Component } from 'react'
import axios from 'axios'

export class Fav extends Component {
    constructor(){
        super()
        this.state={
            favData:[],
        }
    }

    componentDidMount= async()=>{
        const url = `http://localhost:8080/dotaH`
        const resp = await axios.get(url)
        this.setState({
            fav
        })
    }
    render() {
        return (
            <>
               
            </>
        )
    }
}

export default Fav
