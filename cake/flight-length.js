//  You've built an inflight entertainment system with on-demand movie streaming.

// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

const movieLengths = [125, 130, 135, 130, 141, 140];

function flightMovies(flightLength, movieLengths) {
  // by creating the set empty and added watched movies to it, we'll return a positive if two different movies of the same length add up to the sought time
  // this obviates the need to not incude the current movie in the set so that we aren't watching one movie twice
  const lengthSet = new Set();
  let soughtTime;
  for (let movie of movieLengths) {
    soughtTime = flightLength - movie;
    if (lengthSet.has(soughtTime) && soughtTime !== movie) {
      return true;
    }
    lengthSet.add(movie);
  }
  return false;
}

console.log(flightMovies(260, movieLengths));
// should return true
console.log(flightMovies(261, movieLengths));
// should return false
