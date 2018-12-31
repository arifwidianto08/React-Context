import React, { Component } from 'react';
import { specificIdUrl } from '../../config/api';
import axios from 'axios';

export const FirstContext = React.createContext();

class FirstProvider extends Component {
	state = {
		firtsname: 'Arif',
		lastname: 'Widianto',
		age: 16,
		number: 1,
		data: [],
		loading: true,
		interval: null
	};

	async getDataById() {
		const { number } = this.state;
		try {
			const resolvers = await axios.get(specificIdUrl(`${number}`));
			this.setState({
				data: resolvers.data,
				loading: false
			});
		} catch (e) {
			return console.log(e);
		}
	}

	addNumber = () => {
		if (this.state.number > 9) {
			this.setState({
				number: 1
			});
		}
		this.setState({
			number: this.state.number + 1
		});
	};

	componentDidMount() {
		let interval = setInterval(this.addNumber, 2500);
		this.setState({
			interval: interval
		});
		this.getDataById();
	}

	componentWillUnmount() {
		clearInterval(this.state.interval);
		console.log(this.state.interval);
	}

	componentDidUpdate() {
		this.getDataById();
	}

	render() {
		return (
			<FirstContext.Provider
				value={{
					state: this.state,
					addAge: () => {
						this.setState({
							age: this.state.age + 1
						});
					}
				}}
			>
				{this.props.children}
			</FirstContext.Provider>
		);
	}
}

export default FirstProvider;
