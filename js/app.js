let game = new Game();
const startButton = document.getElementById(`btn__reset`);
startButton.addEventListener('click', () =>  game.startGame())


const buttons = document.querySelectorAll('BUTTON');
buttons.forEach(button => button.addEventListener('click', (e) =>
{
  game.handleInteraction(e.target);
}))
