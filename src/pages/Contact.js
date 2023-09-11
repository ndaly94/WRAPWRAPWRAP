import { useState } from 'react';

export default function Contact(props) {
	return(
		<div className="ContactPage">
			<center>
			<h1>This is the {props.page} page</h1>
			<div>
				<p>For any questions please contact Nick @ NDaly94@gmail.com</p>
			</div>			
			</center>
		</div>
	) 
}
