import React, { Component } from "react";



export default class Form extends Component {


    render () {


        return (
            <div>
                <form onSubmit={this.handleSubmit}>
        <label>
          Image Url: <input value={this.state.img} onChange= {(event) => {
            this.handleImageChange(event.target.value)}}/>
        </label>
        <label>
          Product Name: <input value={this.state.name} onChange={(event) => {
            this.handleNameChange(event.target.value)}} />
        </label>
        <label>
          Price: <input value={this.state.price} onChange={(event) => {
            this.handlePriceChange(event.target.value)}} />
        </label>
        <button>Cancel</button>
        <button>Add To Favorites</button>
    </form>
            </div>
        )
    }
}


