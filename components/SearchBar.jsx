import React from 'react';
import { FormControl , Button} from 'react-bootstrap';
import MarvelAPI from 'services/MarvelAPI';


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
    this.MarvelAPI = new MarvelAPI();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  async searchHeroes() {
  	const heroes = await MarvelAPI.getHeroes(this.state.search);
  	console.log(heroes);
  	if (heroes) {
  		  this.props.getHeroes(heroes);
  		console.log(this.state.search);

  	}

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search a Hero:
          <FormControl
            type="text"
            value={this.state.search}
            placeholder="Spiderman, Thor, Hulk..."
            onChange={this.handleChange}
          />
        </label>
        <Button onClick={this.searchHeroes.bind(this)} value="Search" bsStyle="primary" >Search</Button>
      </form>
    );
  }
}

