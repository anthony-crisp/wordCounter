var fs = require('fs');
var filename = process.argv[2];
var wordCounter = require('../src/wordCounter');

function runCount(filename){
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    wordCounter = new WordCounter();
    wordCounter.addWordsToArray(data);
    wordCounter.countWords();
    wordCounter.addPrime();
    console.log(wordCounter.wordHashWithPrime);
  });
}

runCount(filename);
