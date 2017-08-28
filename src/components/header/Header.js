import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = props => 
	<div className="header block">
		<nav className="navigation">
			<ul>
				<Link
					to="/about">
					<li>О нас</li>
				</Link>
				<Link
					to="/partner">
					<li>Партнерство</li>
				</Link>
				<Link
					to="/projects">
					<li>Проекты</li>
				</Link>
				<Link
					to="/contact">
					<li>Контакты</li>
				</Link>
			</ul>
			<ul className="header-logo">
				<Link to="/">
					<img src="./dist/img/logo-film.png" alt="Levelup Web"/>
				</Link>
			</ul>	
		</nav>
	</div>

export default Header;