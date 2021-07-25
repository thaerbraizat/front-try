
import React, { Component } from 'react'

import axios from 'axios'
import DataFromApi from '../DataFromApi'

export class Home extends Component {
    constructor() {
        super()
        this.state = {
            dataArr: [],
            showData: false,
            massege:"",
            showMassege:false
        }
    }
    componentDidMount = async () => {
        const url = `http://localhost:8080/dota`
        const respo = await axios.get(url);
        this.setState({
            dataArr:respo.data,
            showData:true
        })
    }
    favHero=async(data)=>{
      
        const url =`http://localhost:8080/dotaH`
        const resp=await axios.post(url,data);
        this.setState({
                massege:resp.data,
                showMassege:true
        })
        

    }
      
    render() {
   
        return (
            <>
                {this.state.showMassege &&
                // alert(this.state.massege)
                <>
                }
                {this.state.showData && <DataFromApi 
                dataArr={this.state.dataArr}
                favHero={this.favHero}
                />

                  
                }

            </>
        )
    }
}

export default Home

