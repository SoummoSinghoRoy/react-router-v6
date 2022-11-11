import React from 'react';
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({children, user}) => {
	let foundedUserData = {
		name: 'john',
      	pass: '123456'
	};

	let matchUserName = user.userName  === foundedUserData.name
	let matchUserPass = user.pass  === foundedUserData.pass

	if(!matchUserName && matchUserPass ) {
		return <Navigate to="/" />;
	}
	return children;
}

export default ProtectedRoute;