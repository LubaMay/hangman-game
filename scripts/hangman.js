class Hangman  {
    constructor(word, guessNumber) {
        this.word = word.toLowerCase().split('')
        this.guessNumber = guessNumber
        this.guessedRight = {}
        this.status = 'playing'
    }
    /** ------------------------------------------------
     * 
     ------------------------------------------------ */
    recalculateStatus(){
        // playing
        if(this.guessNumber > 0) {
            this.status = 'playing'
        }
        // finished
        // this.word = [food]
        // guessedRight = {f o d}
        // Step 1. Iterate thru this.word
        // Step 2. We can assume that letter was guessed right if 
        //        - letter f came
        //           - check if this letter is in guessedRight
        //           - let looses = number of looses
        //        - letter o came
        // Step 3. Game is finished if let looses = 0
        let looses = 0;
        this.word.forEach((letter) => {
            if(this.guessedRight[letter] || letter === ' ') {
                return letter
            } else {
                looses++
            }
        });

        if(looses == 0) {
            this.status = 'finished'
        }
        
        // failed

        if(this.guessNumber == 0) {
            this.status = 'failed'
        }

        return this.status;
    }
    /** ------------------------------------------------
     * 
     ------------------------------------------------ */
    get displayStatus(){
        let theWord = this.word.join('')
        
            if(this.status === 'failed') {
                return `Nice try. The word was "${theWord}"`             
            } else if(this.status === 'finished') {
                return 'Great job! You guessed the word'  
            } else {
                return `You have ${game.guessNumber} guesses left`                 
            }
    }
    /** ------------------------------------------------
     * 
     ------------------------------------------------ */
    makeGuess(char){

        if(this.status === 'playing') {
            char = char.toLowerCase()
            
               if (this.guessedRight.hasOwnProperty(char)) {
                    return;
               }
            
                 for(let i = 0; i < this.word.length; i++) {
                     
                    if(this.word[i] === char) {
                        this.guessedRight[char] = true;
                        return;
                    } 
                }
            
                // if you didn't guess the letter - guessNumber will decrease
                  this.guessNumber = this.guessNumber - 1;
            
        }  
    }
    /** ------------------------------------------------
     * 
     ------------------------------------------------ */
    get puzzle(){
        let puzzle = ''
        
            this.word.map((letter) => {
                if (this.guessedRight[letter] || letter === ' ') {
                    puzzle += letter;
                    
                } else {
                    puzzle += '*'
                }
                
            })
        
            return puzzle    
    }

}

