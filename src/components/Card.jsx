import React from 'react'
import card_img from '../assets/Fresh-Producejpg.jpg'

const trendingData = [
	{
		id: 1,
		img: card_img,
		title: "Title",
		desc: 'Description'
	},
	{
		id: 2,
		img: card_img,
		title: "Title",
		desc: 'Description'
	},
	{
		id: 3,
		img: card_img,
		title: "Title",
		desc: 'Description'
	},
]

const Card = () => {
	return (
		<div className={'flex gap-3'}>
			{trendingData.map((item) => (
					<div key={item.id}  className=" border p-2 rounded-xl border-gray-300 shadow-xl">
						<img src={item.img} alt={item.title} className={`w-50 rounded-xl`} />
						<div className={''}>
							<h3 className={'text-xl font-bold'}>{item.title}</h3>
							<p>
								{item.desc}
							</p>
						</div>
					</div>

				))
			};
		</div>
	)
}
export default Card
