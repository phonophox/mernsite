import React, { Component } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {forEach} from "react-bootstrap/utils/ElementChildren";

class Board extends Component {
    constructor() {
        super();

        this.props = {
            board: ''
        };
    };

    render() {
        var newBoard;
        if(this.props.board[i] === 0){
            newBoard = <Col className="emptyTile"> </Col>;
        }
        else{
            var tileClasses = "occupiedTile";

            newBoard = <Col className="occupiedTile"> </Col>;
        }
        var newBoard;
        for(var i=1; i < 484; i++){
            if(this.props.board[i] === 0){
                newBoard = newBoard + <Col className="emptyTile"> </Col>
            }
            else{
                newBoard = newBoard + <Col className="occupiedTile"> </Col>;
            }
        }

        return (newBoard);
    }
}

export default Board;