import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import "./projects.css";

const Projects = props => {
	return (
		<div className="page-projects page">
			<Helmet>
        <title>Проекты - Levelup Film</title>
        <meta name="description" content="Проекты. Levelup Film - это профессиональная фото и видео съемка" />
    		<meta name="keywords" content="фото, видео съемка, профессиональная съемка, фотография" />
    		<meta name="author" content="Levelup Web" />
  			<meta name="robots" content="index, follow" />
  			<meta name="revisit-after" content="1 days" />
  		</Helmet>
			<div className="block">
				<div className="block-title left" id="about-us">
					<h5 className="super title">
						Наши проекты
					</h5>
					<p className="description">Портфолио и всё-всё-всё</p>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					Текст...	
				</p>
			</div>
			<div className="block">
				<div className="button-group">
					<Link to="/contact">
						<button className="button">Связаться <i className="fa fa-angle-right"></i></button>
					</Link>
				</div>	
			</div>
		</div>
	)
}

export default Projects;
