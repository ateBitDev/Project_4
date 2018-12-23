class Game
{
  constructor()
  {
    this.missed = 0;
    this.activePhrase = null;
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
  let notOver = false
  let charList = document.querySelectorAll('li')

  charList.forEach(char =>
    {
      if (li.className !== 'tries')
      {
        if(li.className === 'show letter')
        notOver = true
        else
        console.log('over');
      }
    })
    return notOver;
  }

removeLife()
{
  this.missed++;
  let hearts = document.querySelectorAll('.tries');
  console.log(this.missed)
  for(let i = 0; i < this.missed; i++ )
  {
    hearts[i].innerHTML = '<img src="images/lostHeart.png">';

  }
  if(this.missed === 5)
  this.gameOver(false);
}

gameOver(gameWon)
{
  const game = new game();
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
  // handleInteraction()
  // {
  //
  // }
}}
