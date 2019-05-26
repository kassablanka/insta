import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post alt="nature" src="https://t4.ftcdn.net/jpg/01/76/40/85/500_F_176408510_ogRtfE40CisNz0AMi4UvDto7S1pQUQT8.jpg" />
        <Post alt="nature" src="https://t4.ftcdn.net/jpg/01/76/40/85/500_F_176408510_ogRtfE40CisNz0AMi4UvDto7S1pQUQT8.jpg" />
        <Post alt="nature" src="https://t4.ftcdn.net/jpg/01/76/40/85/500_F_176408510_ogRtfE40CisNz0AMi4UvDto7S1pQUQT8.jpg" />
      </div>
    )
  }
}