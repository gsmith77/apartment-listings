import React, { Component } from 'react';
import InputNumber from 'react-input-just-numbers';
import styled from 'styled-components'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

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

export default class ListingSearchInput extends Component {
  constructor(){
    super()
    this.state = {
      city: '',
      state: '',
      numOfBedrooms: '',
      numOfBathrooms: '',
      minRentRange: 1000,
      maxRentRange: 1000
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
        <H2>Find Your Apartments</H2>
        <Form onSubmit={this.handleSubmit}>
          <Label>City:</Label>
          <Input type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
          <DropdownButton id="dropdown-item-button" title="States">
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
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