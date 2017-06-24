import React from 'react';

const ButtonContainer = (props) => {
	return (
		<div className="button-wrapper">
			{props.children}  
		</div>
	);
}

export default ButtonContainer;