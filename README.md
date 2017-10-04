WordCounter
===========

A javascript application that counts occurrences of words in a .txt file and outputs the resultant hash including whether the number of occurrences is a prime number.

Methodology
===========

## User Stories

```

As a user,
so that I can see the number of times a word appears in a txt file,
I want to be able to output the individual words and how many times it appears.


As a user,
Because I am curious, I would like to see if the occurrences of the words are prime numbers,
that is, if the number is divisible by only itself and 1.
```

### Part 1
First I created an Array and populated it with the individual words in a string.
Next I changed the split method to ignore whitespace.
Then I again changed the split method to ignore punctuation.
When I was sure that I was populating the Array with just words I implemented a function to count the occurrences and add the results to a Hash.

### Part 2
The second part of the exercise was to determine if the occurrences were primes, I then added this information to the Hash in the form of a boolean.

### Part 3
Until this point I had written the application in VanillaJS but had to add the Node 'require' module to read from a text file.

Usage
===============

### Technologies Used
- VanillaJS
- Jasmine
- Node.js

### Installation
- ```git clone https://github.com/anthony-crisp/wordCounter ```
- ```cd wordCounter```
- ```npm install```

### How to use
- run ```node lib/app.js lib/data/testText.txt``` (Test examples)
- run ```node lib/app.js lib/data/railway-children-by-e-nesbit.txt``` (Book as required by client)


### Running Tests
open SpecRunner.html
