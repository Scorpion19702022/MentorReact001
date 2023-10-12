import React from 'react'

const Buttons = props => {
	return (
		<div>
			<button onClick={() => props.clickNameOne('Mariusz')}>Kliknij i pokaż imię</button>
			<button onClick={() => props.clickNameOne('Jacek')}>Kliknij i pokaż imię</button>
		</div>
	)
}

export default Buttons
