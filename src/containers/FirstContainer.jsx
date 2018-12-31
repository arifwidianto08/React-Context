import React, { Component } from 'react';
import { FirstContext } from '../context/FirstProvider/FirstProvider';

export default class FirstContainer extends Component {
	render() {
		let valueData = this.context.state.data;
		let loading = this.context.state.loading;
		if (loading) {
			return <div style={{ textAlign: 'center' }}>Loading...</div>;
		}
		return (
			<div>
				<p style={{ textAlign: 'center' }}>Random , ID : {valueData.id}</p>
				<p style={{ textAlign: 'center' }}>
					Context Number : {this.context.state.number}
				</p>

				<div
					style={{
						paddingLeft: '15px',
						paddingRight: '15px',
						paddingBottom: '5px'
					}}
				>
					<ul className="list-group">
						<li className="list-group-item list-group-item-success">
							{valueData.name}
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
FirstContainer.contextType = FirstContext;
