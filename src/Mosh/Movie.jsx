import React, { Component } from "react";
import { getMovies } from "./Services/fakeMovieService.js";

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: getMovies(),
    };
  }
  handleDelete = (item) => {
    const movies = this.state.movies.filter((m) => m._id !== item._id);
    this.setState({ movies });
    //console.log(movies);
  };
  render() {
    const{length:count}=this.state.movies
    //console.log("length",count)
    return (
      <div>
        {count !== 0 ? (
          <React.Fragment>
            <p>Showing {this.state.movies.length} movies</p>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genere</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map((item) => (
                  <tr key={item._id}>
                    <td>{item.title}</td>
                    <td>{item.genre.name}</td>
                    <td>{item.numberInStock}</td>
                    <td>{item.dailyRentalRate}</td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(item)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </React.Fragment>
        ) : (
          <p>There are no movies in DB</p>
        )}
      </div>
    );
  }
}

export default Movie;
