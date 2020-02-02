import React, { Component } from 'react';
import{show,update} from './api'
import {withRouter} from 'react-router-dom'
//form to update items details 
class EditeArt extends Component {
    state = {
        artForm:{name:"",
                price:null,
                img:""  }
        }

 componentDidMount(){
     const user=this.props.user
     const itemId=this.props.match.params.id;
     show(user,itemId)
     .then((res)=>{
      const item =res.data.item
      this.setState({
          artForm:item 
      })
     })
    
    .catch(error => console.log(error))
                
            }
handleChange=event=>{
const name =event.target.name;
const value=event.target.value;
// returned  object after  is modified.
const newForm =Object.assign(this.state.artForm)
newForm[name]=value;
this.setState({
    artForm:newForm
})

}


    handleSubmit=event=>{
        //to prevent refresh the page 
        event.preventDefualt();
        const user =this.props.user
        const itemId=this.props.match.params.id 
        const updateItem=this.state.artForm
        update(user,updateItem,itemId)
        .then(()=>this.props.history.push(`/items/${itemId}`))
        .catch((error) => console.log(error))


    }
    render() { 
        return (<div>
            <form onSubmit={this. handleSubmit} >
                <label>Name:</label>
                <input  onChange={this.handleChange} type="String" name="name" value={this.state.artForm.name}></input>
                <label>Price:</label>
                <input  onChange={this.handleChange} type="Number" name="price" value={this.state.artForm.price}></input>
                <label>Image</label>
                <input onChange={this.handleChange} type="String" name="img" value={this.state.artForm.img}></input>
                <button type="submit">Update</button>
            </form>
        </div>  );
    }
}
 
export default withRouter(EditeArt) 