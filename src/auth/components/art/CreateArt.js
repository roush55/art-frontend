import React, { Component } from 'react';
 import {withRouter} from 'react-router-dom'
import {create} from './api'
import './art.scss'

class CreateArt extends Component {
    state = {
        artForm: {
            name: "",
            price:0,
            img:""
            
           
        }
    }
    onChangeHandler = event => {
        const name = event.target.name
        const value = event.target.value
        this.setState( ({...copyState})=> {
            copyState.artForm[name] = value
            return copyState
        })
    }
    onSubmitHandler = event => {
        event.preventDefault();
        const newItem = this.state.artForm
        const user = this.props.user
        create(user,newItem)
        .then(() => alert('created'))
        .then(() => this.props.history.push('/items'))
        .catch((error) => console.log(error))
    }
        render(){
            return (
                <div>
                    <form onSubmit={this.onSubmitHandler}>
                        <label>Name:</label>
                        <input  className="form-control" name="name" value={this.state.artForm.name} onChange={this.onChangeHandler} />
                        <br/>
                        <label>Price:</label>
                        <input className="form-control" name="price" value={this.state.artForm.price} onChange={this.onChangeHandler}type="number" />
                        <br/>
        
                        <label>Img:</label>
                        <input className="form-control" name="img" value={this.state.artForm.img} onChange={this.onChangeHandler} />
                        <br />
                        <button className="btn btn-secondary" type="submit">Create</button>
                    </form>
                </div>
            )
        }
}

export default withRouter(CreateArt)
