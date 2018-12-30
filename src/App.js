import React, { Component } from 'react';
import FirstContainer from './containers/FirstContainer';
import SecondContainer from './containers/SecondContainer';
import FirstProvider from './context/FirstProvider/FirstProvider';
import SecondProvider from './context/SecondProvider/SecondProvider';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<FirstProvider>
					<FirstContainer />
				</FirstProvider>
				<SecondProvider>
					<SecondContainer />
				</SecondProvider>
			</div>
		);
	}
}

export default App;
