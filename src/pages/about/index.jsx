import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import "./styles.css";

const About = props => {
	return (
		<div className="page-about page">
			<Helmet>
        <title>О компании Levelup Film</title>
        <meta name="description" content="Levelup Film - это профессиональная фото и видео съемка" />
    		<meta name="keywords" content="фото, видео съемка, профессиональная съемка, фотография" />
    		<meta name="author" content="Levelup Web" />
  			<meta name="robots" content="index, follow" />
  			<meta name="revisit-after" content="1 days" />
  		</Helmet>
			<div className="block">
				<div className="block-title left" id="about-us">
					<h5 className="super title">
						О компании
					</h5>
					<p className="description">Чем мы занимаемся?</p>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					Levelup Film - это профессиональная команда, которая занимается фото и видео съёмкой роликов самых разных направленностей. Мы снимаем всё: от реклмных роликов и до документальных фильмов. В нашу команду входят только специалисты своих областей
				</p>
			</div>
			<div className="block">
				<div className="list">
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							Фотосъёмка
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							Видеосъёмка 4K
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							Аэросъемка
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							Монтаж и цветокоррекция
						</div>
					</div>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					Начните работать с нами, написав нам письмо. Или свяжитесь с нами через наши контактные данные.
				</p>
			</div>
			<div className="block">
				<div className="button-group inverted">
					<Link to="/contact">
						<button className="button ghost">
							Связаться <i className="fa fa-angle-right"></i>
						</button>
					</Link>
				</div>	
			</div>
		</div>
	)
}

export default About;
