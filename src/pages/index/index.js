import React from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import config from "../../../config.js"
import "./index.css";

const Index = props => {
	return (
		<div>
			<Helmet>
        <title>Levelup Film</title>
        <meta name="description" content="Levelup Film - профессиональная фото и видео съемка" />
    		<meta name="keywords" content="фото, видео съемка, профессиональная съемка, фотография" />
    		<meta name="author" content="Levelup Web" />
  			<meta name="robots" content="index, follow" />
  			<meta name="revisit-after" content="1 days" />
  		</Helmet>
			<section className="fullpage center first">
				<div className="container text">
					<div className="blocks">
					<div className="block">
					<div className="jumbotron">
						<div className="jumbotron-title">
							<h3 className="super title">
								<img src={config.staticURL + "/img/logo-film.png"} alt="Levelup Film Logo"/>
								Levelup Film
							</h3>
						</div>
						<div className="jumbotron-content">
							<p className="primary">
								Наша команда занимается профессиональной фото и видео съёмкой
							</p>
						</div>
						<div className="jumbotron-actions">
							<Link to="/career"><button className="button">Связаться</button></Link>
						</div>
					</div>
					</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Index;