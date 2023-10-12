import React from 'react'

const Results = props => {
	return <div>{props.name === '' ? <h1>Nie znam cię</h1> : <h1>Mam na imię: {props.name}</h1>}</div>
}

export default Results
