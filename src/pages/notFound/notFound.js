import React from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import "./notFound.css"

const notFound = props => 
	<section className="fullpage center first notFound">
		<Helmet>
        <title>Ошибка 404</title>
        <meta name="description" content="К сожалению, ничего не найдено" />
    		<meta name="keywords" content="фото, видео съемка, профессиональная съемка, фотография" />
    		<meta name="author" content="Levelup Web" />
  			<meta name="robots" content="index, follow" />
  			<meta name="revisit-after" content="1 days" />
  		</Helmet>
		<Link to="/">
			<img src="img/logo-default.png" width="64px" alt="404 ошибка" />
		</Link>
		<p className="primary">Ошибка 404</p>
	</section>

export default notFound;