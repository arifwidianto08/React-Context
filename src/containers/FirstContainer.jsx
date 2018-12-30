import React, { Component } from 'react';
import { FirstContext } from '../context/FirstProvider/FirstProvider';
export default class FirstContainer extends Component {
	render() {
		return (
			<div>
				Yooo I am the First Container
				<FirstContext.Consumer>
					{context => (
						<div>
							<h2>{context.state.age}</h2>
							<br />
							<button onClick={context.addAge}>Add Number</button>
						</div>
					)}
				</FirstContext.Consumer>
			</div>
		);
	}
}
