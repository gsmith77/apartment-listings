import React, { Component } from 'react';
import InputNumber from 'react-input-just-numbers';
import styled from 'styled-components'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const Input = styled.input `
font-size: 14px;
font-weight: 300;
`
const Label = styled.label `
  font-weight: 500;
  background: magenta;
`

const H2 = styled.h2 `
  color: blue;
  margin: auto;
  padding-top: 100px;
  font-size: 50px;
  display: flex;
  align: center;
  justify-content: center;
`

const Form = styled.form `
  margin: auto;
  padding-top: 100px;
  display: flex;
  align: center;
  width: 500px;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
`
const initialState = {
  city: '',
  state: '',
  numOfBedrooms: '',
  numOfBathrooms: '',
  minRentRange: 1000,
  maxRentRange: 1000,
  states: ['AK','AL','AR','AZ','CA','CO','CT','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA','MA','MD','ME',
  'MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY'],
  selectedState: ''
}

export default class ListingSearchInput extends Component {
  constructor(){
    super()
    this.state = initialState
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSelectedState = (event) => {
    this.setState({
      selectedState: event
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    fetch(`http://localhost:3000/new_search?city=${this.state.city}&state=${this.state.selectedState}&
    numOfBedrooms=${this.state.numOfBedrooms}&numofBathrooms=${this.state.numOfBathrooms}&minRentRange=${this.state.minRentRange}&maxRentRange=${this.state.maxRentRange}`)
    this.setState(initialState)
  }

  renderStates = () => {
    return this.state.states.map(state => 
      <Dropdown.Item eventKey={state} key={state} onSelect={this.handleSelectedState} style={{display:'stretch'}}>{state} </Dropdown.Item>
    )
  }

  render() {
    
    return (
      <div className="listingsearchinput">
        <H2>Find Your Apartments</H2>
        <Form onSubmit={this.handleSubmit}>
          <Label>City:</Label>
          <Input type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
          <br/>
          <Dropdown >
            <DropdownButton id="dropdown-basic-button" title="States" drop="down">
              {this.renderStates()}
            </DropdownButton>
          </Dropdown>
          <br/>

          {/* put drop down box for states */}
          <label>Number of Bedrooms</label>
          <InputNumber name="numOfBedrooms" value={this.state.numOfBedrooms} onChange={this.handleChange}/>
          <label>Number of Bathrooms</label>
          <InputNumber name="numOfBathrooms" value={this.state.numOfBathrooms} onChange={this.handleChange}/>
          <label>Minimum Rent</label>
          <InputNumber name="minRentRange" step='50' value={this.state.minRentRange} onChange={this.handleChange}/>
          <label>Maxiumum Rent</label>
          <InputNumber name="maxRentRange" step='50' value={this.state.maxRentRange} onChange={this.handleChange}/>
          <input type="submit" value="Search"/>
        </Form>
      </div>
    )
  }
}
