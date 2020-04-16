import React, { Component } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class StayHome extends Component {
  constructor() {
  	super();
	  this.addAI = this.addAI.bind(this);

    this.state = {
    		
    	board : {},
    	numPlayers : 0,
    	numAI : 0,
    	players : {
    		player1: {
    			name: '',
    			color: ''
    		},
    		player2: {
    			name: '',
    			color: ''
    		},
    		player3: {
    			name: '',
    			color: ''
    		},
    		player4: {
    			name: '',
    			color: ''
    		},
    		player5: {
    			name: '',
    			color: ''
    		},
    		player6: {
    			name: '',
    			color: ''
    		}
    	}
    };
    
  };
  setPlayers(){
	  
  };
  
  startGame(players, settings){
	  
  };
  
  initializeBoard(numPlayers) {
	  //create the 'board' a 2d array
	  var board = {};
	  for(var i=0; i<22; i++){
		  board[i] = new Array(22);
		  for(var j=0; j<22; j++){
			  board[i][j] = 0;
		  }
	  }
	  //populate the board 
	  var total = 1;
	  var activeRow = 10;
	  var activeCol = 10;
	  var direction;
	  board[activeRow][activeCol] = 1;
	  while(total<23){
		  direction = Math.floor(Math.random()*3);
		  if(direction === 0){
			  //check if we exceed bounds of the board 
			  if(activeRow === 0){
				  direction = Math.floor(Math.random()*3);
			  }
			  else{
				  //move the pointer
				  activeRow = activeRow-1;
				  //check if already a tile
				  if(board[activeRow][activeCol]===0){
					  board[activeRow][activeCol] = 1;
					  total+=1;
				  }
			  }
		  }
		  else if(direction === 1){
			  //check if we exceed bounds of the board 
			  if(activeCol === 21){
				  direction = Math.floor(Math.random()*3);
			  }
			  else{
				  //move the pointer
				  activeCol = activeCol+1;
				  //check if already a tile
				  if(board[activeRow][activeCol]===0){
					  board[activeRow][activeCol] = 1;
					  total+=1;
				  }
			  }
		  }
		  else if(direction === 2){
			  //check if we exceed bounds of the board 
			  if(activeRow === 21){
				  direction = Math.floor(Math.random()*3);
			  }
			  else{
				  //move the pointer
				  activeRow = activeRow+1;
				  //check if already a tile
				  if(board[activeRow][activeCol]===0){
					  board[activeRow][activeCol] = 1;
					  total+=1;
				  }
			  }
		  }
		  else if(direction === 3){
			  //check if we exceed bounds of the board 
			  if(activeCol === 0){
				  direction = Math.floor(Math.random()*3);
			  }
			  else{
				  //move the pointer
				  activeCol = activeCol-1;
				  //check if already a tile
				  if(board[activeRow][activeCol]===0){
					  board[activeRow][activeCol] = 1;
					  total+=1;
				  }
			  }
		  }
	  }
  };
  
  //utility functions for setting up player settings 
  addPlayer(){
	  	this.state.numPlayers +=1;
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
						</Col>
						<Col>
							<div className="PlayerSettings">
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
											<p>number of AI: {this.state.numAI}</p>
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