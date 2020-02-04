import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {index,destroy,Show} from './api';
import'./art.scss'
import ArtShow from './ArtShow';

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
                  
  
                <Link to={`/items/${item._id}`}><h3>Name:{item.name}</h3><link/></Link>
                <h6>price:{item.price}</h6>
          
                <img src={item.img} alt="img" width="200" height="150"/>
                <br/><br/>
                <div className="btn-group">
               <button className="btn-secondary" onClick={() => this.destroy(item._id)}>Delete</button><br/>
               <Link to={`/items/${item._id}`}><button className="btn-secondary">Show</button></Link>
                </div>
              
                </div>
                  ))}
                </div>
    
                </div>
                )}}
      
              
        

export default ArtIndex
