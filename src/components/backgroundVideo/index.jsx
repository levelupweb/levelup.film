import React from 'react';
import Video from './api';
import "./styles.css";


export default class BackgroundVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const video = new Video("hz-5LijlF8o", "tv", ".tv .screen");
    video.init();
  }

  render() {
    return (
      <div className="tv">
		  	<div className="screen mute" id="tv"></div>
			</div>
    );
  }
}
