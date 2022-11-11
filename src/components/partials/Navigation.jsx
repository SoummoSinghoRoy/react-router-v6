import React from 'react';
import {Link, NavLink } from 'react-router-dom'

const Navigation = () => {
	let activeStyle = {
		color: '#0D6EFD',
    	textDecoration: "underline"
  	};

  	let nonActiveStyle = {
  		color: '#222',
  		textDecoration: 'none'
  	}

  	// let activeClassName = "underline";

	return(
		<div className="wrapper">
		{/*if you want general style without framework classname then follow the below syntax, e can use external css classname here*/}
			<nav>
				<ul className="nav justify-content-center">
				  <li className="nav-item">
				  	<NavLink
				  		to="/"
				  		style = {({isActive}) => {
				  			return isActive ? activeStyle : nonActiveStyle
				  		}}
				  	>
				  		Home
				  	</NavLink>
				  	{/*<Link to="/" className="nav-link">Home</Link>*/}
				  </li>
				  <li className="nav-item">
			  		<NavLink
			  			to="/about"
			  			style = {({isActive}) => isActive ? activeStyle : nonActiveStyle }
			  		>
			  		About
			  		</NavLink>
			    	{/*<Link to="/about" className="nav-link">About</Link>*/}
				  </li>
				  <li className="nav-item">
					<NavLink
						to="/contact"
						style = {({isActive}) => isActive ? activeStyle : nonActiveStyle }
					>
			  		Contact
				 	</NavLink>
			    	{/*<Link to="/contact" className="nav-link">Contact</Link>*/}
				  </li>

				  {/*if you want classbase style insted general style then follow the below syntax, we can use css frameworks class also.*/}
				  <li className="nav-item">
					<NavLink
						to="/products"
						className = {({isActive}) => isActive ? activeStyle : nonActiveStyle }
					>
			  		Products
				 	</NavLink>
			    	{/*<Link to="/contact" className="nav-link">Contact</Link>*/}
				  </li>
				</ul>
			</nav>

			{/*if you want classbase style insted general style then follow the below syntax, we can use css frameworks class also.*/}

			<nav>
				<ul className="nav justify-content-center">
				  <li className="nav-item">
				  	<NavLink
				  		to="/"
				  		className = {({isActive}) => isActive ? 'nav-link active fw-bold' : 'nav-link'}
				  	>
				  		Home
				  	</NavLink>
				  </li>
				  <li className="nav-item">
			  		<NavLink
			  			to="/about"
			  			className = {({isActive}) => isActive ? 'nav-link active fw-bold' : 'nav-link'}
			  		>
			  		About
			  		</NavLink>
				  </li>
				  <li className="nav-item">
					<NavLink
						to="/contact"
						className = {({isActive}) => isActive ? 'nav-link active fw-bold' : 'nav-link'}
					>
			  		Contact
				 	</NavLink>
				  </li>

				  <li className="nav-item">
					<NavLink
						to="/products"
						className = {({isActive}) => isActive ? 'nav-link active fw-bold' : 'nav-link'}
					>
			  		Products
				 	</NavLink>
				  </li>
				</ul>
			</nav>
		</div>
	)
}

export default Navigation;