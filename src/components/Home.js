import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
    };
  }

  getMovies() {
    axios
      .get(`http://backendexample.sanbercloud.com/api/movies`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        const movie = data.map((el, index) => (
          <div className="item-list" key={index}>
            <div className="properties">
              <h3 className="title">{el.title}</h3>
              <h5>Rating : {el.rating}</h5>
              <h5>Durasi : {el.duration} menit</h5>
              <h5>Genre : {el.genre}</h5>
              <h5>Tahun : {el.year}</h5>
              <p className="mt-1">
                <strong>Deskripsi : </strong> {el.description}
              </p>
            </div>
          </div>
        ));

        this.setState({
          movie,
        });
      });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    return (
      <>
        <section>
          <h1 className="text-bold text-primary">Featured Posts</h1>
          <div className="row">
            <div className="col-100">{this.state.movie}</div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
