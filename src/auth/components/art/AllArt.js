import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {index} from './api-2';
// import'./art.scss'


class AllArt extends Component {
    
  
    state = {
      
        items:[],
    }
  
         

    componentDidMount(){
        index()  
       .then((res)=>{
        const items = res.data.items
        this.setState({items:items})
        
        
        })
    .catch((error=> console.log(error)))
        
        
        }
    

    

    render(){
        return(
            <div>
              {this.state.items.map(item=>{
                return(
                  <div>
                <p>name{item.name}</p>
                </div>
                )
              })}
            </div>
              
        )}
      
      
      
      }
      
              
        

      export default withRouter(AllArt);