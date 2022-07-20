import { Component } from 'react'

export default class Content extends Component {
    constructor(props){
        super()
    }
  handleContant = (sort, filterbySize, products) => {
    let sampleproduct = [...products]
    if (filterbySize.length > 0) {
      // eslint-disable-next-line array-callback-return
      sampleproduct = sampleproduct.filter((p) => {
        for (let size of filterbySize) {
          if (p.availableSizes.includes(size)) {
            return p
          }
        }
      })
    }

    if (sort === 'LtoH') {
      sampleproduct = sampleproduct.sort((a, b) => a.price - b.price)
      return sampleproduct
    } else if (sort === 'HtoL') {
      sampleproduct = sampleproduct.sort((a, b) => b.price - a.price)
      return sampleproduct
    } else {
      return sampleproduct
    }
  }

  render() {
    let data = this.handleContant(
      this.props.sort,
      this.props.size,
      this.props.products,
    )

    return data.map((product) => (
      <li key={product.id}>
        {product.isFreeShipping ? <p>Free Shipping</p> : ''}
        <figure>
          <img
            alt={product.title}
            src={'./static/products/' + product.sku + '_1.jpg'}
          />
        </figure>
        <article>
          <h2>{product.title}</h2>
          <hr />
          <h3>${product.price}</h3>
          <button
            onClick={() => this.props.handleAddCart(product)}
            value={product.id}
          >
            Add to Cart
          </button>
        </article>
      </li>
    ))
  }
}
