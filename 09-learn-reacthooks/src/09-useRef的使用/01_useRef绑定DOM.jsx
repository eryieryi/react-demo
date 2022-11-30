import React, { memo, useRef } from 'react'

const App = memo(() => {
	const titleRef = useRef()
	const inputRef = useRef()

	function showTitleDOM() {
		console.log(titleRef.current)
		inputRef.current.focus()
	}

	return (
		<div>
			<h2 ref={titleRef}>Hello World</h2>
			<input type="text" ref={inputRef} />
			<button onClick={showTitleDOM}>查看 title 的 dom</button>
		</div>
	)
})

export default App