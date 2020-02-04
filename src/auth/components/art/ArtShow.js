import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom'
import {Show} from './api'

class ArtShow extends Component {
    state = { item:{} 
      }
    
    componentDidMount(){
        const user = this.props.user
        console.log(user)
        const itemId = this.props.itemId;
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
        
         <div>
        <h1>{this.state.item.name}</h1>
        <h3>{this.state.item.price}</h3>
        <img src={this.state.item.img} alt="" />
        <Link to={`/items/${this.state.item._id}/edit`}><button className="btn-secondary">Edit</button></Link>
        </div> );
    }
}
 
export default withRouter(ArtShow);