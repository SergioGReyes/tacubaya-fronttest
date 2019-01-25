import React, { Component } from 'react'
import axios from 'axios';
import './Photos.css';
import Navbar from '../Navbar/Navbar';

export default class Photos extends Component {

  constructor() {
    super();
    this.state = { photos: null };
  }

  getAllPhotos = () => {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${this.props.match.params.id}/photos`)
      .then(photos => {
        let filteredPhotos = photos.data.filter((a) => {
          return a.albumId === parseInt(this.props.match.params.id);
        });
        this.setState({ ...this.state, photos: filteredPhotos });
      })
      .catch(error => {
        console.log(error);
      })
  }
  componentDidMount() {
    this.getAllPhotos();
  }

  render() {

    return this.state.photos ?
      (
        <div className="global-container">
          <Navbar />
          <div className="margin-navbar"></div>
          <div className="photo-container">
            {this.state.photos.map((photo) => {
              return (
                <div className="card" key={photo.id}>
                  <img src={photo.thumbnailUrl} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{photo.title}</h5>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div >)
      :
      (
        <div className="load-container">
          <p>Loading...</p>
        </div>

      )
  }
}
