import React, { Component } from "react";
import axios from "axios";

function minuteToHours(num) {
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return (
    (rhours === 0 ? "" : rhours + " Jam") +
    (rminutes === 0 ? "" : " " + rminutes + " Menit")
  );
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://www.backendexample.sanbersy.com/api/movies`)
      .then((res) => {
        let movies = res.data.map((el) => {
          return {
            id: el.id,
            title: el.title,
            rating: el.rating,
            duration: el.duration,
            genre: el.genre,
            description: el.description,
          };
        });
        this.setState({ movies });
      });
  }

  render() {
    return (
      <>
        <h1 className="text-bold text-primary">Daftar Film Film Terbaik</h1>
        <div className="row">
          <div className="col-100">
            {this.state.movies.map((item) => {
              return (
                <div className="item-list">
                  <div className="properties">
                    <div className="row">
                      <h3 className="title">{item.title}</h3>
                      <h5>Rating {item.rating}</h5>
                      <h5>Durasi: {minuteToHours(item.duration)}</h5>
                      <h5>genre: {item.genre}</h5>
                      <hr />
                      <p className="mt-1">
                        <strong>deskripsi</strong>:{item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
