import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import config from '../../../config.js'
import "./contact.css";

const Contact = props => {
	return (
		<div className="page-partner page">
			<Helmet>
        <title>Контакты - Levelup Film</title>
        <meta name="description" content="Контакты. Levelup Film - это профессиональная фото и видео съемка" />
    		<meta name="keywords" content="фото, видео съемка, профессиональная съемка, фотография" />
    		<meta name="author" content="Levelup Web" />
  			<meta name="robots" content="index, follow" />
  			<meta name="revisit-after" content="1 days" />
  		</Helmet>
			<div className="block">
				<div className="block-title left" id="about-us">
					<h5 className="super title">
						Наши контакты
					</h5>
					<p className="description">Как легче всего с нами связаться?</p>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					Текст...	
				</p>
			</div>
			<div className="block">
				<div className="list">
					<div className="item">
						<div className="icon">
							<img src={config.staticURL + "/img/paper-plane.png"} alt="Почта"/>
						</div>
						<div className="content">
							hh@levelupworlds.com
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<img src={config.staticURL + "/img/placeholder.png"} alt="Адрес"/>
						</div>
						<div className="content">
							г. Москва, Пресненская наб., 6, стр. 2
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<img src={config.staticURL + "/img/smartphone.png"} alt="Мобильный телефон"/>
						</div>
						<div className="content">
							(903) 634-69-29
						</div>
					</div>
				</div>
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

export default Contact;
