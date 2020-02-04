import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom'
import {Show} from './api'
import'./art.scss'

class ArtShow extends Component {
    state = { item:{} 
      }
    
    componentDidMount(){
        const user = this.props.user
        console.log(user)
        const itemId = this.props.itemId;
        console.log(itemId)
        Show(user,itemId)
        .then((res) => {
            const ShowItem = res.data.item;
            console.log(res.data.item)
            this.setState({
                item:ShowItem
            })
        })
        .catch((error) => console.log(error))
    }
    
    render() { 
        
        return (
           <div className="container">
            <div class="card">
  
            <div className="card-body">
        <h1 className="card-text">{this.state.item.name}</h1>
        </div >
        <div>
        <h4 className="card-text"> price{this.state.item.price}$</h4></div>
        <img src={this.state.item.img} alt="" />
        <Link to={`/items/${this.state.item._id}/edit`}><button className="button2"></button></Link>
        
        </div> </div> );
    }
}
 
export default withRouter(ArtShow);