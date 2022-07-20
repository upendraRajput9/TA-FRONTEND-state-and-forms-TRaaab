import { Component } from 'react'

export default class Cart extends Component {
  render() {
    return (
      <>
        <li>
          <figure
            onClick={() => this.props.delete(this.props.id)}
            className="cross-icon"
          >
            <img alt={this.props.title} src="./static/sprite_delete-icon.png" />
          </figure>
          <figure>
            <img
              alt={this.props.title}
              src={'./static/products/' + this.props.sku + '_2.jpg'}
            />
          </figure>
          <article>
            <h2>{this.props.title}</h2>
            <h3>${this.props.price}</h3>

            <span>Quantity : {this.props.quantity}</span>

            <span
              onClick={() => this.props.increment(this.props.id)}
              className="incDecBtn"
            >
              ➕
            </span>
            <span
              onClick={() => this.props.decrease(this.props.id)}
              className="incDecBtn"
            >
              ➖
            </span>
            <p>
              ${this.props.price} ✖️ {this.props.quantity} 🟰 $
              {this.props.price * this.props.quantity}
            </p>
          </article>
        </li>
      </>
    )
  }
}
