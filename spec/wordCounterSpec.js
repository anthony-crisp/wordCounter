describe('wordCounter', function(){

  describe('on initialisation', function(){

    it('has an empty Array', function(){
      var  wordCounter = new WordCounter();
      expect(wordCounter.wordArray).toEqual([]);
    })

    it('has an empty Hash', function(){
      var wordCounter = new WordCounter();
      expect(wordCounter.wordHash).toEqual({})
    })
  });
});
