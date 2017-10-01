import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CardModel } from '../../models/card.model';
import { PlayerModel } from '../../models/player.model';
import { TurnModel } from '../../models/turn.model';
import { TurnUtil } from '../../util/turn.util';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() player: PlayerModel;                     // Player
  @Input() cards: CardModel[];                      // Card list
  @Input() animatedGifUrl: string;                  // Default animation gif url
  @Output() turn: EventEmitter<TurnModel>;          // Card selected

  selectedCard: CardModel;                          // Selected card
  isSelected: boolean;                              // Is the card selected

  constructor(private turnUtil: TurnUtil) {
    // Everytime we receive a reset event we reset the component
    this.turnUtil.getTurnEventListener()
      .subscribe(() => this.reset());

    this.turn = new EventEmitter<TurnModel>();
    this.selectedCard = { img: '' };
  }

  /**
   * Initialize component
   */
  ngOnInit(): void {
    this.reset();
  }

  /**
   * Player selects a random card
   */
  selectCard(): void {
    if (!this.isSelected && this.cards && this.cards.length > 0) {
      this.isSelected = true;
      this.selectedCard = this.cards[this.getRandomNumber(0, this.cards.length)];
      this.turn.emit({ player: this.player, card: this.selectedCard });
    }
  }

  /**
   * Reset the component
   */
  private reset(): void {
    this.selectedCard = { img: this.animatedGifUrl };
    this.isSelected = false;
  }

  /**
   * Get random init index
   * @param init
   * @param last
   */
  private getRandomNumber(init: number, last: number): number {
    return Math.floor(Math.random() * last) + init;
  }
}
