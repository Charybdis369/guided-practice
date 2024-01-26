let myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"]

myInstruments.push("tuba", "bassoon")

myInstruments.splice(2, 1);

myInstruments.unshift("saxophone")

console.log(myInstruments)

//.splice(position, numToRemove, anything_added)

//myInstruments.splice(5, 0, "piccolo")

/**
 * @param {string[]} instruments an array of instruments
 * @returns {string[]} the first instrument
 */
function getFirstInstrument(instruments) {
  return instruments[instruments.length - 1];
}

console.log(getFirstInstrument(myInstruments))

function getFirstThreeInstruments(instruments) {
    const output = [];
    output.push(instruments[0]);
    output.push(instruments[1]);
    output.push(instruments[2]);
    return output; 
}

console.log(getFirstThreeInstruments(myInstruments))

//displays first three instruments with a loop

function getFirstThreeInstrumentsWithLoop(instruments) {
    const output = [];
    for (let i = 0; i < 3; i++) {
        output.push(instruments[i]);
    }
    return output;
}

console.log (getFirstThreeInstrumentsWithLoop(myInstruments))

//displays all instruments that start with t

function getTInstruments(instruments) {
    const output = [];
    for (let i = 0; i < instruments.length; i++) {
     const instrument = instruments[i];

      if (instrument[0] === "t") {
        output.push(instrument);
      }
    }
   return output;
}

console.log (getTInstruments(myInstruments))

function getLongestNamedInstruments(instruments) {
    let longestInstrument = "";
    for (const instrument of instruments) {
        if (instrument.length > longestInstrument.length) {
            longestInstrument = instrument;
        }
    }
    return longestInstrument;
}

console.log (getLongestNamedInstruments(myInstruments))







