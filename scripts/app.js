// Promitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String; myString --> String.prototype --> Object.prototype --> null
// Numner: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#status')

let game = null;

// puzzleEl.textContent = game.puzzle
// statusEl.textContent = game.displayStatus


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess);
    console.log(game.recalculateStatus())
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    statusEl.textContent = game.displayStatus
    //puzzleEl.innerHTML = puzzleEl.innerHTML + `<span>${letter}</span>` 
    let arrayOfLetters = game.puzzle.split('');
    console.log('array of letters:', arrayOfLetters)
    return arrayOfLetters.forEach((letter) => letter === ' ' ? puzzleEl.innerHTML += '<span> </span> ' : puzzleEl.innerHTML += `<span>${letter}</span>`)  
    
}   

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()


// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(err)
// })

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if(response.status === 200) {
//        return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((err) => {
//     console.log(err)
// })

getCosmosPeople().then((data) => {
    const names = data.people.map((person) => {
        return person.name
    })
    console.log(names)
}).catch((error) => {
    console.log(error)
})



// const product = {
//     name: 'Influence'
// }

// hasOwnProperty
// console.log(product.hasOwnProperty('name'));