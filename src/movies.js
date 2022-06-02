// The `movies` array from the file `src/data.js`.

const movies = require("./data");



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const todosDirectores = movies.map((film)=>{
    return film.director
})
return todosDirectores
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(stevenDramaMovies) {
  const howManyMovies= stevenDramaMovies.filter((film)=>{
   return film.director==="Steven Spielberg"&&film.genre.includes("Drama")
  
  })
  return howManyMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;}/*no entiendo porque no funciona abajo(adentro de la funcion) y aqui si */
  const sumaScores=movies.reduce((acumuladora,valorActualScore)=>{
    if(valorActualScore.score){
      return acumuladora+valorActualScore.score;
    }else{return acumuladora;}
  },0);
  let promedio= sumaScores/movies.length;
  return parseFloat(promedio.toFixed(2));/*to fixed me devolvia string y parseFloat()sirve para volverlo un numero*/
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const pelisDrama= movies.filter((drama)=> {
    return drama.genre.includes("Drama")
  });
  let media= scoresAverage(pelisDrama);
  return media
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}/*no hay manera, lo intento el finde*/

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const findTitles = movies.map((peli) => peli.title);
  return findTitles.slice(0,20) 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const juntaPelis=movies.reduce((acumuladora,valorActualDuration)=>{
    if(valorActualDuration.duration){
      return acumuladora+valorActualDuration.duration;
    }else{return acumuladora;}
  },0);
  let aMinutos=juntaPelis*60;
  return aMinutos/*me va a devolver NaN porque duration es un string!...como lo paso de string
   a horas y minutos o aunque sea a numeros? menuda fumada de ejercicio XD */
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
