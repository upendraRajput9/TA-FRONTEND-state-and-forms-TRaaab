import { Component } from 'react'

export default class First extends Component {
  constructor(props) {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      date: '',
      email: '',
      address: '',
      error: { firstName: '', lastName: '', date: '', email: '', address: '' },
    }
  }

  handle = ({ target }) => {
    let { name, value } = target
    switch (name) {
      case 'email':
        this.setState({error:{email: this.validateEmail(value) ? '' : 'Email is not verified'} })
        break;
      case 'address':
        this.setState({error:{ address: value.length>6 ? '' : 'Address must be 5 character' }})
        break
      default:
        break;
    }
    
    this.setState({ [name]: value })
  }
  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  }

  render() {
    console.log()
    return (
      <div className={this.props.className}>
        <header>
          <ul>
            <li>
              <div className='pageNO'>1</div>
              <span>Sign Up</span>
            </li>
            <li>
              <div>2</div>
              <span>Message</span>
            </li>
            <li>
              <div>3</div>
              <span>Checkbox</span>
            </li>
          </ul>
          <hr />
        </header>
        <div>
          <span>Step1/3</span>
          <h1>Sign Up</h1>
          <form>
            <fieldset>
              <div>
                <label>First Name</label>
                <input name="firstName" />
              </div>
              <div>
                <label>Last Name </label>
                <input name="lastName" />
              </div>
            </fieldset>
            <fieldset>
              <div>
                <label>Date of Birth</label>
                <input type="date" />
              </div>
              <div>
                <label>Email Address </label>
                <input className={this.state.error.email?"error":""} onChange={this.handle} name="email" />
                <span className={this.state.error.email?"error":""}>{this.state.error.email}</span>
              </div>
            </fieldset>
            <div className="address">
              <label>Adress</label>
              <input className={this.state.error.address?"error":""} onChange={this.handle} name="address" />
              <span className={this.state.error.address?"error":""}>{this.state.error.address}</span>
            </div>
          </form>
          <hr />
          <br/>
          <div className='btn-parent'>
          <button onClick={() => this.props.call('second')}>Next Step</button>
          </div>
        </div>
      </div>
    )
  }
}
