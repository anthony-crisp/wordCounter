WordCounter = function() {
    this.wordArray = [];
    this.wordHash = {};
};

WordCounter.prototype.addWordsToArray = function (text) {
  this.wordArray = text.split(" ");
};

WordCounter.prototype.countWords = function () {
  for (var index = 0; index < this.wordArray.length; index ++) {
    var word = this.wordArray[index];
    if (this.wordHash[word] === undefined) {
      this.wordHash[word] = 1;
    } else {
      this.wordHash[word] ++;
    }
  }
};
