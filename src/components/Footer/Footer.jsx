import React from 'react'
import { Zoom } from 'react-reveal'
import "./Footer.css"

function Footer() {
	return (
		<Zoom>
			<div className="footer d_flex c_flex">
				<p>Created By <span className='main_color'>Moustafa ramdan</span> | &copy; <span>2024 All Right Reserved.</span></p>
			</div>
		</Zoom>
	)
}

export default Footer