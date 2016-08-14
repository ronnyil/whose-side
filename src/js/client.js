import React from "react";
import ReactDOM from "react-dom"

class Hello extends React.Component {
	render() {
		return <p>Hello {this.props.Name}!</p>;
	}
}

ReactDOM.render(
	<Hello Name="Raanan"/>,
	document.getElementById("app")	
)