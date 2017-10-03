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
});
