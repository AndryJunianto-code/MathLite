const generateExample = (type) => {
    let symbol;
    if(type === 'Pertambahan') symbol = '+'
    if(type === 'Perkurangan') symbol = '-'
    if(type === 'Perkalian') symbol = '*'
    if(type === 'Pembagian') symbol = '/'
    let firstNum = Math.floor(Math.random()*40)+1
    let secondNum = Math.floor(Math.random() * 10)+1
    let question = `${firstNum} ${(symbol === '*' ? 'x':symbol)} ${secondNum} =`
    let answer =  eval(firstNum.toString() + symbol + secondNum.toString())
    if(Math.floor(answer) !== answer && symbol === '/') {
        let m = firstNum * secondNum
        question = `${m} / ${secondNum} =`
        answer = eval(m.toString() + symbol + secondNum.toString())
        return {question,answer}
    }
    return {question,answer}
}

export default generateExample