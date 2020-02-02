import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {index,destroy} from './api';

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

      destroy=(itemId)=>{
    const user = this.props.user
    destroy(user,itemId)
    .then(()=>alert ('deleted'))
    .then(()=>{
    const newItems=this.state.items.filter((item) => item._id !== itemId)
            this.setState({
              items:newItems
            })
        })
      }

    render(){
        return(
          <div className="App">
          
            
              {this.state.items.map((item,index) => (
              
              
               
                <div key={index} id={item._id}>
               <h1>name:{item.name}</h1>
               <h1>price:{item.price}</h1>
               <img src={item.img} alt="img" width="200"/>

               <br/>
               <button onClick={() => this.destroy(item._id)}>Delete</button><br/>
                <Link to={`/items/${item._id}/edit`}><button>Edit</button></Link>
                </div>
              )
                )
                }
    
    
                </div>
      
              
        )}}

export default ArtIndex
