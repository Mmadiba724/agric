import React, {useEffect, useRef} from 'react'
import PropTypes from "prop-types";

const Carousel = ({ data, theme }) => {

	const carouselRef = useRef(null);

	useEffect(() => {
			if (!carouselRef.current || data.length === 0) return;

			const scrollCarousel = () => {
				if(carouselRef.current) {
					carouselRef.current.scrollBy({ left: 1, behavior: "smooth" });

					if (carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
					carouselRef.current.scrollWidth){
						carouselRef.current.scrollLeft = 0;
					}
				}
		};

		const interval = setInterval(scrollCarousel, 60);
		return () => clearInterval(interval);
	},[data]);



	return (
		<div className={`w-full flex justify-center `}>
			<div className=" carousel carousel-center  rounded-box flex items-center
				h-[300px]  p-2 sm:max-w-[90%] md:max-w-[70%] lg:max-w-[60%] overflow-hidden ">

				<div ref={carouselRef} className={`flex gap-4 overflow-x-scroll scroll-smooth 
					scrollbar-hide p-4 `} style={{ scrollBehavior: 'smooth' }}>

					{[...data, ...data].map((item) => (
						<div key={item.id} className={`carousel-item min-w-[150px] sm:min-w-[180px] shadow-xl items-center
						p-2 rounded-xl flex flex-col gap-4 ${theme === 'dark'
							? 'bg-gray-900 '
							: 'text-black'
						}`}>
							<img
								src={item.img}
								className="rounded-box h-44 w-full object-cover"
								alt={item.title}
							/>
							<div className={`${theme === 'dark' ? 'text-red-50' : 'text-black'} `}>
								<h2 className={`font-bold`}>{item.title}</h2>
								<p className={`text-sm`}>{item.description}</p>
							</div>
						</div>
					))}
				</div>

			</div>
		</div>

	)
}

Carousel.propTypes = {
	data: PropTypes.array.isRequired,
	theme: PropTypes.object.isRequired,
}

export default Carousel;
