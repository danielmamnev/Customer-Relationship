import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Customers from './Customers';
import Button from 'react-bootstrap/Button';

export class Main extends Component {
	render() {
		return (
			<div>
				<Jumbotron>
					<div className="container">
						<div style={{ display: 'flex' }}>
							<Button variant="success" style={{ marginRight: 'auto' }}>
								Create
							</Button>
						</div>
						<Customers />
					</div>
				</Jumbotron>
			</div>
		);
	}
}

export default Main;
