// App configuration
export const AppConfig = {
  players: {
    player1: {
      id: 0,
      name: 'Mario'
    },
    player2: {
      id: 1,
      name: 'Luigi'
    }
  },
  cards: [
    {
      img: 'assets/cards/lizard.jpg',
      name: 'Lizard',
      id: 0
    },
    {
      img: 'assets/cards/spock.jpg',
      name: 'Spock',
      id: 1
    },
    {
      img: 'assets/cards/scissor.jpg',
      name: 'Scissor',
      id: 2
    },
    {
      img: 'assets/cards/stone.jpg',
      name: 'Stone',
      id: 3
    },
    {
      img: 'assets/cards/paper.jpg',
      name: 'Paper',
      id: 4
    },
  ],
  rules: [
    {
      cardWinnerId: 2, // Scissor
      cardLoserId: 4,  // Paper
    },
    {
      cardWinnerId: 4, // Paper
      cardLoserId: 3   // Stone
    },
    {
      cardWinnerId: 3, // Stone
      cardLoserId: 0   // Lizard
    },
    {
      cardWinnerId: 0, // Lizard
      cardLoserId: 1   // Spock
    },
    {
      cardWinnerId: 1, // Spock
      cardLoserId: 2   // Scissor
    },
    {
      cardWinnerId: 2, // Scissor
      cardLoserId: 0   // Lizard
    },
    {
      cardWinnerId: 0, // Lizard
      cardLoserId: 4   // Paper
    },
    {
      cardWinnerId: 4, // Paper
      cardLoserId: 1   // Spock
    },
    {
      cardWinnerId: 1, // Spock
      cardLoserId: 3   // Stone
    },
    {
      cardWinnerId: 3, // Stone
      cardLoserId: 2   // Scissor
    },
  ],
  title: 'Lizard-Spock Game',
  cardAnimation: 'assets/cards/cards.gif'
}
