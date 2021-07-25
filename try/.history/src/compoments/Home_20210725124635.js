
import React, { Component } from 'react'

import axios from 'axios'
import DataFromApi from '../DataFromApi'

export class Home extends Component {
    constructor() {
        super()
        this.state = {
            dataArr: [],
            showData: false

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
      
    render() {
   console.log(this.state.dataArr);
        return (
            <div>
                {this.state.showData && <DataFromApi 
                dataArr={this.state.dataArr}
                />

                  
                }

            </div>
        )
    }
}

export default Home

