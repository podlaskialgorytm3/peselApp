const textToAnimation = document.querySelector(".mainText span.text")
const cursorAnimation = document.querySelector(".mainText span.cursor")

let mainText = "Peselowiec"
let text = ""
let number = 0
let time = 200

const animationCursorFunc = () => {
    cursorAnimation.classList.toggle("cursorAnimation")
}
const addingText = () => {
    if(text == mainText) text = ""
    text = text + mainText[number]
    number++
    textToAnimation.textContent = text
    if(number==mainText.length) {
        number = 0
        clearInterval(turnOn)
        setTimeout(helpingFunc,5000)
    }
}
const helpingFunc = () =>{
    turnOn = setInterval(addingText,time)
}
setInterval(animationCursorFunc,300)
let turnOn = setTimeout(helpingFunc,1000)