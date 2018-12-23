class Phrase
{
  constructor(phrase)
  {
    //saves the phrase from the parameter to globle variable to be used by the methods within the class
    this.phrase = phrase;
  }
//takes the letter of the button pushed and campares it to the lis to decide which to show
  showMatchedLetters(letter)
  {
    const charList = document.querySelectorAll('li')
    charList.forEach(char =>

      {
        if(char.textContent === letter)
        char.className = 'show letter';
      });
  }
  //checks if the letter pused is in the phrase
  checkLetter(letter)
  {
    const split = this.phrase.split('');

    if(split.includes(letter))
    {
      return true
    }
    else
    {
      return false
    }
  }
//takes phrase creats a list iteam for each char and gives it a class to hide it
  addPhraseToDisplay()
  {
    const ul = document.querySelector('ul');
    //console.log(this.phrase)
    //can uncomment for repeating test
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
    }
  }
}
