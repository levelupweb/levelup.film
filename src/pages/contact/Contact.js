import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import config from '../../../config.js'
import Socials from '../../components/socials/Socials.js'
import ContactForm from '../../components/contactForm/ContactForm.js'
import Modal from '../../components/modal/Modal.js'
import "./contact.css";


const contactFormFields = [{
		fieldName: 'Имя клиента',
		placeholder: 'Ваше имя',
		name: 'userName',
		type: 'text'
	}, {
		fieldName: 'E-Mail',
		placeholder: 'Ваш E-Mail',
		name: 'userEmail',
		type: 'text'
	}, {
		fieldName: 'Мобильный телефон',
		placeholder: 'Контактный телефон',
		name: 'userPhone',
		type: 'text'
	}, {
		fieldName: 'Сообщение',
		placeholder: 'Ваше сообщение',
		name: 'userMessage',
		type: 'textarea'
} ]

const renderContactForm = () => <ContactForm 
	isFluid={true} 
	fields={contactFormFields} />

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
				<Socials />
				<div className="button-group" style={{marginTop: 15 + 'px'}}>
					<Modal options={contactModalConfiguration} render={renderContactForm()}>
						<button className="button">Написать нам</button>
					</Modal>
				</div>	
			</div>
		</div>
	)
}

export default Contact;
