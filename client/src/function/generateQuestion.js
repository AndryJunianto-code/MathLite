import generateExample from "./generateExample"

const generateQuestion = (totalQuestion,chosenState) => {
    const {operator,type,frequency} = chosenState
    let questionArr = []
    for(let i = 0; i < totalQuestion;i++) {
        questionArr.push(generateExample(operator,type,frequency))
    }
    return questionArr
}

export default generateQuestion