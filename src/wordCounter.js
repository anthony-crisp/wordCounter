WordCounter = function() {
    this.wordArray = [];
    this.wordHash = {};
};

WordCounter.prototype.addWordsToArray = function (text) {
  this.wordArray = text.split(" ");
};
