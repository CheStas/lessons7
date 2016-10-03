import React, { Component } from 'react';
import Comment from './Comment';

export default class CreateComment extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: []
    }
    this.sendComment = this.sendComment.bind(this)
  }

  sendComment() {
    var comments = this.state.comments
    var comment = {
      text: this.refs['message'].value,
      author: this.refs['author'].value
    }

    comments.push(comment)

    this.setState({
      comments: comments
    })
  }

  render() {
   const style = {
     display: 'block',
     margin: '10px 0'
  }
  const comments =this.state.comments.map((el, index) => {
    return <Comment key={index} text={el.text} author={el.author}/>
  })
  return (
    <div>
      <ul>{comments}</ul>
      <input ref="author" placeholder="your nickame.."/>
      <textarea style={style} ref="message" placeholder="write a comment.."/>
      <button onClick={this.sendComment}>send comment</button>
    </div>
    );
}
}
