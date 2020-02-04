import React, { Component } from 'react';
import{Show,update} from './api'
import {withRouter} from 'react-router-dom'

//form to update items details 
class EditArt extends Component {
        state={
            artForm:{
                name:'',
                price:0,
                img:''
            }
        }
    
        componentDidMount(){
            const user = this.props.user;
            const itemId = this.props.match.params.id;
            Show(user,itemId)
            .then((res) => {
                const item = res.data.item
                this.setState({
                    artForm:item
                })
            })
            .catch(error => console.log(error))
        }
    
        handleChange =(event)=>{
            //get the name of input
            const name = event.target.name;
            // get the value of input
            const value = event.target.value;
            const newForm = Object.assign(this.state.artForm);
            newForm[name] = value;
            this.setState({
                artForm:newForm
            })
        }
    
    
        handleSubmit = (event) =>{
            event.preventDefault();
            const user = this.props.user;
            const itemId = this.props.match.params.id;
            const updateItem = this.state.artForm;
            update(user,updateItem,itemId)
            .then(() => this.props.history.push(`/items/${itemId}`))
            .catch((error) => console.log(error))
        }
    
    
    
        render(){
            // console.log(this.props)
            return(
                <form onSubmit={this.handleSubmit}>
                    <label>name</label>
                    <input className="form-control" onChange={this.handleChange}  name="name" value={this.state.artForm.name} type="text"/>
                    <label>Price</label>
                    <input className="form-control" onChange={this.handleChange}  name="price" value={this.state.artForm.price} type="Number"/>
                    <label>Image</label>
                    <input className="form-control" onChange={this.handleChange}  name="img" value={this.state.artForm.img}type="text"/><br/>
                    <button className="btn-secondary" type="submit">Update</button>
            </form>
            )
        }}
    
export default withRouter(EditArt) 