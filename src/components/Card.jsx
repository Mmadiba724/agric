import React from 'react'
import card_img from '../assets/Fresh-Producejpg.jpg'
import card_img2 from '../assets/istockphoto.jpg'

const trendingData = [
	{
		id: 1,
		img: card_img,
		title: "Title 1",
		desc: 'Description 1'
	},
	{
		id: 2,
		img: card_img2,
		title: "Title 2",
		desc: 'Description 2'
	},
	{
		id: 3,
		img: card_img,
		title: "Title 3 ",
		desc: 'Description 3'
	},
]

const Card = ({theme}) => {
	return (
		<div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4'}>
			{trendingData.map((item) => (
					<div key={item.id}  className={` border border-info p-2  rounded-xl  shadow-xl m-2
					${theme === 'dark' ? 'bg-gray-900 ' : 'text-black'}
					`}>
						<img src={item.img} alt={item.title} className={`w-full h-30  object-cover rounded-xl `} />
						<div className={''}>
							<h3 className={'text-xl font-bold mt-2 '}>{item.title}</h3>
							<p>
								{item.desc}
							</p>
						</div>
					</div>

				))
			}
		</div>
	)
}
export default Card
