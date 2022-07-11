import React from 'react'

class Billing extends React.Component {
  constructor(props) {
    super()
    this.state = {
      address: '',
      zipcode: '',
      city: '',
      country: '',
      isChecked: false,
      error:{
        address:""
    }
    }
  }
  handleInput = ({ target }) => {
    let { name, value } = target
    switch(name){
        case "address":
            this.setState({
                error:{address:value.length<8?"You need to enter at-least 8 characters":""}
            })
            break;
            default:
            break
    }
    this.setState({ [name]: value })

  }
  handleCheck = (target) => {
    this.props.check(!this.state.isChecked)
    this.setState({
      isChecked: !this.state.isChecked,
    })
  }
  
  render() {
    return (
      <article>
        <h2>Billing Address</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            defaultChecked={this.state.isChecked}
            type="checkbox"
            onClick={this.handleCheck}
            name="checkbox"
            placeholder="Same as the Shopping Address"
          />
          <span>Same as the Shipping Address</span>
          <label>Address</label>

          <input
            defaultValue={this.props.data.address}
            onChange={this.handleInput}
            placeholder="Address"
            name="address"
          />
           <span>{this.state.error.address}</span>
          <label>ZIP/Postal Code</label>
          <input
            defaultValue={this.props.data.zipcode}
            onChange={this.handleInput}
            placeholder="Zipcode"
            name="zipcode"
          />
          <label>City</label>
          <input
            defaultValue={this.props.data.city}
            onChange={this.handleInput}
            placeholder="City"
            name="city"
          />
          <label>Country</label>
          <input
            defaultValue={this.props.data.country}
            onChange={this.handleInput}
            placeholder="Country"
            name="country"
          />
        </form>
      </article>
    )
  }
}
export default Billing
