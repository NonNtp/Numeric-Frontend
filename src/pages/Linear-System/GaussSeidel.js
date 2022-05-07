import React, { useRef, useState } from 'react'

import GaussSeidelMethod from '../../modules/Linear/GaussSeidel'
import './matrix.css'

const GaussSeidel = () => {
	const [result, setResult] = useState('')
	const [showGraph, setShowGraph] = useState(false)

	const a11InputRef = useRef()
	const a12InputRef = useRef()
	const a21InputRef = useRef()
	const a22InputRef = useRef()
	const a23InputRef = useRef()
	const a32InputRef = useRef()
	const a33InputRef = useRef()
	const a34InputRef = useRef()
	const a43InputRef = useRef()
	const a44InputRef = useRef()

	const b1InputRef = useRef()
	const b2InputRef = useRef()
	const b3InputRef = useRef()
	const b4InputRef = useRef()

	const submitHandler = (event) => {
		event.preventDefault()
		const enteredA11 = a11InputRef.current.value
		const enteredA12 = a12InputRef.current.value
		const enteredA21 = a21InputRef.current.value
		const enteredA22 = a22InputRef.current.value
		const enteredA23 = a23InputRef.current.value
		const enteredA32 = a32InputRef.current.value
		const enteredA33 = a33InputRef.current.value
		const enteredA34 = a34InputRef.current.value
		const enteredA43 = a43InputRef.current.value
		const enteredA44 = a44InputRef.current.value

		const enteredB1 = b1InputRef.current.value
		const enteredB2 = b2InputRef.current.value
		const enteredB3 = b3InputRef.current.value
		const enteredB4 = b4InputRef.current.value

		console.log(
			setResult(
				GaussSeidelMethod(
					enteredB1,
					enteredA12,
					enteredA11,
					enteredB2,
					enteredA21,
					enteredA22,
					enteredA23,
					enteredB3,
					enteredA32,
					enteredA33,
					enteredA34,
					enteredB4,
					enteredA43,
					enteredA44
				)
			)
		)
		setShowGraph(true)
		event.target.reset()
	}

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className='flex-app'>
					<div className='app'>
						<div className='A-value'>
							<input type='text' className='itemA' ref={a11InputRef} />
							<input type='text' className='itemA' ref={a12InputRef} />
							<input type='text' className='itemA' value={0} readOnly />
							<input type='text' className='itemA' value={0} readOnly />
							<br />
							<input type='text' className='itemA' ref={a21InputRef} />
							<input type='text' className='itemA' ref={a22InputRef} />
							<input type='text' className='itemA' ref={a23InputRef} />
							<input type='text' className='itemA' value={0} readOnly />
							<br />
							<input type='text' className='itemA' value={0} readOnly />
							<input type='text' className='itemA' ref={a32InputRef} />
							<input type='text' className='itemA' ref={a33InputRef} />
							<input type='text' className='itemA' ref={a34InputRef} />
							<br />
							<input type='text' className='itemA' value={0} readOnly />
							<input type='text' className='itemA' value={0} readOnly />
							<input type='text' className='itemA' ref={a43InputRef} />
							<input type='text' className='itemA' ref={a44InputRef} />
						</div>
					</div>
					<div className='app'>
						<div className='X-value'>
							<input type='text' className='itemX' placeholder='x1' />
							<input type='text' className='itemX' placeholder='x2' />
							<input type='text' className='itemX' placeholder='x3' />
							<input type='text' className='itemX' placeholder='x4' />
						</div>
					</div>
					<div className='app'>
						<div className='B-value'>
							<input type='text' className='itemB' ref={b1InputRef} />
							<input type='text' className='itemB' ref={b2InputRef} />
							<input type='text' className='itemB' ref={b3InputRef} />
							<input type='text' className='itemB' ref={b4InputRef} />
						</div>
					</div>
				</div>
				<button type='submit' className='button'>
					Submit
				</button>
			</form>

			{showGraph && <div className='app-table'> {result[0]}</div>}
		</div>
	)
}

export default GaussSeidel
