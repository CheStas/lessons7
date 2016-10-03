import React, { Component } from 'react';
import Comment from './Comment';

export default class Comments extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
   const style = {

  }
  const comments =this.props.comments.map((el, index) => {
    return <Comment key={index} text={el.text} author={el.author}/>
  })
  return (
    <ul style={style}>
    {comments}
    </ul>
    );
}
}
