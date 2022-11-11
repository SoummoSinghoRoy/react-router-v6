import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
	let {productId} = useParams()
	
	return(
		<div className="wrapper">
			<h2>Single Product Page - {productId} </h2>
		</div>
	)
}

export default SingleProduct;