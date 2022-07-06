import React from 'react'
import data from './data.json'
import MovieList from './MovieList'
import Pic from '../style/minions.gif'
import Page from './Page'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'active',
      index: 1,
    }
  }
  handle = (index) => {
    this.setState({
      active: this.state.active === 'active' ? '' : 'active',
      index: index,
    })
  }
  render() {
    return (
      <main>
        <header>
          <h1>
            Movies
            <img alt="miminas" src={Pic} />
          </h1>
          <hr className='line' />
        </header>
        <section className={this.state.active === 'active' ? '' : 'active'}>
          <ul className="container">
            <li className="title-heading">
              <figure></figure>
              <div className="title">
                <h2>Title</h2>
              </div>

              <h3>IMDB RATING</h3>
            </li>
            {data.map((movie, index) => (
              <MovieList
                onClick={this.handle}
                index={index}
                key={movie.Title}
                {...movie}
              />
            ))}
          </ul>
        </section>
        <section className={this.state.active}>
         {this.state.active===""?<Page onClick={this.handle} key={this.state.index} movie={data[this.state.index]}/>:""}
        </section>
      </main>
    )
  }
}

export default App
