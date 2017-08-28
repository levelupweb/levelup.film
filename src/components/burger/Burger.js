import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./burger.css";

class Burger extends Component {
	constructor(props) {
		super(props);
		this.state = {
			revealed: false
		};
	}

	revealNavigation() {
		if (!this.props.visible) {
		  document.querySelector(".site-content").classList.toggle("with-menu");
		} 
		
		this.setState({
			revealed: !this.state.revealed
		});
	}

	render() {
		const { revealed } = this.state;
		return (
			<div className="burger">
				<p className="burger-revealer spacing"
					onClick={() => { this.revealNavigation() }}>
					{revealed ? "Закрыть меню" : "Открыть меню"}
				</p>
				<nav className={revealed ? "navigation revealed" : "navigation"}>
					<ul>
						<Link
							to="/about"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>О нас</li>
						</Link>
						<Link
							to="/projects"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Проекты</li>
						</Link>
						<Link
							to="/partner"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Сотрудничество</li>
						</Link>
						<Link
							to="/conctact"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Контакты</li>
						</Link>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Burger;