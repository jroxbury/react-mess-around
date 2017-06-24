import React from 'react';

const Button = ({name, handleClick, styleName}) => {
	return (
		<div className={`button ${styleName}`} onClick={() => handleClick()}>{name}</div>
	);
};

export default Button;