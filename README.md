# imdb-node-scraper

[![NPM](https://img.shields.io/npm/v/imdb-node-scraper.svg)](https://www.npmjs.com/package/imdb-node-scraper)

A node JS scraper for IMDB website for basic details

## Install
```
$ npm i --save imdb-node-scraper
```

## Example  


Getting list of movies by title.
```
const imdb = require('imdb-node-scraper');

imdb.searchMovie('fury')    // give the JSON arrary of moive list
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(errot);
});

//Output
[ 
      { image: 'https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_UX32_CR0,0,32,44_AL_.jpg',
        title: 'Fury',
        imdbID: 'tt2713180' },
      { image: 'https://m.media-amazon.com/images/M/MV5BNWUwNzYxYWEtYzM4OS00MTg0LWIwZjktMzc3MWUyZTQ0MjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX32_CR0,0,32,44_AL_.jpg',
        title: 'The Fury',
        mdbID: 'tt0077588' }
] 
```


Getting details of a paticular movie by imdbID.

```
const imdb = require('imdb-node-scraper');

imdb.getMovieDetails('tt2713180')     // give the JSON Object of movie details
    .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(errot);
 });
    
//Output
{ title: 'Fury (2014)',
  year: '2014',
  rating: '7.6',
  votes: '387,919',
  time: '2h 14min',
  poster: 'https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg',
  release: '31 October 2014 (India)',
  story: '1945, in World War II Germany, the tough Sergeant Don .........',
  writtenBy: 'Claudio Carvalho, Rio de Janeiro, Brazil' 
  }
```

# License

[MIT License]

### Used in https://torrentbazz.herokuapp.com