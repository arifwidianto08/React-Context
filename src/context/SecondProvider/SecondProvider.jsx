import React, { Component, createContext } from 'react';
import axios from 'axios';
import { publicUrl } from '../../config/api';
export const SecondContext = createContext();

export default class SecondProvider extends Component {
	state = {
		name: '',
		number: 0,
		loading: true,
		data: []
	};

	isLoaded = () => {
		this.setState({
			loading: false
		});
	};

	async getData() {
		try {
			const resolvers = await axios.get(publicUrl);
			this.setState({
				data: resolvers.data
			});
			this.isLoaded();
		} catch (e) {
			return console.log(e);
		}
	}

	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<SecondContext.Provider
				value={{
					state: this.state,
					addNumber: () => {
						this.setState({
							number: this.state.number + 1
						});
					},
					decremNumber: () => this.setState({ number: this.state.number - 1 })
				}}
			>
				{this.props.children}
			</SecondContext.Provider>
		);
	}
}
