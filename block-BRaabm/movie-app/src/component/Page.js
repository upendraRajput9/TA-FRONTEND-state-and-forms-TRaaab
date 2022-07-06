import React from 'react'

class Page extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    let m = this.props.movie
    let genre = this.props.movie.Genre.split(",")
    console.log(this.props)
    return (
      <article className='movie-container'>
     
        <div className="single-movie" key={m.imdbID}>
        <button onClick={this.props.onClick} className="close">
            X
          </button>
          <figure className="single-image">
            <img src={m.Poster} alt={'imag'} />
          </figure>
          <div className="details">
            <h4>{m.Title}</h4>
            <hr/>
            <h3><b>IMDB Rating</b> {m.imdbRating}</h3>
            <h3><b>IMDB Votes</b> {m.imdbVotes}</h3>
            <h3><b>MetaScore</b> {m.Metascore}</h3>
            <h3><b>Rated</b> {m.Rated}</h3>
            <h3><b>Language</b> {m.Language} </h3>
            <h3><b>Runtime</b> {m.Runtime}</h3>
            <h3><b>Released</b> {m.Released}</h3>
            <h3><b>Year</b> {m.Year}</h3>
            <h3><b>Type</b> {m.Type}</h3>

            
          </div>
        </div>
        {
           genre.map((elm)=><span className="genre">
            {elm}
            </span>)
        }
        <p>{m.Plot} </p>
        <label>
        Director <h3>{m.Director}</h3>
        <hr/>
        </label>
        
        <label>
        Writer <h3>{m.Writer}</h3>
        <hr/>
        </label>
       
        <label>
          Actors <h3>{m.Actors}</h3>
          <hr/>
        </label>
       
        <label>
          Awards <h3>{m.Awards}</h3>
          <hr/>
        </label>
       
        <label>
          Country <h3>{m.Country}</h3>
          <hr/>
        </label>
       
       
       

        <span className="clips">Some more clips</span>
        <figure className="allImages">
          {m.Images.map((i) => (
            <img src={i} alt={'1'} />
          ))}
        </figure>
      </article>
    )
  }
}
export default Page
