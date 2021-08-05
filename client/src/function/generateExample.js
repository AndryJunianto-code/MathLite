const generateExample = (operator,type,frequency) => {
    let symbol;
    let multiplier = {}
    if(operator === 'Pertambahan') symbol = '+'
    if(operator === 'Perkurangan') symbol = '-'
    if(operator === 'Perkalian') symbol = '*'
    if(operator === 'Pembagian') symbol = '/'
    
    if(type === 'SS') multiplier = {first:9,second:9,min1:1,min2:1} /* < 1 +1 */
    if(type === 'SP') multiplier = {first:9,second:99,min1:1,min2:10}
    if(type === 'PP') multiplier = {first:99,second:99,min1:10,min2:10}/* <10 ? +9 */
    if(type === 'PR') multiplier = {first:99,second:999,min1:10,min2:100}
    if(type === 'RR') multiplier = {first:999,second:999,min1:100,min2:100}/* <100 ? +90 */
    let tempQuestion = ""
    let tempAnswer = 0
    if(symbol === '/') {/* DIV */
        for(let i = 0; i < frequency; i+=2) {
            let randomFirstNum = Math.random()*multiplier.first
            let firstNum = randomFirstNum < multiplier.min1 ? Math.round(randomFirstNum+multiplier.min1) : Math.round(randomFirstNum)/* ENSURE NUMBER IS one/tenth/hundredth */
            let randomNextNum = Math.random()*multiplier.second
            let nextNum = randomNextNum < multiplier.min2 ? Math.round(randomNextNum+multiplier.min2) : Math.round(randomNextNum)
            let m = firstNum * nextNum
            tempQuestion += `${m} / ${nextNum} /`
            tempAnswer += eval(m.toString()+symbol+nextNum.toString())
        }
    } else { /* MULTI SUB ADD */
        for(let i = 0; i < frequency; i+=2) {
            let randomFirstNum = Math.random()*multiplier.first
            let firstNum = randomFirstNum < multiplier.min1 ? Math.round(randomFirstNum+multiplier.min1) : Math.round(randomFirstNum)/* ENSURE NUMBER IS one/tenth/hundredth */
            let randomNextNum = Math.random()*multiplier.second
            let nextNum = randomNextNum < multiplier.min2 ? Math.round(randomNextNum+multiplier.min2) : Math.round(randomNextNum)
            tempQuestion += `${firstNum} ${symbol} ${nextNum} ${symbol}`
            tempAnswer += eval(firstNum.toString() + symbol + nextNum.toString())
        }
    }
    
    tempQuestion = tempQuestion.slice(0,-1)
    let question = `${tempQuestion} =`
    let answer =  tempAnswer

    return {question,answer}
}
/* TYPE */
/* SS = 5 + 5 */
/* SP = 5 + 10 */
/* PP = 10 + 10 */
/* PR = 10 + 100 */
/* RR = 100 + 100 */
export default generateExample


/* 
const generateExample = (operator,type) => {
    let symbol;
    let randomNum = {}

    if(operator === 'Pertambahan') symbol = '+'
    if(operator === 'Perkurangan') symbol = '-'
    if(operator === 'Perkalian') symbol = '*'
    if(operator === 'Pembagian') symbol = '/'

    if(type === 'SS') randomNum = {first:Math.random()*9,second:Math.random()*9} 
    if(type === 'SP') randomNum = {first:Math.random()*9,second:Math.random()*99}
    if(type === 'PP') randomNum = {first:Math.random()*99,second:Math.random()*99}
    if(type === 'PR') randomNum = {first:Math.random()*99,second:Math.random()*999}
    if(type === 'RR') randomNum = {first:Math.random()*999,second:Math.random()*999}
    if(randomNum <= 0)
    let oneNum = oneRandom <= 0 ? oneRandom + 1:oneRandom
    let twoNum = twoRandom < 10 ? twoRandom + 9:twoRandom
    let threeNum = threeRandom < 100 ? threeRandom + 90:threeRandom
    let firstNum = Math.round(randomNum.first)
    let secondNum = Math.round(randomNum.second)

    let question = `${firstNum} ${(symbol === '*' ? 'x':symbol)} ${secondNum} =`
    let answer =  eval(firstNum.toString() + symbol + secondNum.toString())

    if(Math.floor(answer) !== answer && symbol === '/') {
        let m = firstNum * secondNum
        question = `${m} / ${secondNum} =`
        answer = eval(m.toString() + symbol + secondNum.toString())
        return {question,answer}
    }
    return {question,answer}
} */