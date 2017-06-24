import React from 'react';
import ReactDOM from 'react-dom';
import ButtonContainer from './components/ButtonContainer';
import Button from './components/Button';

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			count: 0
		};
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() {
		this.setState({count: this.state.count += 1});
	}
	decrement() {
		this.setState({count: this.state.count -= 1});
	}

	render() {
		return (
			<div>
				<p className="counter">Current Count: {this.state.count}</p>
				<ButtonContainer>
					<Button styleName={'button--down'} handleClick={this.decrement} name={'Decrement: -1'} />
					<Button styleName={'button--up'} handleClick={this.increment} name={'Increment: +1'} />
				</ButtonContainer>
			</div>
		);
	}
};

ReactDOM.render(<App />, document.getElementById('app'));