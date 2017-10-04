WordCounter = function() {
  this.wordArray = [];
  this.wordHash = {};
};

WordCounter.prototype.addWordsToArray = function(text) {
  this.wordArray = text.replace(/[^\w\s]|_/g, "")
    .split(/\s+/);
};

WordCounter.prototype.countWords = function() {
  for (var index = 0; index < this.wordArray.length; index++) {
    var word = this.wordArray[index].toLowerCase();
    if (this.wordHash[word] === undefined) {
      this.wordHash[word] = 1;
    } else {
      this.wordHash[word]++;
    }
  }
};
WordCounter.prototype.isPrime = function(value) {
    var start = 2;
      while (start <= Math.sqrt(value)) {
        if (value % start++ < 1) return false;
      }
     return value > 1;
 };
