import { Component } from 'react'

export default class Aside extends Component {
  constructor(props) {
    super()
  }

  render() {
    let data = []
    for (let product of this.props.products) {
      data.push(product.availableSizes)
    }
    data = data.flat()
    data = [...new Set(data)]

    return (
      <ul className="size-section">
        {data.map((elm) => (
          <li
            className={this.props.sizes.includes(elm) ? 'btn-active' : ''}
            key={elm}
            onClick={this.props.handleSize}
          >
            {elm}
          </li>
        ))}
      </ul>
    )
  }
}
