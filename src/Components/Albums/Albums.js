import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import './Albums.css';

export default class Albums extends Component {

  constructor() {
    super();
    this.state = { albums: null };
  }

  getAllAlbums = () => {
    axios.get(`https://jsonplaceholder.typicode.com/albums`)
      .then(albums => {
        this.setState({
          albums: albums.data
        })
      })
  }
  componentDidMount() {
    this.getAllAlbums();
  }

  render() {
    return this.state.albums ?
      (
        <div>
          <Navbar />
          <div className="margin-navbar"></div>
          <div className="album-container">
            {this.state.albums.map((album) => {
              return (
                <div className="album" key={album.id}>
                  <Link to={`/photos/${album.id}`} style={{ textDecoration: 'none' }}>
                    <h2>{album.title}</h2>
                  </Link>
                </div>
              )
            })
            }
          </div>
        </div>)
      :
      (
        <div className="load-container">
          <p>Loading...</p>
        </div>
      )
  }
}
