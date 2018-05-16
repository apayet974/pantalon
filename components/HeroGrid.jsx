import React from 'react';
import {Row , Col} from 'react-bootstrap';
import SearchBar from './SearchBar';
import HeroCard from './HeroCard';


export default class HeroGrid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {heroes : []};

	}

	getHeroes(data) {
		console.log('got', data);
		this.setState({heroes : []});

		this.setState({heroes : data.results});
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
     <SearchBar getHeroes={this.getHeroes.bind(this)}/>
		<Row>
			{this.state.heroes && this.state.heroes.map(function(hero, index){
		                return <Col sm={3} key={ index }>
		                <HeroCard hero={hero} />
		                </Col>;
		              })}
		</Row>
		</div>
		);
	} 
}

