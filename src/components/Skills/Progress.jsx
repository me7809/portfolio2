import React from 'react';

const Progress = ({ name, to }) => {
	return (
		<div className='progress'>
			<div className='d_flex s_flex'>
				<span>{name}</span>
				<span>{to}</span>
			</div>
			<div className="bar">
				<span style={{ width: `${to}` }}></span>
			</div>
		</div>
	);
}

export default Progress;
