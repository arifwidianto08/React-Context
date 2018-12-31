import React, { Component } from 'react';
import { SecondContext } from '../context/SecondProvider/SecondProvider';

export default class SecondContainer extends Component {
	render() {
		let valueData = this.context.state.data;
		return (
			<div>
				<div>
					<p style={{ textAlign: 'center' }}>Systematic</p>
				</div>
				{valueData &&
					valueData.map((data, index) => (
						<div
							style={{
								paddingLeft: '15px',
								paddingRight: '15px',
								paddingBottom: '5px'
							}}
							key={index}
						>
							<ul className="list-group">
								<li className="list-group-item list-group-item-secondary">
									{data.name}
								</li>
							</ul>
						</div>
					))}
			</div>
		);
	}
}
SecondContainer.contextType = SecondContext;
