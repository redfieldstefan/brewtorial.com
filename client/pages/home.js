import React, { Component } from "react";
import Nav from "../components/nav";
import Helmet from "react-helmet";
import CreateBrewSteps from "../components/create-brew-steps";

class HomePage extends Component {

	render() {
		return (
			<div>
				<Helmet>
					<link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400" rel="stylesheet" />
				</Helmet>
				<Nav />
			</div>
		);
	}
};

export default HomePage;