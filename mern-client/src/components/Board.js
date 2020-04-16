import React, { Component } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {forEach} from "react-bootstrap/utils/ElementChildren";

class Board extends Component {
    constructor(props) {
        super(props);

        this.props = {
            board: ''
        };
    };

    render() {
        var newBoard;
        if(this.props.board[i] === 0) {
            newBoard = <div className="emptyTile"> </div>;
        }
        else{
            newBoard = <div className="occupiedTile"> </div>;
        }
        var newBoard;
        for(var i=1; i < 484; i++){
            if(this.props.board[i] === 0){
                newBoard = newBoard + <div className="emptyTile"> </div>
            }
            else{
                newBoard = newBoard + <div className="occupiedTile"> </div>;
            }
        }

        return (newBoard);
    }
}

export default Board;