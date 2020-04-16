import React, { Component } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {forEach} from "react-bootstrap/utils/ElementChildren";

class StayHome extends Component {
  constructor() {
  	super();
	  this.Board = this.Board.bind(this);
	  this.addAI = this.addAI.bind(this);
	  this.addPlayer = this.addPlayer.bind(this);
	  this.generateBoard = this.generateBoard.bind(this);

    this.state = {
    		
		board : <div></div>,
    	numPlayers : 0,
    	numAI : 0,
    	players : {}
    };
    
  };
	generateBoard() {
	  //create the 'board' a 2d array
	  var board = {};
	  for(var i=0; i<484; i++){
			  board[i] = 0;
	  }
	  //populate the board 
	  var total = 1;
	  var activeIndex = 242;
	  var direction;
	  board[activeIndex] = 1;
	  while(total<23){
		  direction = Math.floor(Math.random()*3);
		  if(direction === 0){
			  //check if we exceed bounds of the board 
			  if(!activeIndex < 22){
				  //move the pointer
				  activeIndex = activeIndex-22;
				  //check if already a tile
				  if(board[activeIndex]===0){
					  board[activeIndex] = 1;
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
				if(board[activeIndex]===0){
				  board[activeIndex] = 1;
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
				  if(board[activeIndex]===0){
					  board[activeIndex] = 1;
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
				  if(board[activeIndex]===0){
					  board[activeIndex] = 1;
					  total+=1;
				  }
			  }
		  }
	  }
  };

  Board(state){
		var totalLength = 484;
		var newBoard;
	  	if(this.state.board[i] === 0){
			newBoard = <Col className="emptyTile"> </Col>;
	  	}
	  	else{
	  		var tileClasses = "occupiedTile";

			newBoard = <Col className="occupiedTile"> </Col>;
		}
		var newBoard;
		for(var i=1; i < 484; i++){
			if(this.state.board[i] === 0){
				newBoard = newBoard + <Col className="emptyTile"> </Col>
			}
			else{
				newBoard = newBoard + <Col className="occupiedTile"> </Col>;
			}
		}
		return (
			newBoard
		);
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
	return (
		<div className="StayHomeContainer">
			<div className="StayHome">
				<Container>
					<Row>
						<Col className="boardArea">
							<Board state={this.state}></Board>
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