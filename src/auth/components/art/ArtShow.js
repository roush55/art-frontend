import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Show} from './api'

class ArtShow extends Component {
    state = { item:{} 
      }
    
    componentDidMount(){
        const user = this.props.user;
        const itemId = this.props.itemId;
        Show(user,itemId)
        .then((res) => {
            const showItem = res.data.item;
            this.setState({
                item:showItem
            })
        })
        .catch((error) => console.log(error))
    }
    
    render() { 
        return (
         <div>
        <h1>{this.state.item.name}</h1>
        <h3>{this.state.item.price}</h3>
        <img src={this.state.item.img} alt="" />
        <Link to={`/items/${this.state.item._id}/edit`}><button className="btn-secondary">Edit</button></Link>
        </div> );
    }
}
 
export default ArtShow;