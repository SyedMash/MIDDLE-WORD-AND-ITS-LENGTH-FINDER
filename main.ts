#! /usr/bin/env node
import inquirer from "inquirer";
async function FML(){
    
    interface WORDS {
        first: Function,
        Middle: Function,
        last: Function,
        all: Function
    }
    let FMLW : WORDS = {
        first: async function(){
            const sentence :{sent:string} = await inquirer.prompt([{
                type: 'input',
                name: 'sent',
                message: 'Enter Sentence: '
            }])
            let trimmedVersion :string = sentence.sent.trim()
            let word :string = ''
            let wordL :number = 0
            for(let i=0; i<sentence.sent.length; i++){
                if(trimmedVersion[i] === " "){
                    break
                } else {
                    wordL++
                    word = word + trimmedVersion[i]
                }
            }
            console.log(`THE FIRST IS WORD "${word}" AND ITS LENGTH IS "${wordL}" `)
        },
        Middle: async function(){
            const sentence :{sent:string} = await inquirer.prompt([{
                type: 'input',
                name: 'sent',
                message: 'Enter Sentence: '
            }])
            let trimmedVersion :string = sentence.sent.trim()
            let mid :number = Math.floor(trimmedVersion.length / 2)
            let word :string = ''
            let wordL :number = 0
            let lastSpaceFromLeftIndex :number = 0
            let lastSpaceFromRightIndex :number = 0

            for(let i=0; i<mid; i++){
                if(trimmedVersion[i] === " "){
                    lastSpaceFromLeftIndex = i
                }
            }
            for(let j=trimmedVersion.length - 1; j>mid; j--){
                if(trimmedVersion[j] === " "){
                    lastSpaceFromRightIndex = j
                }
            }
            for(let m=lastSpaceFromLeftIndex; m<lastSpaceFromRightIndex; m++){
                if(trimmedVersion[m] !== " "){
                    wordL++
                    word = word + trimmedVersion[m]
                }
            }
            console.log(`THE MIDDLE WORD IS "${word}" AND ITS LENGTH IS "${wordL}" `)
        },
        last: async function(){
            const sentence :{sent:string} = await inquirer.prompt([{
                type: 'input',
                name: 'sent',
                message: 'Enter Sentence: '
            }])
            let trimmedVersion :string = sentence.sent.trim()
            let word :string = ''
            let wordL :number = 0
            let wordRev;
            for(let i=trimmedVersion.length -1 ; i>0; i--){
                if(trimmedVersion[i] === " "){
                    break
                } else {
                    wordL++
                    word = word + trimmedVersion[i]
                    wordRev = word.split(" ").map(
                        function(word){
                            return word.split("").reverse().join("")
                        }
                    )
                }
        }
        console.log(`THE LAST WORD IS "${wordRev}" AND ITS LENGTH IS "${wordL}" `)
    },
    all : async function(){
        const sentence :{sent:string} = await inquirer.prompt([{
            type: 'input',
            name: 'sent',
            message: 'Enter Sentence: '
        }])
        function firstWOrd(){
            let trimmedVersion :string = sentence.sent.trim()
            let word :string = ''
            let wordL :number = 0
            for(let i=0; i<sentence.sent.length; i++){
                if(trimmedVersion[i] === " "){
                    break
                } else {
                    wordL++
                    word = word + trimmedVersion[i]
                }
            }
            return `THE FIRST WORD IS "${word}" AND ITS LENGTH IS "${wordL}"`
        }
        function middleWord(){
            let trimmedVersion :string = sentence.sent.trim()
            let mid :number = Math.floor(trimmedVersion.length / 2)
            let word :string = ''
            let wordL :number = 0
            let lastSpaceFromLeftIndex :number = 0
            let lastSpaceFromRightIndex :number = 0

            for(let i=0; i<mid; i++){
                if(trimmedVersion[i] === " "){
                    lastSpaceFromLeftIndex = i
                }
            }
            for(let i=trimmedVersion.length - 1; i>mid; i--){
                if(trimmedVersion[i] === " "){
                    lastSpaceFromRightIndex = i
                }
            }
            for(let i=lastSpaceFromLeftIndex; i<lastSpaceFromRightIndex; i++){
                if(trimmedVersion[i] !== " "){
                    wordL++
                    word = word + trimmedVersion[i]
                }
            }
            return `THE MIDDLE WORD IS "${word}" AND ITS LENGTH IS "${wordL}"`
        }
        function lastWord(){
            let trimmedVersion :string = sentence.sent.trim()
            let word :string = ''
            let wordL :number = 0
            let wordRev;
            for(let i=sentence.sent.length-1; i>0; i--){
                if(trimmedVersion[i] === " "){
                    break
                } else {
                    wordL++
                    word = word + trimmedVersion[i]
                    wordRev = word.split(" ").map(
                        function(word){
                            return word.split("").reverse().join("")
                        }
                    )
                }
        }
        return `THE LAST WORD IS "${wordRev}" AND ITS LENGTH IS "${wordL}"`
        }
        console.log(firstWOrd())
        console.log(middleWord())
        console.log(lastWord())
    }
}
const choices = await inquirer.prompt([{
    type : 'list',
    name: 'fmorl',
    message: 'Which word length you want to find? ',
    choices: ["FIRST","MIDDLE",'LAST','ALL']
}]);
if(choices.fmorl === "FIRST"){
    FMLW.first()
} else if (choices.fmorl === "MIDDLE"){
    FMLW.Middle()
} else if (choices.fmorl === "LAST") {
    FMLW.last()
} else {
    FMLW.all()
}
}
FML()