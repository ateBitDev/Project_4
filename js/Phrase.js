class Phrase
{
  constructor(phrase)
  {
    this.phrase = phrase;
  }

  showMatchedLetters(letter)
  {
    const charList = document.querySelectorAll('li')
    charList.forEach(char =>

      {
        if(char.textContent === letter)
        char.className = 'show letter';
      });
  }
  checkLetter(letter)
  {
    const split = this.phrase.split('');

    if(split.includes(letter))
    {
      this.showMatchedLetters(letter);
        console.log('true')
    }
    else
    {
      console.log('false')
      const game = new Game();
    }
  }

  addPhraseToDisplay()
  {
    const phraseDiv = document.getElementById('phrase');
    const ul = document.querySelector('ul');
    phraseDiv.append(ul);

    for(let i = 0; i < this.phrase.length; i++)
    {
      let li = document.createElement('li');
      let letter = this.phrase[i];

      if (letter === ' ')
      li.className = `space`
      else
      li.className = `hide letter ${letter}`;

      li.textContent = letter
      ul.append(li);

      const buttons = document.querySelectorAll('BUTTON');
      buttons.forEach(button => button.addEventListener('click', (e) =>
      {
        this.checkLetter(e.target.textContent);



      }))
    }
  }
}
