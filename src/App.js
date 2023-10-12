import React, { useState } from 'react'
import './App.css'

import Buttons from './components/Buttons'
import Results from './components/Results'

const App = () => {
	const [name, setName] = useState('')

	const firstPerson = person => {
		setName(person)
	}

	return (
		<div className='App'>
			<Buttons clickNameOne={firstPerson} />
			<Results name={name} />
		</div>
	)
}

export default App
