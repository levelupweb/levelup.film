import React from 'react';
import dateFormat from 'dateformat';
import "./styles.css";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.onPlayer = this.onPlayer.bind(this)
    this.state = {
    	isPlaying: false
    }
  }
  onPlayer() {
  	this.setState({
			isPlaying: true
  	})
  }
  render() {
  	const { isPlaying } = this.state
  	const { id, title, category, description, videoId, date } = this.props;
    return (
      <div className={isPlaying ? "project playing" : "project"}>
				<div className="project-video inverted">
					<div onClick={() => {this.onPlayer()}} className="project-wrapper"></div>
					<div className="project-meta">
						<span className="category">
							Из категории: {category}
						</span>
						<span className="date">
							Опубликован: {dateFormat(date, 'dd.mm.yy')}
						</span>
					</div>
					<iframe width="100%" height="340" src={"https://www.youtube.com/embed/" + videoId + "?rel=0&amp;showinfo=0"} frameBorder="0" allowFullScreen></iframe>
					<div className="project-title">
						<h2>{title}</h2>
						<p className="primary">{description}</p>
					</div>
				</div>
			</div>
    );
  }
}


export default Project