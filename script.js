const randomWord = document.querySelector('.randomWord')
const inputsContainer = document.querySelector('.inputsContainer')
const input = document.querySelector('.input')
const button = document.querySelector('.reset')


let wordCorrect = {
    correct: "",
    scrambled: "",
    spliced: [], 
}

const wordsArray = [
    "tree",
    "hello",
    "boot",
    "word",
    "dog",
]

const changeWord = (word) => {
    randomWord.innerHTML = "";
    selectedWord = word
    console.log("CCCCCC" + wordCorrect.correct)
    console.log("CORREEEECT" + wordCorrect.correct)
    randomWord.innerHTML = selectedWord;
}

const wordSelector = () => {
    const word = wordsArray[Math.floor(Math.random() * wordsArray.length)]
    wordCorrect.correct = word;
    console.log("I win" + word)
    console.log(word + "lo hicimos")
    return word
}

const haceMagia3000 = () => {
    changeWord(scramble(wordSelector()))
}

const scramble = (word) => {
    let scrambled = '';
    word = word.split('');
    wordCorrect.spliced.push(word)
    for (let index = 0; index < word.length; index++) {
        const input = document.createElement('input');
        input.classList.add('input');
        inputsContainer.appendChild(input)
    }
    while (word.length > 0) {
      scrambled +=  word.splice(word.length * Math.random() << 0, 1);
    }
    wordCorrect.scrambled = scrambled;

    return scrambled;
}

const evaluator = (letter) => {
    if (letter = wordCorrect.correct) {
        console.log("Sos un crack bro")
    }
}


haceMagia3000();
button.addEventListener("click",haceMagia3000)
