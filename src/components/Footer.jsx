import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
	return (
		<div className={'flex flex-col justify-center items-center '}>
			<div className="flex gap-2">
				<FacebookIcon />
				<XIcon />
				<YouTubeIcon />
			</div>
			<i> &copy;2025</i>

		</div>
	)
}
export default Footer
