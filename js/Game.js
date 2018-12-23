class Game
{
  constructor()
  {
    this.missed = 0;
    this.activePhrase = null;
    const phrase = new Phrase(this.activePhrase);
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

gameOver(gameWon)
{
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'flex';
  const mess = document.createElement('h2')

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

  overlay.append(mess);
}

  getRandomPhrase()
  {
    let randomNum = Math.floor(Math.random() * 5);
    let randomPhrase = this.phrases[randomNum].phrase;
    return randomPhrase;
  }

  startGame()
  {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    this.activePhrase = this.getRandomPhrase();
    const phrase = new Phrase(this.activePhrase);
    phrase.addPhraseToDisplay();
}

handleInteraction(button)
{
  const phrase = new Phrase(this.activePhrase);

  if(phrase.checkLetter(button.textContent))
  {
    phrase.showMatchedLetters(button.textContent);
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
}
