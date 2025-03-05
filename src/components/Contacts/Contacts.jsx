import React from 'react'
import { FaPhoneAlt, FaTelegram, FaVk } from 'react-icons/fa'
import './Contacts.scss'

const Contacts = () => {
	return (
		<section id="contacts" className="contacts">
			<div className="overlay"></div>
			<div className="container">
				<h2>Контакты</h2>
				<p>Свяжитесь с нами по телефону или в мессенджерах:</p>
				<div className="social">
					<a href="https://vk.com/k_denisova23" target="_blank" rel="noopener noreferrer">
						<FaVk size={40} />
					</a>
					<a href="https://t.me/k_denisova" target="_blank" rel="noopener noreferrer">
						<FaTelegram size={40} />
					</a>
				</div>
				<a href="tel:+79116919614" className="call-button">
					<FaPhoneAlt size={20} /> Позвонить нам
				</a>
			</div>
		</section>
	);
};

export default Contacts;
