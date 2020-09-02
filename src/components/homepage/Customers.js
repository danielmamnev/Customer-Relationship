import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class Customers extends Component {
	render() {
		return (
			<div>
				<Card>
					<Card.Header as="h5">Example Customer 1</Card.Header>
					<Card.Body>
						<Card.Title>Special title treatment</Card.Title>
						<Card.Text>
							With supporting text below as a natural lead-in to additional
							content.
						</Card.Text>
						<Button variant="primary">View</Button>
						<Button variant="primary">Edit</Button>
						<Button variant="primary">Delete</Button>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default Customers;
