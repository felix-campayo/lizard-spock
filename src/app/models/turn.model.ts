import { PlayerModel } from './player.model';
import { CardModel } from './card.model';

/**
 * Turn model
 */
export interface TurnModel {
  player?: PlayerModel;        // Player id
  card?: CardModel;            // Player name
}
