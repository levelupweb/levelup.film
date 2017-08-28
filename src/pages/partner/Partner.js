import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import "./partner.css";

const Partner = props => {
	return (
		<div className="page-partner page">
			<Helmet>
        <title>Партнерам - Levelup Film</title>
        <meta name="description" content="Предложение партнёрам. Levelup Film - это профессиональная фото и видео съемка" />
    		<meta name="keywords" content="фото, видео съемка, профессиональная съемка, фотография" />
    		<meta name="author" content="Levelup Web" />
  			<meta name="robots" content="index, follow" />
  			<meta name="revisit-after" content="1 days" />
  		</Helmet>
			<div className="block">
				<div className="block-title left" id="about-us">
					<h5 className="super title">
						Партнёрам
					</h5>
					<p className="description">Что мы можем предложить?</p>
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

export default Partner;
