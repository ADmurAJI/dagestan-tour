import React, { useEffect, useState } from 'react'
import './Gallery.scss'

const images = [
	{ src: "src/assets/gallery1.jpg", alt: "Горный пейзаж" },
	{ src: "src/assets/gallery2.jpg", alt: "Сулакский каньон" },
	{ src: "src/assets/gallery3.jpg", alt: "Аул Гамсутль" },
	{ src: "src/assets/gallery4.jpg", alt: "Каспийское море" },
	{ src: "src/assets/gallery5.jpg", alt: "Старый город Дербент" },
	{ src: "src/assets/gallery6.jpg", alt: "Бархан Сарыкум" }
];

const Gallery = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxImage, setLightboxImage] = useState("");
	
	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};
	
	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};
	
	// Автопрокрутка каждые 3 секунды
	useEffect(() => {
		const interval = setInterval(nextSlide, 4000);
		return () => clearInterval(interval);
	}, []);
	
	// Открытие полноэкранного просмотра
	const openLightbox = (src) => {
		setLightboxImage(src);
		setLightboxOpen(true);
	};
	
	return (
		<section className="gallery">
			<h2>Галерея</h2>
			<div className="slider-container">
				<div
					className="slider"
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{images.map((image, index) => (
						<div className="image" key={index} onClick={() => openLightbox(image.src)}>
							<img src={image.src} alt={image.alt} />
						</div>
					))}
				</div>
			</div>
			<div className="controls">
				<button onClick={prevSlide}>❮</button>
				<button onClick={nextSlide}>❯</button>
			</div>
			
			{/* Lightbox (Просмотр фото в увеличенном виде) */}
			{lightboxOpen && (
				<div className="lightbox" onClick={() => setLightboxOpen(false)}>
					<img src={lightboxImage} alt="Просмотр фото" />
					<span className="close">&times;</span>
				</div>
			)}
		</section>
	);
};

export default Gallery;
