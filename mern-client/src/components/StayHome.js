import React, { Component } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class StayHome extends Component {
  constructor() {
  	super();
    this.state = {
		  board : null,
    	numPlayers : 0,
    	numAI : 0,
    	players : [],
      pregame: true,
      currentTurn: null,
      round: 0,
      currentPlayer: {nameString: 'pregame'}
    };
  };

  addPlayer = () => {
	  var newNumPlayers = this.state.numPlayers;
    const {players} = this.state;
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    var newPlayer = {
      key: newNumPlayers,
      name: "player " + newNumPlayers,
      color: randomColor,
      wood: 0,
      fiber: 0,
      stone: 0,
      ore: 0,
      grain: 0,
      spice: 0
    }

    let newState = Object.assign({}, this.state);
    newState.players[newNumPlayers] = newPlayer;
    var newNumPlayers = this.state.numPlayers + 1;
    newState.numPlayers = newNumPlayers;

	  this.setState(newState);
  };
  handlePlayerNameChange = (e, player) => {
    var playerData = player.player;
    let newState = Object.assign({}, this.state);
    newState.players[playerData.key].nameString = e.target.value;
	  this.setState(newState);
  }

  addAI = () => {
  		var newNumAI = this.state.numAI + 1;
	  	this.setState({numAI: newNumAI});
  };

  generateBoard = () => {
	  var newBoard = [];
	  var tile;
    var random;

	  for(var i=0; i < 144; i++){
      random = Math.floor(Math.random() * 2);
      if(random === 1){
         tile = <div className="tile occupiedTile"></div>
      }
      else{
         tile = <div className="tile emptyTile"></div>
      }
		  newBoard.push(tile);
	  }
		this.setState({board: newBoard});
  };

  startGame = () => {

    this.setState({pregame: false});
    this.setState({currentTurn: 0});
    this.setState({currentPlayer: this.state.players[0]});

  }
  endTurn = () => {
    var currentTurn = this.state.currentTurn;
    var nextTurn = this.state.currentTurn + 1;
    var nextRound = this.state.round + 1;

    if(this.state.players[nextTurn]){
      this.setState({currentPlayer: this.state.players[nextTurn]});
      this.setState({currentTurn: nextTurn});
    }
    else{
      //do the ai's turns here
      this.setState({round: nextRound});
    }

  }

  render() {
    const {board} = this.state;
    const {players} =this.state;
    const {currentPlayer} =this.state;
    const {round} =this.state;
    let playerResources;
    let playerSettings;

    if(players){
    playerSettings = players.map((player, k) =>
    <Row className="playerSttingField">
      <Col>
        <input type="text"  value={this.state.players[k].nameString} placeholder={player.nameString} onChange={(e) => this.handlePlayerNameChange(e, {player})}/>
      </Col>
    </Row>
    );
    playerResources = players.map((player, k) =>
      <Row key={k} className="playerResourceRow">
        <Col>
          {player.nameString}
        </Col>
        <Col className="woodTile">
          {player.wood}
        </Col>
        <Col className="fiberTile">
          {player.fiber}
        </Col>
        <Col className="stoneTile">
          {player.stone}
        </Col>
        <Col className="oreTile">
          {player.ore}
        </Col>
        <Col className="grainTile">
          {player.grain}
        </Col>
        <Col className="spiceTile">
          {player.spice}
        </Col>
      </Row>
    );
  }
  else{console.log("no players yet");}

  	return (
  		<div className="StayHomeContainer">
  			<div className="StayHome">
  				<Container fluid="true" className="stayHomeContainer noPadding">
  					<Row>
  						<Col className="boardArea">
                {board}
  						</Col>
  						<Col>
  							<div className={this.state.pregame ? 'gameSettings' : 'hidden'}>
  								<Container>
  									<Row>
  										<Col>
  											<button onClick={this.addPlayer}>Add Player</button>
  										</Col>
  										<Col>
  											<button onClick={this.addAI}>Add AI</button>
  										</Col>
                      <Col>
                        <button onClick={this.generateBoard}>Generate Board</button>
  										</Col>
                      <Col>
                        <button onClick={this.populateBoard}>Populate Board</button>
  										</Col>
  									</Row>
                    {playerSettings}
  									<Row>
  										<Col>
  											<p>number of Players: {this.state.numPlayers}</p>
  											<p>number of AI: {this.state.numAI}</p>
  										</Col>
  									</Row>
                    <Row>
                      <Col>
                        <button onClick={this.startGame}>Start Game</button>
                      </Col>
  									</Row>
  								</Container>
  							</div>
                <div className={this.state.pregame ? 'hidden' : 'currentGameInfo'}>
  								<Container>
  									<Row>
  										<Col>
  											<p>Current Players Turn: {currentPlayer.nameString}</p>
  										</Col>
                      <Col>
  											<p>Current Round: {round}</p>
  										</Col>
                      <Col>
  											<button onClick={this.endTurn}>End Turn</button>
  										</Col>
  									</Row>
  								</Container>
  							</div>
                <div className={this.state.pregame ? 'hidden' : 'gameStats'}>
  								<Container>
  									<Row className="resourceTitles">
  									           <Col>
                               </Col>
                               <Col className="woodTile">
                                 Wood
                               </Col>
                               <Col className="fiberTile">
                                 Fiber
                               </Col>
                               <Col className="stoneTile">
                                 Stone
                               </Col>
                               <Col className="oreTile">
                                 Ore
                               </Col>
                               <Col className="grainTile">
                                 Grain
                               </Col>
                               <Col className="spiceTile">
                                 Spice
                               </Col>
  									</Row>
  									{playerResources}
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
