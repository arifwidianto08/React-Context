import React, { Component } from 'react';
import { SecondContext } from '../context/SecondProvider/SecondProvider';

export default class SecondContainer extends Component {
	render() {
		let value = this.context.state;
		return (
			<div>
				Yooo I am the Second Container
				<SecondContext.Consumer>
					{context => (
						<div>
							<div>
								<h2>{context.state.number}</h2>
								<span>Using Consumer</span>
								<br />
								<h4>or</h4>
								<h2>{value.number}</h2>
								<span>Using `this.context` a.k.a Class.contextType </span>
								<br />
								<br />
								<br />
								Documentation:
								https://reactjs.org/docs/context.html#updating-context-from-a-nested-component
							</div>
							<br />
							<button onClick={context.addNumber}>Add Number</button>
							<button onClick={context.decremNumber}>Decrem Number</button>
						</div>
					)}
				</SecondContext.Consumer>
				<br />
				<br />
				<br />
				This is the data that fetched using async / await
				{value.data && value.data.map((data, i) => <p key={i}>{data.name}</p>)}
				Copyright JsonPlaceHolders.com
			</div>
		);
	}
}
SecondContainer.contextType = SecondContext;
