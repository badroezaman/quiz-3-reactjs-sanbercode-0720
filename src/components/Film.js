import React, { useState, useEffect } from "react";
import axios from "axios";
// https://www.backendexample.sanbersy.com/api/movies
const Film = () => {
  const [movie, setMovie] = useState(null);
  const [input, setInput] = useState({
    title: "",
    description: "",
    year: 2020,
    duration: 120,
    genre: "",
    rating: 0,
  });
  const [selectedId, setSelectedId] = useState(0);
  const [statusForm, setStatusForm] = useState("create");

  useEffect(() => {
    if (movie === null) {
      axios
        .get(`https://www.backendexample.sanbersy.com/api/movies`)
        .then((res) => {
          console.log(res);
          setMovie(
            res.data.map((el) => {
              return {
                id: el.id,
                title: el.title,
                description: el.description,
                year: el.year,
                duration: el.duration,
                genre: el.genre,
                rating: el.rating,
              };
            })
          );
        });
    }
  }, [movie]);

  const handleDelete = (event) => {
    let idDataMovie = parseInt(event.target.value);

    let newMovie = movie.filter((el) => el.id !== idDataMovie);

    axios
      .delete(
        `https://www.backendexample.sanbersy.com/api/movies/${idDataMovie}`
      )
      .then((res) => {
        console.log(res);
      });

    setMovie([...newMovie]);
  };

  const handleEdit = (event) => {
    let idDataMovie = parseInt(event.target.value);
    let dataMovie = movie.find((x) => x.id === idDataMovie);
    console.log(dataMovie);
    setInput({
      title: dataMovie.title,
      description: dataMovie.description,
      year: dataMovie.year,
      duration: dataMovie.duration,
      genre: dataMovie.genre,
      rating: dataMovie.rating,
    });
    setSelectedId(idDataMovie);
    setStatusForm("edit");
  };

  const handleChange = (event) => {
    let typeOfInput = event.target.name;

    switch (typeOfInput) {
      case "title": {
        setInput({ ...input, title: event.target.value });
        break;
      }
      case "year": {
        setInput({ ...input, year: event.target.value });
        break;
      }
      case "duration": {
        setInput({ ...input, duration: event.target.value });
        break;
      }
      case "genre": {
        setInput({ ...input, genre: event.target.value });
        break;
      }
      case "rating": {
        setInput({ ...input, rating: event.target.value });
        break;
      }
      case "description": {
        setInput({ ...input, description: event.target.value });
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSubmit = (event) => {
    // menahan submit
    event.preventDefault();

    let title = input.title;
    let rating = input.rating.toString();
    let duration = input.duration.toString();
    let genre = input.genre;
    let year = input.year.toString();
    let description = input.description;

    if (
      title.replace(/\s/g, "") !== "" &&
      rating.replace(/\s/g, "") !== "" &&
      duration.replace(/\s/g, "") !== "" &&
      genre.replace(/\s/g, "") !== "" &&
      year.replace(/\s/g, "") !== "" &&
      description.replace(/\s/g, "") !== ""
    ) {
      if (statusForm === "create") {
        axios
          .post(`http://backendexample.sanbercloud.com/api/movies`, {
            title: input.title,
            rating: input.rating,
            duration: input.duration,
            genre: input.genre,
            year: input.year,
            description: input.description,
          })
          .then((res) => {
            setMovie([
              ...movie,
              {
                id: res.data.id,
                title: input.title,
                rating: input.rating,
                duration: input.duration,
                genre: input.genre,
                year: input.year,
                description: input.description,
              },
            ]);
          });
      } else if (statusForm === "edit") {
        axios
          .put(
            `http://backendexample.sanbercloud.com/api/movies/${selectedId}`,
            {
              title: input.title,
              rating: input.rating,
              duration: input.duration,
              genre: input.genre,
              year: input.year,
              description: input.description,
            }
          )
          .then(() => {
            let dataMovie = movie.find((el) => el.id === selectedId);
            dataMovie.title = input.title;
            dataMovie.rating = input.rating;
            dataMovie.duration = input.duration;
            dataMovie.genre = input.genre;
            dataMovie.year = input.year;
            dataMovie.description = input.description;
            setMovie([...movie]);
          });
      }

      setStatusForm("create");
      setSelectedId(0);
      setInput({
        title: "",
        description: "",
        year: 2020,
        duration: 120,
        genre: "",
        rating: 0,
      });
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-50">
          <h1 className="text-bold text-primary">Daftar Film</h1>
          {movie !== null &&
            movie.map((item, index) => {
              return (
                <div className="item-list" key={index}>
                  <div className="properties">
                    <div className="row">
                      <h3 className="title">{item.title}</h3>
                      <h5>Rating : {item.rating}</h5>
                      <h5>Durasi : {item.duration} menit</h5>
                      <h5>Genre : {item.genre}</h5>
                      <h5>Tahun : {item.year}</h5>
                    </div>
                    <div className="row mt-1">
                      <button
                        className="btn btn-warning"
                        onClick={handleEdit}
                        value={item.id}
                      >
                        Edit
                      </button>
                      &nbsp; &nbsp;
                      <button
                        className="btn btn-outline-danger"
                        onClick={handleDelete}
                        value={item.id}
                      >
                        Hapus
                      </button>
                    </div>
                    <p className="mt-1">
                      <strong>Deskripsi : </strong> {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Form */}
        <div className="col-50">
          <h1 className="text-bold text-primary">Form Daftar Film</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-25">
                <label>Judul</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="title"
                  value={input.title}
                  onChange={handleChange}
                  placeholder="Judul Film"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Rating</label>
              </div>
              <div className="col-75">
                <input
                  type="number"
                  name="rating"
                  value={input.rating}
                  onChange={handleChange}
                  placeholder="Pilih angka 1 - 10"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Durasi</label>
              </div>
              <div className="col-75">
                <input
                  type="number"
                  name="duration"
                  value={input.duration}
                  onChange={handleChange}
                  placeholder="dalam menit"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Genre</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="genre"
                  value={input.genre}
                  onChange={handleChange}
                  placeholder="Aksi, Drama, Komedi"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Tahun</label>
              </div>
              <div className="col-75">
                <input
                  type="number"
                  name="year"
                  value={input.year}
                  onChange={handleChange}
                  placeholder="2020"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Deskripsi</label>
              </div>
              <div className="col-75">
                <textarea
                  rows="5"
                  name="description"
                  value={input.description}
                  onChange={handleChange}
                  placeholder="Tuliskan deskripsi film disini"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-100">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Film;
