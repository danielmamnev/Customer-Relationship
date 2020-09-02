import React, { Component } from 'react';

export class Header extends Component {
	render() {
		const link = 'http://google.com';
		return (
			<div>
				<nav className="navbar navbar-light bg-light">
					<a href={link}>
						{' '}
						<strong>CRM</strong>
					</a>
				</nav>
			</div>
		);
	}
}

export default Header;
