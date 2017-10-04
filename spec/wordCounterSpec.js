describe('wordCounter', function() {

beforeEach(function() {
  wordCounter = new WordCounter
  text = "hello world"
  textWithWhitespace = "hello     world"
  punctuatedText = "hello,. ;:world!?*"
  capitalisedText = "Hello WORLD hello World"
});

describe('on initialisation', function() {

  it('has an empty Array', function() {
    expect(wordCounter.wordArray).toEqual([]);
  })

  it('has an empty Hash', function() {
    expect(wordCounter.wordHash).toEqual({})
  })
});

describe("#addWordsToArray", function() {
  it("adds each word to wordArray", function() {
    wordCounter.addWordsToArray(text);
    expect(wordCounter.wordArray).toEqual(["hello", "world"])
  })

  it("ignores all types of whitespace", function() {
    wordCounter.addWordsToArray(textWithWhitespace);
    expect(wordCounter.wordArray).toEqual(["hello", "world"])
  });

  it("ignores punctuation", function() {
    wordCounter.addWordsToArray(punctuatedText);
    expect(wordCounter.wordArray).toEqual(["hello", "world"])
  });

  it("ignores capitalisation", function() {
    wordCounter.addWordsToArray(capitalisedText);
    wordCounter.countWords();
    expect(wordCounter.wordHash).toEqual({
      "hello": 2,
      "world": 2
    })
  });
});

describe("#countWords", function() {
  it("adds new words to wordHash as keys and their occurrences as values", function() {
    wordCounter.addWordsToArray(text);
    wordCounter.countWords();
    expect(wordCounter.wordHash).toEqual({
      "hello": 1,
      "world": 1
    })
  })
})
describe("#isPrime", function() {
  it("checks if 1 is prime number", function() {
    expect(wordCounter.isPrime(1)).toEqual(false);
  })
  it("checks if 2 is prime number", function() {
    expect(wordCounter.isPrime(2)).toEqual(true);
  })
  it("checks if 4 is prime number", function() {
    expect(wordCounter.isPrime(4)).toEqual(false);
  })
})
describe("#addPrime", function() {
  it("states if word occurrence is prime", function() {
    wordCounter.addWordsToArray(text);
    wordCounter.countWords();
    wordCounter.addPrime();
    expect(wordCounter.wordHashWithPrime).toEqual({"hello":[1, false], "world":[1, false]})
    })
  });
});
