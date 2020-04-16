import React, { Component } from 'react';
import '../App.css';
import Board from './Board.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {forEach} from "react-bootstrap/utils/ElementChildren";

class StayHome extends Component {
  constructor(props) {
  	super(props);
    this.state = {
    		
		board : <div></div>,
    	numPlayers : 0,
    	numAI : 0,
    	players : {}
    };

	  this.addAI = this.addAI.bind(this);
	  this.addPlayer = this.addPlayer.bind(this);
	  this.generateBoard = this.generateBoard.bind(this);
    
  };
	generateBoard() {
	  //create the 'board' a 2d array
	  var newBoard = {};
	  for(var i=0; i<484; i++){
		  newBoard[i] = 0;
	  }
	  //populate the board 
	  var total = 1;
	  var activeIndex = 242;
	  var direction;
		newBoard[activeIndex] = 1;
	  while(total<23){
		  direction = Math.floor(Math.random()*3);
		  if(direction === 0){
			  //check if we exceed bounds of the board 
			  if(!activeIndex < 22){
				  //move the pointer
				  activeIndex = activeIndex-22;
				  //check if already a tile
				  if(newBoard[activeIndex]===0){
					  newBoard[activeIndex] = 1;
					  total+=1;
				  }
			  }
		  }
		  else if(direction === 1){
			  //check if we exceed bounds of the board 
			  if(!activeIndex % 22 === 21){
				//move the pointer
				activeIndex = activeIndex-22;
				//check if already a tile
				if(newBoard[activeIndex]===0){
					newBoard[activeIndex] = 1;
				  total+=1;
				}
			  }
		  }
		  else if(direction === 2){
			  //check if we exceed bounds of the board 
			  if(!activeIndex > 462){
				  //move the pointer
				  activeIndex = activeIndex+22;
				  //check if already a tile
				  if(newBoard[activeIndex]===0){
					  newBoard[activeIndex] = 1;
					  total+=1;
				  }
			  }
		  }
		  else if(direction === 3){
			  //check if we exceed bounds of the board 
			  if(!activeIndex & 22 === 0){
				  //move the pointer
				  activeIndex = activeIndex-1;
				  //check if already a tile
				  if(newBoard[activeIndex]===0){
					  newBoard[activeIndex] = 1;
					  total+=1;
				  }
			  }
		  }
	  }
		this.setState({board: newBoard});
  };
  
  //utility functions for setting up player settings 
  addPlayer(){
	  var newNumPlayers = this.state.numPlayers + 1;
	  this.setState({numPlayers: newNumPlayers});
  };
  addAI(){
  		var newNumAI = this.state.numAI + 1;
	  	this.setState({numAI: newNumAI});
  };
//  handlePlayerNameChange(i, event){
//	  this.setState({players["player"+i].name: event.target.value});
//  };
//  handlePlayerColorChange(i, event){
//	  this.setState({players["player"+i].color: event.target.value});
//  };

  render() {
  	let board = this.state.board;

	return (
		<div className="StayHomeContainer">
			<div className="StayHome">
				<Container>
					<Row>
						<Col className="boardArea">
							<Board board={board}></Board>
						</Col>
						<Col>
							<div className="GameSettings">
								<Container>
									<Row>
										<Col>
											<button onClick={this.addPlayer}>Add Player</button>
										</Col>
										<Col>
											<button onClick={this.addAI}>Add AI</button>
										</Col>
									</Row>
									<Row>
										<Col>
											<p>number of Players: {this.state.numPlayers}</p>
											<p>number of AI: {this.state.numAI}</p>
										</Col>
									</Row>
									<Row>
										<Col>
											<button onClick={this.generateBoard}>GenerateBoard</button>
										</Col>
									</Row>
								</Container>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
  }
}

export default StayHome;