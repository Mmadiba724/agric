import React, {useEffect, useRef} from 'react'
import PropTypes from "prop-types";

const Carousel = ({ data }) => {

	const carouselRef = useRef(null);

	useEffect(() => {
		const scrollCarousel = () => {
			if (!carouselRef.current || data.length === 0) return;

			const scrollCarousel = () => {}
				if(carouselRef.current) {
					carouselRef.current.scrollBy({ left: 1, behavior: "smooth" });

					if (carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
					carouselRef.current.scrollWidth){
						carouselRef.current.scrollLeft = 0;
					}
				}
		};

		const interval = setInterval(scrollCarousel, 40);
		return () => clearInterval(interval);
	},[data]);



	return (
		<div className="carousel carousel-center  rounded-box flex items-center
		h-[300px] space-x-1 p-2 w-[70%] overflow-hidden ">

			<div ref={carouselRef} className={`flex gap-2 overflow-x-scroll scroll-smooth 
			scrollbar-hide p-4 `} style={{ scrollBehavior: 'smooth' }}>
				{[...data, ...data].map((item) => (
					<div key={item.id} className="carousel-item w-[180px] shadow-xl items-center
					p-2 rounded-xl flex flex-col gap-4 ">
						<img
							src={item.img}
							className="rounded-box h-44 w-44"
							alt={item.title}
						/>
						<div className={`text-black`}>
							<h2 className={`font-bold`}>{item.title}</h2>
							<p className={`text-sm`}>{item.description}</p>
						</div>
					</div>
				))}
			</div>

	</div>
	)
}

Carousel.propTypes = {
	data: PropTypes.array.isRequired,
}

export default Carousel
