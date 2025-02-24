import React from 'react'
import PropTypes from "prop-types";

const Carousel = ({images, currentIndex,nextImage,prevImage, setCurrentIndex }) => {

	return (
		<div className={`relative m-5 max-w-4xl mx-auto`}>
			<div className="relative overflow-hidden rounded-lg">
				<img
					src={images[currentIndex]}
					alt={'carousel_img'}
					className={`w-full h-64 object-cover transition-all duration-500`}
				/>
			</div>

			<div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
				{/* Prev Button */}
				<button
					onClick={prevImage}
					className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
				>
					&#60;
				</button>

				{/* Next Button */}
				<button
					onClick={nextImage}
					className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
				>
					&#62;
				</button>
			</div>

			<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{images.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 rounded-full ${
							currentIndex === index ? 'bg-white' : 'bg-gray-500'
						}`}
						onClick={() => setCurrentIndex(index)}
					/>
				))}
			</div>


		</div>
	)
}

Carousel.propTypes = {
	images: PropTypes.array.isRequired,
	currentIndex: PropTypes.number.isRequired,
	prevImage: PropTypes.number.isRequired,
	nextImage: PropTypes.number.isRequired,
	setCurrentIndex: PropTypes.func.isRequired,
}

export default Carousel
