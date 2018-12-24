class Game
{
  constructor()
  {
    //all global variable for class * added empty array to keek track of used phrases
    this.missed = 0;
    this.activePhrase = null;
    this.used = [];
    this.phrases = [
      {
        phrase: 'life is like a box of chocolates'
      },
      {
        phrase: 'there is no trying'
      },
      {
        phrase: 'may the force be with you'
      },
      {
        phrase: 'you have to see the matrix of yourself'
      },
      {
        phrase: 'you talking to me'
      }
    ]
  }
  //checks if the user won
  checkForWin()
  {
  let over = true
  let charList = document.querySelectorAll('li')

  charList.forEach(char =>
    {
      if(char.className.includes('hide letter'))
      {
        over = false
      }
    })
    return over;
  }
//removes a liveHeart, replaces it with a lost heat and keeps track of lost points
removeLife()
{
  this.missed++;
  let hearts = document.querySelectorAll('.tries');
  for(let i = 0; i < this.missed; i++ )
  {
    hearts[i].innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">';

  }
  if(this.missed === 5)
  {
  this.gameOver(false);
  this.missed = 0;
  }

}
//ends game depending on the  user or loss of hearts
gameOver(gameWon)
{
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'flex';
  const mess = document.querySelectorAll('h2')[1];

  if(gameWon)
  {
    mess.textContent = 'You Win!'
    overlay.className ='win'

  }
  else
  {
    mess.textContent = 'GameOver';
    overlay.className ='lose'

  }
this.resetGame();

}
//gets random phrase and checks if it was used already
  getRandomPhrase()
  {
    let randomNum;
    let randomPhrase;
    if(this.used.length === this.phrases.length)
    {
      this.used = [];
    }
do
{
  randomNum = Math.floor(Math.random() * 5);
  randomPhrase = this.phrases[randomNum].phrase;
}while(this.used.includes(randomPhrase));
this.used.push(randomPhrase)
    return randomPhrase;
  }
// creates the phrase saves it globly and displays it
  startGame()
  {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    let string = this.getRandomPhrase();
    this.activePhrase = new Phrase(string);

    this.activePhrase.addPhraseToDisplay();
    document.addEventListener('keydown', keyListener);
}
//calls check letter and skeeps track of if the games over
handleInteraction(button)
{
  if(this.activePhrase.checkLetter(button.textContent))
  {
    this.activePhrase.showMatchedLetters(button.textContent);
    button.className = 'chosen';
    if(this.checkForWin())
    {
      this.gameOver(true);
    }
  }
  else
  {
    if(button.textContent !== "Start Game")
    {
    button.className = 'wrong';
    button.disabled = true;
    this.removeLife();
    }

  }
}
// resets the game by undoing all visible changes on the screen
resetGame()
{
  let buttons = document.querySelectorAll('BUTTON');
  let chars = document.querySelectorAll('li');
  let hearts = document.querySelectorAll('.tries');
  const ul = document.querySelector('ul');
  buttons.forEach(button =>
    {
    button.className = 'key';
    button.disabled = false;
    })

  hearts.forEach(heart => heart.innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">')
  this.missed = 0;

  ul.innerHTML = '';
  document.removeEventListener('keydown', keyListener);

  }

}
