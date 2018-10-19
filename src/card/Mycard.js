import React from 'react';
class Mycard extends React.Component{
	render(){
		return(
			<div style = {{border :"15px solid red"}}>
			<b>{this.props.name }</b>
			</div>
			);
	}
}
export default Mycard;