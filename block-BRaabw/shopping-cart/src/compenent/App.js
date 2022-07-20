import React from 'react'
import Content from './Content'
import Aside from './Aside'
import Cart from './Cart'
import data from './data.json'

export default class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      cartDisplay: false,
      filter: 'select',
      cartProduct: [],
      sizes: [],
    }
  }
  //cartdisplay
  handleCartDisplay = () => {
    this.setState({
      cartDisplay: !this.state.cartDisplay,
    })
  }
  //handlePrice

  handlePrice = ({ target }) => {
    this.setState((prevState) => ({
      filter: target.value,
    }))
  }
  //
  handleAddCart = (product) => {
    let isPresent =
      this.state.cartProduct.findIndex((p) => p.id === product.id) !== -1
    if (isPresent) {
      this.incrementQuantity(product.id)
    } else {
      this.setState((prevState) => ({
        cartProduct: prevState.cartProduct.concat({ ...product, quantity: 1 }),
      }))
    }
  }
  //incrementQuantity
  incrementQuantity = (id) => {
    this.setState((prevState) => ({
      cartProduct: prevState.cartProduct.map((p) => {
        if (p.id === id) {
          return { ...p, quantity: p.quantity + 1 }
        }
        return p
      }),
    }))
  }
  //decrease
  decreaseQuantity = (id) => {
    let index = this.state.cartProduct.findIndex((p) => p.id === id)
    if (this.state.cartProduct[index].quantity === 1) {
      return this.deleteCartProduct(id)
    }
    this.setState((prevState) => ({
      cartProduct: prevState.cartProduct.map((p) => {
        if (p.id === id) {
          return { ...p, quantity: p.quantity - 1 }
        }
        return p
      }),
    }))
  }
  //deleteproduct from cart
  deleteCartProduct = (id) => {
    this.setState((prevState) => ({
      cartProduct: prevState.cartProduct.filter((p) => p.id !== id),
    }))
  }
  //handleSize
  handleSize = ({ target }) => {
    let index = this.state.sizes.indexOf(target.innerText)
    let cloneSize = [...this.state.sizes]
    if (this.state.sizes.includes(target.innerText)) {
      cloneSize.splice(index, 1)
      this.setState({
        sizes: cloneSize,
      })
    } else {
      this.setState({
        sizes: this.state.sizes.concat(target.innerText),
      })
    }
  }

  render() {
    let cartQuantity = 0
    let totalCost = 0
    for (let p of this.state.cartProduct) {
      let cost = p.quantity * p.price
      totalCost += cost
      cartQuantity += p.quantity
    }
    return (
      <>
        <header>
          <div className="icon-section">
            <h1>Shopping Cart</h1>
            <figure onClick={this.handleCartDisplay} className="cart-icon">
              <img alt="cart" src="./static/shopping-cart.gif" />
            </figure>
          </div>
          <div className="select-section">
            <p>16 Product found.</p>
            <article>
              <label>Sorted by</label>
              <select onChange={this.handlePrice} defaultValue="select">
                <option value="select">Select</option>
                <option value="LtoH">Price: Lowest to highest</option>
                <option value="HtoL">Price: Highest to lowest</option>
              </select>
            </article>
          </div>
        </header>
        <main className="container">
          <section className="contant-section">
            {
              <Aside
                handleSize={this.handleSize}
                sizes={this.state.sizes}
                products={data.products}
              />
            }

            <ul className="contant">
              <Content
                handleAddCart={this.handleAddCart}
                sort={this.state.filter}
                size={this.state.sizes}
                products={data.products}
              />
            </ul>
          </section>
          <section className="bag">
            <figure onClick={this.handleCartDisplay} className="bag-icon">
              <div>{cartQuantity}</div>
              <img alt="cart" src="./static/bag-icon.png" />
            </figure>
            {this.state.cartDisplay ? (
              <article>
                <h4>SHOPPING BAG</h4>
                <ul>
                  {this.state.cartProduct.map((elm) => (
                    <Cart
                      key={elm.id}
                      delete={this.deleteCartProduct}
                      decrease={this.decreaseQuantity}
                      increment={this.incrementQuantity}
                      {...elm}
                    />
                  ))}
                </ul>
                <div className="checkout">
                  <p>Your Total amount is: ${totalCost}</p>
                  <button
                    onClick={() => alert(`Your Total amount is: $${totalCost}`)}
                  >
                    Checkout
                  </button>
                </div>
              </article>
            ) : (
              ''
            )}
          </section>
        </main>
      </>
    )
  }
}
