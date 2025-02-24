import React from 'react'
import card_img from '../assets/Fresh-Producejpg.jpg'

const Card = () => {
	return (
		<div className={'flex gap-3'}>
			<div className="">
				<p>title</p>
				<img src={card_img} alt={'card_img'} className={`w-50 rounded-xl`} />
			</div>

			<div className="">
				<p>title</p>
				<img src={card_img} alt={'card_img'} className={`w-50 rounded-xl`} />
			</div>

			<div className="">
				<p>title</p>
				<img src={card_img} alt={'card_img'} className={`w-50 rounded-xl`} />
			</div>
		</div>
	)
}
export default Card
