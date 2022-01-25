const validatorWindow = document.querySelector(".validator")
const closeVW = document.querySelector(".val")
const openVW = document.querySelector(".validatorOption")

const generateWindow = document.querySelector(".generate")
const openGW = document.querySelector(".generateOption")
const closeGW = document.querySelector(".gen")

const closingVW = () => {
    validatorWindow.style.display = "none"
}
const closingGW = () => {
    generateWindow.style.display = "none"
}
const openingValidatorWindow = () => {
    validatorWindow.style.display = "flex"
}
const openingGenerateWindow = () => {
    generateWindow.style.display = "flex"
}
closeVW.addEventListener("click",closingVW)
closeGW.addEventListener("click",closingGW)
openVW.addEventListener("click",openingValidatorWindow)
openGW.addEventListener("click",openingGenerateWindow)