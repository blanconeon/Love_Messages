
function randomWord (num) {
 return Math.floor(Math.random() * num);
}

const loveMessages = {
    line1Verb: ['farts', 'defecates', 'slaps', 'burns'],
    line2Verb: ['stings', 'vomits', 'yells', 'spanks'],
    line3Verb: ['dies', 'sings', 'showers', 'crawls'],
    line4Verb: ['licks', 'tickles', 'kills', 'bites'],
}

const loveAdjectives = {
    line1Adj: ['fluffy', 'squishy', 'wobbly', 'goopy'],
    line2Adj: [ 'crusty', 'soggy', 'toasty', 'sewage-scented'],
    line3Adj: ['poop-colored', 'glitter-infested', 'sour','smelly'],
    line4Adj: ['itchy', 'annoying', 'abandoned', 'spat']
}

let theLine = [];


for (let wording in loveMessages) {
    let indexedWord = randomWord(loveMessages[wording].length) 
   
   switch (wording) {
   case 'line1Verb':  // the below code extracts the value in each key in the random index
   theLine.push(`she`, `${loveMessages[wording][indexedWord]}`, `your`, `name`, `in`, `the`, `adjective`, `air,`)
   break;
   case 'line2Verb':
   theLine.push(`she`, `${loveMessages[wording][indexedWord]}`, `like`, `adjective`, `stars,`)
   break;
   case 'line3Verb':
   theLine.push(`and`, `my`, `heart`, `${loveMessages[wording][indexedWord]}`, `in`, `adjective`, `pleas,`) 
   break;
   case 'line4Verb':
   theLine.push(`Your`, `touch`, `${loveMessages[wording][indexedWord]}`, `my`, `adjective`, `soul.`)
   break;
   default:
   console.log("Not enough Information")   
} 
           
}
//console.log(theLine);

let theIndex =[]
let adjective = ['adjective']
for (let i = 0; i < theLine.length; i++) {
    if (adjective.includes(theLine[i])) {
        theIndex.push(i);
    }
   
}

theIndex = theIndex.flat();
//console.log(theIndex);
//notice 'adjective is compares to the array word as a string not as an array beacuse when comparing a string in an array to an array it would not work. 
/*let adjective = 'adjective' //alternative for loop for the above 
for (let i = 0; i < theLine.length; i++) { 
    if (theLine[i] === adjective) {
        theIndex.push(i);
    }*/


for (words in loveAdjectives) {
    let ramWord = randomWord(loveAdjectives[words].length)
    switch (words) {
    case 'line1Adj':
    theLine.splice(theIndex[0], 1, loveAdjectives[words][ramWord])
    break;
    case 'line2Adj':
    theLine.splice(theIndex[1], 1, loveAdjectives[words][ramWord])
    break;
    case 'line3Adj':
    theLine.splice(theIndex[2], 1, loveAdjectives[words][ramWord])  
    break;
    case 'line4Adj':
    theLine.splice(theIndex[3], 1, loveAdjectives[words][ramWord])
    break;
    default:
    console.log('not enough information')          

    }
}

const finalMessage = theLine.join(' ');

function finalLoveMessage () {
    console.log(finalMessage);
}

finalLoveMessage()