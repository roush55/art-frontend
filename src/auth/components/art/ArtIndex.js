import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom'
import {index} from './api';
import NewArt from "./CreateArt"
class Art extends Component {
    state= {
      items:[]
    }
    
     
       
    componentDidMount(){

      const user = this.props.user
       index(user)
      .then((res)=>{
      const items = res.data
      this.setState({items:items})
      
      })
      
      .catch((error=> console.log(error)))
      
      
      }

    render(){
        return(
          <div className="App">
          
            
              {this.state.items.map((item,index) => (
              
              
               
                <div key={index}>
                
               <h1>name:{item.name}</h1>
               <h1>price:{item.price}</h1>
               <img src={item.img} alt="img"></img>
                </div>
              )
                )
                }
    
    
                </div>
      
              
        )}}

export default Art
