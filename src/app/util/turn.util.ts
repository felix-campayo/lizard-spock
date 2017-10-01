import { Injectable } from '@angular/core';
import { RuleModel } from '../models/rule.model';
import { TurnModel } from '../models/turn.model';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class TurnUtil {

  private turn: Subject<void>;  // Turn subject to handle reset events

  /**
   * Constructor
   */
  constructor() {
    this.turn = new Subject<void>();
  }

  /**
   * Resolve who wins the turn
   * @param t1
   * @param t2
   * @param rules
   */
  resolveTurn(t1: TurnModel, t2: TurnModel, rules: RuleModel[]): TurnModel {
    for (let i = 0; i < rules.length; i++) {
      if (t1.card.id === rules[i].cardWinnerId && t2.card.id === rules[i].cardLoserId) {
        return t1;
      } else if (t2.card.id === rules[i].cardWinnerId && t1.card.id === rules[i].cardLoserId) {
        return t2;
      }
    }
    return undefined;
  }

  /**
   * Reset turn
   */
  resetTurn(): void {
    this.turn.next();
  }

  /**
   * Observable to listen to turn reset events
   */
  getTurnEventListener(): Observable<void> {
    return this.turn.asObservable();
  }
}
