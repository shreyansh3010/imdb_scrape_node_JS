const express = require('express');
const scraper = require('./scraper.js');

const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('hello Shreyansh !');
});

app.get('/search/:movieTitle',(req,res)=>{
    scraper.searchMovie(req.params.movieTitle)
    .then((movies)=>{
        res.send(movies);
    })
    .catch((error)=>{
        res.status(400).json({message : error})
    });
});

app.get('/movie/:movieTitle',(req,res)=>{
    scraper.getMovieDetails(req.params.movieTitle)
    .then((movies)=>{
        res.send(movies);
    })
    .catch((error)=>{
        res.status(400).json({message : error})
    });
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});