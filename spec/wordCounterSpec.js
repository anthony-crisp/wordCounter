describe('wordCounter', function(){

  beforeEach(function(){
    wordCounter = new WordCounter
    text = "hello world"
    textWithWhitespace = "hello     world"
 });

  describe('on initialisation', function(){

    it('has an empty Array', function(){
      expect(wordCounter.wordArray).toEqual([]);
    })

    it('has an empty Hash', function(){
      expect(wordCounter.wordHash).toEqual({})
    })
  });

  describe("#addWordsToArray", function(){
    it("adds each word to wordArray", function(){
      wordCounter.addWordsToArray(text);
      expect(wordCounter.wordArray).toEqual(["hello", "world"])
    })

    it("ignores all types of whitespace", function(){
        wordCounter.addWordsToArray(textWithWhitespace)
        expect(wordCounter.wordArray).toEqual(["hello", "world"])
      });
  });

  describe("#countWords",function(){
    it("adds new words to wordHash as keys and their occurrences as values", function(){
      wordCounter.addWordsToArray(text);
      wordCounter.countWords();
      expect(wordCounter.wordHash).toEqual({"hello":1, "world":1})
    })
  })
});
