import React from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import config from "../../../config.js"
import Socials from '../../components/socials/Socials.js'
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
							<h5 className="super title">
								LEVELUP FILM
							</h5>
						</div>
						<div className="jumbotron-content">
							<p className="primary">
								Привет! Мы - профессиональная команда, которая специализируется на создании качественных видеороликов самых разных направлений. Мы снимаем клипы, рекламные ролики, интервью и многое другое
							</p>
						</div>
						<div className="jumbotron-actions">
							<div className="button-group" style={{justifyContent: 'center'}}>
								<Link to="/career"><button className="button ghost">Работать вместе <i className="fa fa-location-arrow"></i></button></Link>
								<Link to="/career"><button className="button ghost">Наши работы <i className="fa fa-angle-double-right"></i></button></Link>
							</div>
						</div>
					</div>
					</div>
					<div className="block" style={{paddingTop:0}}>
						<Socials />
					</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Index;