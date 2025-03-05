import React, { useState } from 'react'
import './Itinerary.scss'

const itineraryData = [
	{
		day: "День 1",
		title: "Прибытие в Махачкалу",
		description: "Заселение в гостиницу, знакомство с группой, обзорная экскурсия по столице Дагестана.",
	},
	{
		day: "День 2",
		title: "Сулакский каньон и прогулка на катере",
		description: "Посещение самого глубокого каньона Европы, катание на катере по Чиркейскому водохранилищу.",
	},
	{
		day: "День 3",
		title: "Гуниб и аул-призрак Гамсутль",
		description: "Путешествие в древний аул Гамсутль, восхождение в горы, рассказы о легендах и истории.",
	},
	{
		day: "День 4",
		title: "Бархан Сарыкум и Дербент",
		description: "Посещение самого большого песчаного бархана в Европе, экскурсия по древнему Дербенту и крепости Нарын-Кала.",
	},
	{
		day: "День 5",
		title: "Каспийское море и отдых на пляже",
		description: "Расслабленный день на побережье Каспийского моря, купание, прогулки, дегустация местных блюд.",
	},
	{
		day: "День 6",
		title: "Возвращение",
		description: "Прощальный завтрак, свободное время в городе, трансфер в аэропорт.",
	},
];

const Itinerary = () => {
	const [activeDay, setActiveDay] = useState(null);
	
	const toggleDay = (index) => {
		setActiveDay(activeDay === index ? null : index);
	};
	
	return (
		<section id="itinerary" className="itinerary">
			<div className="overlay"></div>
			<div className="container">
				<h2>Программа тура</h2>
				{itineraryData.map((item, index) => (
					<div
						key={index}
						className={`day ${activeDay === index ? "active" : ""}`}
						onClick={() => toggleDay(index)}
					>
						<h3>{item.day} – {item.title}</h3>
						<p className="description">{activeDay === index ? item.description : "Нажмите, чтобы раскрыть"}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Itinerary;
