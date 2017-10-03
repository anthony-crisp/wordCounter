describe('wordCounter', function(){

  beforeEach(function(){
    wordCounter = new WordCounter
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
    var text = "hello world";

    it("adds each word to wordArray", function(){
      wordCounter.addWordsToArray(text);
      expect(wordCounter.wordArray).toEqual(["hello", "world"])
    })
  });

  describe("#countWords",function(){
    var text = "hello world";

    it("adds new words to wordHash as keys and their occurences as values", function(){
      wordCounter.addWordsToArray(text);
      wordCounter.countWords();
      expect(wordCounter.wordHash).toEqual({"hello":1, "world":1})
    })
  })
});
