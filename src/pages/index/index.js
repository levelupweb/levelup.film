import React from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import config from "../../../config.js"
import BackgroundVideo from '../../components/backgroundVideo/BackgroundVideo.js'
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
  		<div className="video-background">
  			<BackgroundVideo />
			</div>
			<div className="logo">
				<a href="#" target="_blank">
					<img src={config.staticURL + "/img/logo-default.png"} alt="Levelup Worlds"/>	
				</a>
			</div>
			<section className="fullpage center first inverted">
				<div className="container text">
					<div className="blocks">
					<div className="block">
					<div className="jumbotron">
						<div className="jumbotron-title">
							<h2 className="super title">
								Levelup Film
							</h2>
						</div>
						<div className="jumbotron-content">
							<p className="primary">
								Привет! Мы - профессиональная команда, которая специализируется на создании качественных видеороликов самых разных направлений. Мы снимаем клипы, рекламные ролики, интервью и многое другое
							</p>
						</div>
						<div className="jumbotron-actions">
							<div className="button-group" style={{justifyContent: 'center'}}>
								<Link to="/career"><button className="button ghost">Работать вместе</button></Link>
								<Link to="/career"><button className="button ghost">Наши работы</button></Link>
							</div>
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