import React, { Component } from 'react';
import Title from './Title';
import Video from './VideoContent';
import Comments from './Comments';
import CreateComment from './CreateComment';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.data.title,
      showComents: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.showComents = this.showComents.bind(this);
  }
  handleClick() {
    e.preventDefault()
    this.setState({title: 'New title is here!!!!'})
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  showComents(e) {
    e.preventDefault()
    this.setState({
      showComents: !this.state.showComents
    })
  }

  render() {
    const videoStyle = {
      justifyContent: 'space-between',
      minHeight: 200,
      border: '1px solid #ccc',
      fontFamily: "'Raleway', sans-serif",
      fontStyle: 'italic',
      margin: '10px',
      backgroundColor: "#e6e6e6"
    }
    return (
      <div style={videoStyle}>
        <Title title={this.state.title} />
        <Video url={this.props.data.video} />
        <p><a href="#" onClick={this.handleClick}> Click Me </a></p>
        <p><a href="#" onClick={this.showComents}>Show Comments ({this.props.data.comments.length})</a></p>
        {this.state.showComents && <Comments comments={this.props.data.comments}/>}
        <CreateComment/>
      </div>
    );
  }
}
