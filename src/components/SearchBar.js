import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleSearchSubmit(event) {
    event.preventDefault();
    let inputDOM = this.refs.searchInput;
    this.props.onSearch(inputDOM.value);
    inputDOM.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSearchSubmit.bind(this)}>
        <input ref='searchInput' type='text' placeholder='Enter title to search'/>
        <input type='submit' value='Search'/>
      </form>
    );
  }
}