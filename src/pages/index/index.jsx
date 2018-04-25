import React from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import config from "../../utils/config"
import Socials from '../../components/socials/'
import BackgroundVideo from '../../components/backgroundVideo/'
import "./styles.css";

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
					<img src={config.static + "/img/logo-default-inverted.png"} alt="Levelup Worlds"/>	
				</a>
			</div>
			<section className="fullpage center first" style={{border:0}}>
				<div className="container text">
					<div className="blocks">
					<div className="block">
					<div className="jumbotron">
						<div className="jumbotron-title inverted">
							<h3 className="super title">
								Levelup Film
							</h3>
						</div>
						<div className="jumbotron-content inverted">
							<p className="primary">
								Мы - профессиональная команда, которая специализируется на создании качественных видеороликов самых разных направлений. Мы снимаем клипы, рекламные ролики, интервью и многое другое
							</p>
						</div>
						<div className="jumbotron-actions">
							<div className="button-group" style={{justifyContent: 'center'}}>
								<Link to="/contact">
									<button className="button">
										Работать вместе <i className="fa fa-location-arrow"></i>
									</button>
								</Link>
								<Link to="/projects">
									<button className="button">
										Наши работы <i className="fa fa-angle-double-right"></i>
									</button>
								</Link>
							</div>
						</div>
					</div>
					</div>
					<div className="block inverted" style={{paddingTop:0}}>
						<Socials />
					</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Index;