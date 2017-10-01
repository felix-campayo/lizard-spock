import { Component } from '@angular/core';
import { AppConfig } from '../../config/app.config';
import { CardModel } from '../../models/card.model';
import { PlayerModel } from '../../models/player.model';
import { TurnModel } from '../../models/turn.model';
import { RuleModel } from '../../models/rule.model';
import { TurnUtil } from '../../util/turn.util';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPageComponent {

  cards: CardModel[];     // Cards
  player1: PlayerModel;   // Player 1
  player2: PlayerModel;   // Player 2
  turn1: TurnModel;       // Turn 1
  turn2: TurnModel;       // Turn 2
  turnWinner: TurnModel;  // Winner turn
  title: string;          // Title of the page
  isDraw: boolean;        // Flag to know if the turn is drawn
  animatedGifUrl: string; // Animated card gif

  constructor(private turnUtil: TurnUtil) {
    this.cards = AppConfig.cards;
    this.player1 = AppConfig.players.player1;
    this.player2 = AppConfig.players.player2;
    this.title = AppConfig.title;
    this.isDraw = false;
    this.animatedGifUrl = AppConfig.cardAnimation;
  }

  /**
   * Actions to do when the player clicks on reset button
   */
  resetClick(): void {
    this.turn1 = undefined;
    this.turn2 = undefined;
    this.turnWinner = undefined;
    this.isDraw = false;
    this.turnUtil.resetTurn();
  }

  /**
   * Update turn from player and resolve the turn
   * @param turn
   */
  cardSelected(turn: TurnModel): void {
    switch (turn.player.id) {
      case this.player1.id:
        this.turn1 = turn;
        break;
      case this.player2.id:
        this.turn2 = turn;
        break;
    }

    if (this.turn1 && this.turn2) {
      this.turnWinner = this.turnUtil.resolveTurn(this.turn1, this.turn2, AppConfig.rules);
      this.isDraw = !this.turnWinner;
    }
  }
}
