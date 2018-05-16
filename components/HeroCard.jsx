import React from 'react';
import {Image , Panel,  ButtonGroup , Button , Modal, Glyphicon, Col, Row} from 'react-bootstrap';
import Tinder from './Tinder/Tinder';


export default class HeroCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {hero : props.hero, show : false};

	}


	componentDidMount() {

	}

	showCv() {
		this.setState({show: true});
	}

	handleHide() {
		this.setState({show: false});

	}

	handleRefuse() {

	}

	render() {
		return (
			<div>
			 <Panel bsStyle="primary" onClick={this.showCv.bind(this)}>
    <Panel.Heading>{this.state.hero.name}</Panel.Heading>
    <Panel.Body>
    </Panel.Body>
  </Panel>
  <Modal
          show={this.state.show}
          bsSize="lg"
          onHide={this.handleHide.bind(this)}

        >
          <Modal.Header closeButton>
   			<h2>{this.state.hero.name}</h2>
          </Modal.Header>
          <Modal.Body>
            <Tinder cv={this.state.hero} />
          
                      
          </Modal.Body>
          <Modal.Footer>
<ButtonGroup justified>
  <Button bsStyle="danger" onClick={this.handleRefuse.bind(this)} href="#"><Glyphicon glyph="remove" /></Button>
  <Button bsStyle="warning" href="#"><Glyphicon glyph="time" /></Button>
  <Button bsStyle="success" href="#"><Glyphicon glyph="ok" /></Button>


</ButtonGroup>
          </Modal.Footer>
        </Modal>
  
			  
			</div>
			
		);
	} 
}

