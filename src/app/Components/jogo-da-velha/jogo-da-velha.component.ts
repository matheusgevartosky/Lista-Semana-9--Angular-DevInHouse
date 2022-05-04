import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss']
})
export class JogoDaVelhaComponent implements OnInit {

  public currentPlayer: string = 'O';
  public winner:string = '';
  public board: string [][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public play(line:number, column:number){
    //this.board[line][column] = this.currentPlayer


    if(this.board[line][column] == "" && this.winner == ''){

      this.board[line][column] = this.currentPlayer;

      if(this.checkWinner(this.currentPlayer)){
        this.winner = this.currentPlayer;
      }

      if(this.currentPlayer == 'O'){
        this.currentPlayer = 'X'
      }else{
        this.currentPlayer = 'O';
      }
    }


  }

  public checkWinner(player: string): boolean {
    for(let i = 0; i < this.board.length; i++){
      if(this.board[i][0] == player &&  this.board [i][1] == player &&this.board [i][2] == player){
        return true
      }
    }for(let i = 0; i < this.board.length; i++){
      if(this.board[0][i] == player &&  this.board [1][i] == player &&this.board [2][i] == player){
        return true
      }
    }

    if(this.board[0][0] == player && this.board[1][1] == player && this.board[2][2]){
      return true
    }if(this.board [0][2] ==player && this.board[1][1] == player && this.board[2][0] == player){
      return true
    }
    return false;
  }

  public reset(){
  this.currentPlayer = "O";
  this.winner = '';
  this.board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
}
}
