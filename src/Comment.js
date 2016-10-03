import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
   const style = {
  }
  return (
    <li>
      <p>{this.props.text}</p>
      <p>by {this.props.author}</p>
    </li>
    );
}
}
