import React from 'react';
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation.jsx'

const Home = () => {
	return(
		<div className="layout">
			<Navigation />
			<Outlet />
		</div>
	)
}

export default Home;