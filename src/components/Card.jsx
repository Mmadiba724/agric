import React from 'react'
import card_img from '../assets/Fresh-Producejpg.jpg'

const Card = () => {
	return (
		<div className={'flex gap-3 border p-2 rounded-xl border-gray-300 shadow-xl'}>
			<div className="">
				<img src={card_img} alt={'card_img'} className={`w-50 rounded-xl`} />
				<div className={''}>
					<h3 className={'text-xl font-bold'}>Title</h3>
					<p>
						Description
					</p>
				</div>

			</div>
		</div>
	)
}
export default Card
