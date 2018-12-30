import React, { Component } from 'react';

export const FirstContext = React.createContext();

class FirstProvider extends Component {
	state = {
		firtsname: 'Arif',
		lastname: 'Widianto',
		age: 16
	};

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
