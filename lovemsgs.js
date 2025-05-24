
function randomWord (num) {
 return Math.floor(Math.random() * num);
}

const loveMessages = {
    line1Verb: ['farts', 'defecates', 'slaps', 'burns'],
    line2Verb: ['runs', 'vomits', 'yells', 'spanks'],
    line3Verb: ['dies', 'sings', 'showers', 'crawls'],
    line4Verb: ['licks', 'tickles', 'kills', 'bites'],
}

const loveAdjectives = {
    line1Adj: ['fluffy', 'squishy', 'wobbly', 'goopy'],
    line2Adj: [ 'crusty', 'soggy', 'toasty', 'gravy-scented'],
    line3Adj: ['pickle-colored', 'glitter-infested', 'hard','smelly'],
    line4Adj: ['itchy', 'annoying', 'abandoned', 'spat']
}

let line1 = [];
let line2 = [];
let line3 = [];
let line4 = [];

for (let wording in loveMessages) {
    let indexedWord = randomWord(loveMessages[wording].length) 
   
   switch (wording) {
   case 'line1Verb':  // the below code extracts the value in each key in a random index
   line1.push(`she`, `${loveMessages[wording][indexedWord]}`, `your`, `name`, `in`, `the`, `adjective`, `air,`)
   break;
   case 'line2Verb':
   line2.push(`she`, `${loveMessages[wording][indexedWord]}`, `like`, `adjective`, `stars,`)
   break;
   case 'line3Verb':
   line3.push(`and`, `my`, `heart`, `${loveMessages[wording][indexedWord]}`, `in`, `adjective`, `pleas,`) 
   break;
   case 'line4Verb':
   line4.push(`Your`, `touch`, `${loveMessages[wording][indexedWord]}`, `my`, `adjective`, `soul.`)
   break;
   default:
   console.log("Not enough Information")   
} 
           
}

let index1 =[]
let index2 =[]
let index3 =[]
let index4 =[]
for (let i = 0; i < 4; i++) {
    index1 = line1.indexOf('adjective');
    index2 = line2.indexOf('adjective');
    index3 = line3.indexOf('adjective');
    index4 = line4.indexOf('adjective');
}




for (words in loveAdjectives) {
    let ramWord = randomWord(loveAdjectives[words].length)
    switch (words) {
    case 'line1Adj':
    line1.splice(index1, 1, loveAdjectives[words][ramWord])
    break;
    case 'line2Adj':
    line2.splice(index2, 1, loveAdjectives[words][ramWord])
    break;
    case 'line3Adj':
    line3.splice(index3, 1, loveAdjectives[words][ramWord])  
    break;
    case 'line4Adj':
    line4.splice(index4, 1, loveAdjectives[words][ramWord])
    break;
    default:
    console.log('not enough information')          

    }
}

const all = [line1, line2, line3, line4];

const finalMessage = all.flat().join(' ');

function finalLoveMessage () {
    console.log(finalMessage);
}

finalLoveMessage();