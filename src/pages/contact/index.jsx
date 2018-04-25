import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import config from '../../utils/config'
import Socials from '../../components/socials/'
import ContactForm from '../../components/contactForm/'
import Modal from '../../components/modal/'
import "./styles.css";

const contactFormFields = [{
		placeholder: 'Ваше имя',
		name: 'name',
		type: 'text'
	}, {
		placeholder: 'Ваш E-Mail',
		name: 'email',
		type: 'text'
	}, {
		placeholder: 'Контактный телефон',
		name: 'phone',
		type: 'text'
	}, {
		placeholder: 'Ваше сообщение',
		name: 'message',
		type: 'textarea'
} ]

const renderContactForm = () => (
	<ContactForm 
		isFluid={true} 
		url={config.contactposturl}
		fields={contactFormFields} 
	/>
)
const contactModalConfiguration = {
	title: 'Обратная связь',
	description: 'Сообщение',
	content: 'С вашими деловыми предложениями вы можете обращаться при помощи данной формы обратной связи'
}

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
					У вас есть деловое предложение? Свяжитесь с нами при помощи любого доступного вам способа, используя нашу контактную информацию
				</p>
			</div>
			
			<div className="block">
				<div className="list">
					<div className="item">
						<div className="icon">
							<img src={config.static + "/img/paper-plane.png"} alt="Почта"/>
						</div>
						<div className="content">
							hh@levelupworlds.com
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<img src={config.static + "/img/placeholder.png"} alt="Адрес"/>
						</div>
						<div className="content">
							г. Москва, Пресненская наб., 6, стр. 2
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<img src={config.static + "/img/smartphone.png"} alt="Мобильный телефон"/>
						</div>
						<div className="content">
							(903) 634-69-29
						</div>
					</div>
				</div>
			</div>
			<div className="block">
				<div className="button-group inverted" style={{marginTop: 15 + 'px'}}>
					<Modal options={contactModalConfiguration} render={renderContactForm()}>
						<button className="button ghost">Написать нам</button>
					</Modal>
				</div>	
			</div>
		</div>
	)
}

export default Contact;
