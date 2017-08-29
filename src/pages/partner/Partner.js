import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import config from '../../../config.js'
import Modal from '../../components/modal/Modal.js'
import ContactForm from '../../components/contactForm/ContactForm.js'
import "./partner.css";

const partnerFormFields = [{
		fieldName: 'Имя партнёра',
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
		fieldName: 'Ссылка на портфолио',
		placeholder: 'Ссылка на портфолио',
		name: 'userPortfolio',
		type: 'text'
	}, {
		fieldName: 'Специализация',
		placeholder: 'Специализация',
		name: 'userSpec',
		type: 'text'
	}, {
		fieldName: 'Город',
		placeholder: 'Город',
		name: 'userPhone',
		type: 'text'
	}, {
		fieldName: 'Сообщение',
		placeholder: 'Ваше сообщение',
		name: 'userMessage',
		type: 'textarea'
} ]

const partnerModalConfiguration = {
	title: 'Сотрудничество',
	description: 'Партнёрское предложение',
	content: 'Заполните форму и мы скоро с вами свяжемся! Не забудьте указать реальные контактные данные, чтобы мы могли написать вам ответ'
}

const renderPartnerForm = () => <ContactForm 
	isFluid={true} 
	fields={partnerFormFields} />

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
					Если у вас хорошее портфолио, но нет клиентов, мы можем вам помочь! Присоединяйтесь к команде Levelup Film и получите возможность работать с нашими клиентами. Заинтересовало предложение? Заполните форму и мы обязательно с вами свяжемся!
				</p>
			</div>
			<div className="block">
				<div className="statistics">
					<div className="statistic">
						<div className="number">
							<img src={config.staticURL + "/img/sir.png"} alt="Разработка мобильных приложений"/>
						</div>
						<div className="title">
							Мы отадём вам найденный заказ
						</div>
					</div>
					<div className="statistic">
						<div className="number">
							<img src={config.staticURL + "/img/creativity.png"} alt="Разработка сайтов и интернет-магазинов"/>
						</div>
						<div className="title">
							Вы выполняете полученный заказ
						</div>
					</div>
					<div className="statistic">
						<div className="number">
							<img src={config.staticURL + "/img/money-bag.png"} alt="Разработка облачных решений"/>
						</div>
						<div className="title">
							Мы выплачиваем вам процент со сделки
						</div>
					</div>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					Процент, который вы сможете получить от каждой сделки будет меняться от сделки к сделке. Но поверьте, этого дохода вам точно хватит, чтобы продолжать свою профессиональную деятельность!
				</p>
			</div>
			<div className="block">
				<div className="button-group">
					<Modal options={partnerModalConfiguration} render={renderPartnerForm()}>
						<button className="button">Заполнить форму <i className="fa fa-angle-right"></i></button>
					</Modal>
				</div>	
			</div>
		</div>
	)
}

export default Partner;
