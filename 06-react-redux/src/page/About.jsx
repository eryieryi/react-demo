import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { addAction, subAction } from '../store/actionCreators';

export class About extends PureComponent {
	render() {
		const { counter } = this.props
		return (
			<div>
				<h2>About Page: {counter}</h2>
				<button onClick={e => this.calcNumber(6, true)}>+6</button>
				<button onClick={e => this.calcNumber(8, false)}>-8</button>
			</div>
		)
	}

	calcNumber(num, isAdd) {
		if (isAdd) {
			console.log('加', num)
			this.props.addNumber(num)
		} else {
			console.log('减', num)
			this.props.subNumber(num)
		}
	}
}

const mapStateToProps = state => ({
	counter: state.counter
})
const mapDispatchToProps = dispatch => ({
	addNumber(num) {
		dispatch(addAction(num))
	},
	subNumber(num) {
		dispatch(subAction(num))
	}
})

// connect 返回值是一个高阶组件
export default connect(mapStateToProps, mapDispatchToProps)(About)