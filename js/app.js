let game = new Game();
//creats a instance of game
const startButton = document.getElementById(`btn__reset`);
startButton.addEventListener('click', () =>  game.startGame())
//gets a referance to all the buttons and elements needed to create a end game message
const buttons = document.querySelectorAll('BUTTON');
const mess = document.createElement('h2')
const overlay = document.getElementById('overlay');
overlay.append(mess);
//when a button is pushed it is passed to handleInteraction
buttons.forEach(button => button.addEventListener('click', (e) =>
{
  game.handleInteraction(e.target);
}))

let keyListener = (e) =>  {
  let key;

  buttons.forEach(button =>
    {
      if(button.textContent === e.key)
      {
        key = button;
      }
    });
  game.handleInteraction(key);
}
document.addEventListener('keydown', keyListener);
