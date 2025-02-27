import React from 'react'
import PropTypes from "prop-types";

const Carousel = ({images, currentIndex,nextImage,prevImage, setCurrentIndex }) => {

	return (
		<div className={`relative m-5 max-w-4xl mx-auto`}>
			<div className="relative overflow-hidden rounded-lg flex justify-center gap-3">
				<div className={`w-60 p-2 rounded-xl border`}>
					<img
						src={'https://picsum.photos/id/243/200/300'}
						alt={'carousel_img'}
						className={`w-full h-40 object-cover transition-all duration-500 rounded-xl`}
					/>
					<div className={``}>
						<h2>Title</h2>
						<p>Description</p>
					</div>
				</div>

				<div className={`w-60 p-2 rounded-xl border`}>
					<img
						src={'https://picsum.photos/id/244/200/300'}
						alt={'carousel_img'}
						className={`w-full h-40 object-cover transition-all duration-500 rounded-xl`}
					/>
					<div className={``}>
						<h2>Title</h2>
						<p>Description</p>
					</div>
				</div>

				<div className={`w-60 p-2 rounded-xl border`}>
					<img
						src={'https://picsum.photos/id/241/200/300'}
						alt={'carousel_img'}
						className={`w-full h-40 object-cover transition-all duration-500 rounded-xl`}
					/>
					<div className={``}>
						<h2>Title</h2>
						<p>Description</p>
					</div>
				</div>

				<div className={`w-60 p-2 rounded-xl border`}>
					<img
						src={'https://picsum.photos/id/242/200/300'}
						alt={'carousel_img'}
						className={`w-full h-40 object-cover transition-all duration-500 rounded-xl`}
					/>
					<div className={``}>
						<h2>Title</h2>
						<p>Description</p>
					</div>
				</div>


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
