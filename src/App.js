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
				<h4 style={{ textAlign: 'center' }}>Made With React Context API</h4>
				<FirstProvider>
					<FirstContainer />
				</FirstProvider>
				<br />
				<SecondProvider>
					<SecondContainer />
				</SecondProvider>
			</div>
		);
	}
}

export default App;
