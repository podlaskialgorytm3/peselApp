const chosenDate = document.querySelector("div.generate div.maintop input.date")
const btn = document.querySelector("div.generate button")
const numberContent = document.querySelector("div.generate div.maintop input.number")
const maleSelect = document.querySelector(".male")
const femaleSelect = document.querySelector(".female")
const dateInfo = document.querySelector("p.date span.toGenerateDescription")
const sexInfo = document.querySelector("p.sex span.toGenerateDescription")
const generateList = document.querySelector("ul.generateList")
const problem = document.querySelector("p.problemGenerate")

let year = ""
let month = ""
let day = ""
let help = ""
let pesel

const chosenDateFunc = () => {
    for(let i=0;i<=3;i++) year = year + chosenDate.value[i]
    for(let i=5;i<=6;i++) month = month + chosenDate.value[i]
    for(let i=8;i<=9;i++) day = day + chosenDate.value[i]
    correctDate()
    year = ""
    day = ""
    month = ""
}
const correctDate = () => {
    year = Number(year)
    month = Number(month)
    day = Number(day)
    const currentDate ={
        year: new Date().getFullYear(),
        month: new Date().getMonth()+1,
        day: new Date().getDate()
    }
    let helpToCorrectData = 0
    if(year>currentDate.year || year<1900)disableTextContent()
    else helpToCorrectData++
    if(month>currentDate.month && year == currentDate.year) disableTextContent()
    else helpToCorrectData++
    if(day>currentDate.day && month>=currentDate.month && year == currentDate.year) disableTextContent()
    else  helpToCorrectData++
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
    if(day>31)disableTextContent()
    else helpToCorrectData++
    if(month == 4 || month == 6 || month == 9 || month == 11)if(day>30)disableTextContent()
    else helpToCorrectData++
    if(month == 2 && year%4 != 0)if(day>28)disableTextContent()
    else helpToCorrectData++
    if(month == 2 && year%4 ==0)if(day>29)disableTextContent()
    else helpToCorrectData++
    if(helpToCorrectData==4) checkingNumber()
    helpToCorrectData = 0
}
const disableTextContent = () =>{
    dateInfo.textContent = ""
    generateList.textContent = ""
    sexInfo.textContent = ""
    problem.textContent = "Wprowadzono niepopraną date"
    return;
}
const checkingNumber = () => {
    problem.textContent = ""
    if(numberContent.value>10) numberError()
    else checkClickSexSelect()
}
const numberError = () => {
    dateInfo.textContent = ""
    generateList.textContent = ""
    sexInfo.textContent = ""
    problem.textContent = "Maksymalnie 10 wygenerowanych peseli"
}
const checkClickSexSelect = () => {
    if(help=="") sexError()
    else generatePesel()
}
const sexError = () => {
    dateInfo.textContent = ""
    sexInfo.textContent = ""
    generateList.textContent = ""
    problem.textContent = "Nie wybrano płci"
}
const generatePesel = () => {
    generateList.textContent = ""
    let toMonthHelp = false 
    let randomNumbers = []
    let controlNumber = 0
    if(year >= 2000){
        toMonthHelp = true
        pesel = `${year-2000}`
    }
    else pesel =`${year-1900}`
   
    if(pesel<10) pesel = `${0}${pesel}`
    if(toMonthHelp) pesel = `${pesel}${month+20}`
    else {
        if(month<10) month = `${0}${month}`
        pesel = `${pesel}${month}`}
    if(day<10) day=`${0}${day}`
    pesel = `${pesel}${day}`
    for(let i=0;i<=numberContent.value-1;i++){
    generating(randomNumbers)
    controlNumberFunc(controlNumber,randomNumbers,pesel)
    randomNumbers = []
    
    }
    
}
const generating = (randomNumbers) => {
    for(let i=0;i<=3;i++) {
        let helpToRandom = Math.floor(Math.random()*10)
        if(i==3 && help == "k"){
            if(helpToRandom % 2 == 0)randomNumbers.push(helpToRandom)
            else{
                helpToRandom--
                randomNumbers.push(helpToRandom)
            }
        }
        if(i==3 && help == "m"){
            if(helpToRandom % 2 == 1)randomNumbers.push(helpToRandom)
            else{
                helpToRandom++
                randomNumbers.push(helpToRandom)
            }
        }
        if(i<3)randomNumbers.push(Math.floor(Math.random()*10))
    }
}
const controlNumberFunc = (controlNumber,randomNumbers,pesel) => {
    let helpToControlNumber = [1,3,7,9,1,3,7,9,1,3]
    for(let i=0;i<=3;i++){
        pesel = `${pesel}${randomNumbers[i]}`
    }
    for(let i=0;i<=9;i++){
        controlNumber = Number(pesel[i]) * helpToControlNumber[i] + controlNumber
    }
    controlNumber = controlNumber%10
    controlNumber = 10 - controlNumber
    if(controlNumber == 10) controlNumber = 0
    pesel = `${pesel}${controlNumber}`
    writingPesels(pesel)
}
const writingPesels = (pesel) =>
{
    const li = document.createElement("li")
    generateList.append(li)
    dateInfo.textContent = chosenDate.value
    if(help == "k") sexInfo.textContent = " żeńskiej"
    else sexInfo.textContent = " męskiej"
    li.textContent = pesel
    generateList.append()
}


btn.addEventListener("click",chosenDateFunc)

maleSelect.addEventListener("click",() => {
    help = "m"
})
femaleSelect.addEventListener("click", () => {
    help = "k"
})