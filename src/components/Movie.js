import React, { Component } from 'react';

export default class Movie extends Component {
  render() {
    let { Title, Year, Type, Poster } = this.props.data;
    return (
      <li>
        <img src={Poster}/>
        {Title} ({Year})
      </li>
    );
  }
}