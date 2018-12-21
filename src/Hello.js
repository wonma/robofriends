import React, { Component } from 'react';
import './Hello.css'



class Hello extends Component {
	render(){
		return (
			<div>
				<h1> Designer & Developer Wonmi Kwon {this.props.dog} </h1>
				<p> hahahaha {this.props.introduce} </p>
			</div>
		)

	}
}


// [Tip] When I don't want to implement 'wrapper' for returing elements
//
// class Hello extends Component {
// 	render(){
// 		return (
// 			[<h1 key="0"> Designer & Developer Wonmi Kwon </h1>,
// 			<p key="1"> hahahaha </p>]
// 		)

// 	}
// }

// [General Function] (not Component)
//
// const Hello = (props) => {
// 		return (
// 			<div>
// 				<h1> Designer & Developer Wonmi Kwon {props.dog} </h1>
// 				<p> hahahaha {props.introduce} </p>
// 			</div>
// 		)
// }

// [General Function] (not Component)
//
// const Hello = ({dog, introduce}) => {
// 		return (
// 			<div>
// 				<h1> Designer & Developer Wonmi Kwon {dog} </h1>
// 				<p> hahahaha {introduce} </p>
// 			</div>
// 		)
// }

export default Hello;