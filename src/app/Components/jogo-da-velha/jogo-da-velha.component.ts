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
    //console.log(`linha ${line} coluna ${column}`)
    if(this.board[line][column] == "" && this.winner == ''){
      if(this.currentPlayer == 'O'){
        this.currentPlayer = 'X'
      }else{
        this.currentPlayer = 'O';
      }
    }

  }

  public checkWinner() {
    return;
  }

}
