import React, { Component } from 'react';
import InputNumber from 'react-input-just-numbers';

export default class ListingSearchInput extends Component {
  constructor(){
    super()
    this.state = {
      city: '',
      state: '',
      numOfBedrooms: 1,
      numOfBathrooms: 1,
      minRentRange: 0,
      maxRentRange: 0
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="listingsearchinput">
        <form onSubmit={this.handleSubmit}>
          <label>City:</label>
          <input type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
          <label>State:</label>
          {/* put drop down box for states */}
          <label>Number of Bedrooms</label>
          <InputNumber value={this.state.numOfBedrooms}/>
          <label>Number of Bathrooms</label>
          <InputNumber value={this.state.numOfBathrooms}/>
          <label>Minimum Rent</label>
          <InputNumber value={this.state.minRentRange}/>
          <label>Maxiumum Rent</label>
          <InputNumber value={this.state.maxRentRange}/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}