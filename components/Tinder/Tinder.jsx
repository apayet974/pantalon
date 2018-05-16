import React from 'react';
import {Image , Panel, Glyphicon, Label,ListGroupItem, ListGroup,FormControl, Row, Col, FormGroup, ControlLabel} from 'react-bootstrap';


export default class Tinder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {cv : props.cv};

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			<h3>{this.state.cv.title}</h3>
			{ this.state.cv.coordinates && <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Coordonées
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <Glyphicon glyph="mail"/> {this.state.cv.coordinates.mail}<br/>
              <Glyphicon glyph="phone"/> {this.state.cv.coordinates.tel}<br/>

            </Panel.Body>
          </Panel.Collapse>
        </Panel>
   			 }
   			 { this.state.cv.diplomas && <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Diplomes
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
            <ListGroup>
              {this.state.cv.diplomas.map(function(diploma, index){
		                return <ListGroupItem key={index}><b>{diploma.title}</b>,<i>{diploma.school}</i>, {diploma.localty} 
		                <div className="pull-right">{diploma.year}</div></ListGroupItem>;
		              })}
              </ListGroup>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
   			 }
   			 { this.state.cv.workExperience && <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Expérience professionelle
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
            <ListGroup>
              {this.state.cv.workExperience.map(function(work, index){
		                return <ListGroupItem key={index}><b>{work.title}</b>,<i>{work.company}</i>, {work.localty} 
		                <div className="pull-right">{work.yearStart} - { work.yearEnd ? work.yearEnd : 'Aujourdhui'}</div><br/>
		                <p>{work.description}</p></ListGroupItem>;
		              })}
              </ListGroup>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
   			 }
   			 { this.state.cv.skills && <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Compétences professionelles
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
            <ListGroup>
              {this.state.cv.skills.map(function(domain, index){
		                return <ListGroupItem key={index}><b>{domain.type}</b><p>
		                	{domain.values.map(function(value, index){
		                		return <span><Label key={index} bsStyle="info">{value}</Label> {' '}</span>;
		                	})}
		                </p></ListGroupItem>;
		              })}
              </ListGroup>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
   			 }
   			 { this.state.cv.languages && <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Langues
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
            <Row>
              {this.state.cv.languages.map(function(value, index){
		                return <Col sm={3} key={index}>
		                <Panel>
		                <Panel.Body>
		                	<Image src={`https://raw.githubusercontent.com/hjnilsson/country-flags/master/png100px/${value.toLowerCase()}.png`} />
		                </Panel.Body>
		                </Panel>
		                </Col>;
		              })}
              </Row>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
   			 }
   			 { this.state.cv.various && <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Divers
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
            <Row>
              {this.state.cv.various.map(function(value, index){
		                return <ListGroupItem key={index}><p>{value}</p></ListGroupItem>;
		              })}
              </Row>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
   			 }
   			 <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Commentaires</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" value={this.state.cv.comments} />
    </FormGroup>
			  
			</div>
			
		);
	} 
}

