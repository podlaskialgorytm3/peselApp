const input = document.querySelector("div.validator input")
const btn = document.querySelector("div.validator div.finding button")
const problemInfo = document.querySelector("p.problem")
const dateInfo = document.querySelector("p.date span.description")
const sexInfo = document.querySelector("p.sex span.description")

let year
let month
let day


const checkingLength = () => {
    if(input.value.toString().length == 11){
        problemInfo.textContent = ""
       
        checkingCorrect()
    }
    else{
        problemInfo.style.color = "red"
        problemInfo.textContent = "Podano za mało cyfr"
        dateInfo.textContent = ""
        sexInfo.textContent = ""
    }
}
const checkingCorrect = () => {
    let helping = 1
    let sum = 0
    let toCount
    for(let i=0;i<=9;i++){
        sum = sum + (helping*input.value[i])
        helping+=2
        if(helping == 5)helping+=2
        if(helping == 11)helping = 1
    }
   
    if(sum%10 == 0) toCount = 0
    else toCount = 10 - (sum % 10)
    if(toCount == input.value[input.value.length-1]) checkingDate()
    else{
        problemInfo.style.color = "red"
        problemInfo.textContent = "Nieprawidłowy numer pesel"
        dateInfo.textContent = ""
        sexInfo.textContent = ""
    }
}
const checkingDate = () => {
    let toHelpMonth
    let firstLoopHelp = 0
    let secondLoopHelp = 0
    let toNumHelp
    let helpingDay = 0
    if(input.value[2] == 0 || input.value[2] == 1) year = 19 + (input.value[0]) + (input.value[1])
    if(input.value[2] == 2 || input.value[2] == 3) year = 20  + (input.value[0]) + (input.value[1])
    if(input.value[2] !=0 && input.value[2] != 1 && input.value[2] != 2 && input.value[2] != 3){
        disableTextContent()
        return
    }
    for(let i=0;i<=11;i++){
    if((input.value[2] == 0 + firstLoopHelp || input.value[2] == 2 + firstLoopHelp) && input.value[3] == i + 1 + secondLoopHelp){
        if(input.value[2] == 2 || input.value[2] == 3) {
            toNumHelp = Number(input.value[2])
            toNumHelp-=2
            month = `${toNumHelp}${input.value[3]}`
            toHelpMonth = toNumHelp * 10 + Number(input.value[3])
        }
        else {
        month = `${input.value[2]}${input.value[3]}`
        toHelpMonth = Number(input.value[2])* 10 + Number(input.value[3])
    }
    }
    if(i==8){
        firstLoopHelp++
        secondLoopHelp-=10
    }}
    let toHelpDay = `${input.value[4]}${input.value[5]}`
    if(toHelpMonth == 1 || toHelpMonth == 3 || toHelpMonth == 5 || toHelpMonth == 7 || toHelpMonth == 8 || toHelpMonth == 10 || toHelpMonth == 12) if(toHelpDay<=31){ day = toHelpDay 
        helpingDay=1}
    if(toHelpMonth == 4 || toHelpMonth == 6 || toHelpMonth == 9 || toHelpMonth == 11 ) if(toHelpDay<=30) { day = toHelpDay 
        helpingDay=1}
    if(toHelpMonth == 2 && year%4 == 0) if(toHelpDay<=29) { day = toHelpDay 
        helpingDay=1}
    if(toHelpMonth == 2 && year%4 != 0) if(toHelpDay<=28) { day = toHelpDay 
        helpingDay=1}
    if(helpingDay == 0) {
        disableTextContent()
        return
    }
    dateInfo.textContent = `${day}.${month}.${year}`
    checkingSex()
    additionalFunc()
}
const checkingSex = () => {
    if(input.value[9] % 2 == 0)sexInfo.textContent = "żeńskiej"
    else sexInfo.textContent = "męskiej"
}
const additionalFunc = () =>{
    problemInfo.style.color = "green"
    problemInfo.textContent = "Podany pesel jest prawidłowy"
    correctDate()
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
    if(helpToCorrectData==3) input.value = ""
}
const disableTextContent = () =>{
    problemInfo.style.color = "red"
    problemInfo.textContent = "Nieprawidłowy numer pesel"
    sexInfo.textContent = ""
    dateInfo.textContent = ""
    
}
const checkPressEnter = (e) => {
    if(e.keyCode == 13)checkingLength()
}

input.addEventListener("keydown",checkPressEnter)

btn.addEventListener("click",checkingLength)