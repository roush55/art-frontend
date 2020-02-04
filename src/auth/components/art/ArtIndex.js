import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {index,destroy} from './api';
import'./art.scss'


class ArtIndex extends Component {
    state= {
      items:[]
    }
    
     
       
    componentDidMount(){

      const user = this.props.user
       index(user)
      .then((res)=>{
      const items = res.data.items
      this.setState({items:items})
      
      })
      
      .catch((error=> console.log(error)))
      
      
      }


    

      destroy = (itemId) =>{
    const user = this.props.user
    destroy(user,itemId)
    .then(()=>alert ('deleted'))
    .then(()=>{
    const myItems=this.state.items.filter((item) => item._id !== itemId)
            this.setState({
              items:myItems
            })
        })
      }

    render(){
        return(
          <div className="container">
          <div className="row">
            
              {this.state.items.map((item,index) =>(
  
                     <div key={index} className="col">
                  
                  <div class="card">
  
                 <div class="card-body">
                <Link to={`/items/${item._id}`}><p className="card-text">Name:{item.name}</p><link/></Link>
               
                </div>
                <img src={item.img} alt="Cardimage"width="100%" hieght="100"/>
              
                <p className="card-text">price:{item.price}$</p>
                <button className="button1" onClick={() => this.destroy(item._id)}></button>
               </div>
                </div>
                
                  ))}
                </div>
    
                </div>
                )}}
      
              
        

export default ArtIndex
