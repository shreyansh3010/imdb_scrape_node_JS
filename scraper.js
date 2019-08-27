const request = require('request');
const cheerio = require('cheerio');

module.exports.searchMovie = async (title)=>{
    var searchTitle  = this.convertTitle(title);
    var movies = [];
    return new Promise((resolve,reject)=>{
        request(`https://www.imdb.com/find?s=tt&ttype=ft&ref_=fn_ft&q=${title}`, (error, response, html)=>{
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
                $('.findResult').each(function(i, element) {
                    const $image = $(element).find('td a img');
                    const $title = $(element).find('td.result_text a');
                    const imdbID = $title.attr('href').match(/title\/(.*)\//)[1];
                    const movie = {
                      image: $image.attr('src'),
                      title: $title.text(),
                      imdbID : imdbID

                    };
                    movies.push(movie);
                  });
                  resolve(movies);
            }
            else{
                reject('error occuerd');
            }
        });
    });
}

module.exports.getMovieDetails = (movieId)=>{
    return new Promise((resolve,reject)=>{
        request(`https://www.imdb.com/title/${movieId}/?ref_=fn_al_tt_1`,(error,response,html)=>{
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
                var movieDetails = {
                    rating : $('.ratingValue strong span').text()
                } 
                resolve(movieDetails);
            }
            else{
                reject('error occured');
            }
    });
    });
}

module.exports.convertTitle = (title)=>{
    var titleArray = title.split(" ");
    var searchTitle = "";
    for(var i=0;i<titleArray.length;i++){
        (i != titleArray.length-1) ? searchTitle += titleArray[i] + '+' :  searchTitle += titleArray[i];
    }
    return searchTitle;
}