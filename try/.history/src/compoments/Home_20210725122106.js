import axios from 'axios'
import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export class Home extends Component {
    constructor(){
        super()
        this.state={
            dataArr:[],
            showData:false

        }
    }
    componentDidMount = async (req,res)=>{
        const url =`http://localhost:8080/dota`
         axios.get(url).then(data =>{
             console.log(data.data);
            this.setState({
                dataArr:data.data,
                showData:true
            })

        }).catch(err=>{
            console.log("error");
        })
    }
    render() {
        return (
            <div>
                {this.state.showData && this.state.dataArr.map(item =>{


                })}
               
            </div>
        )
    }
}

export default Home

