const Movie = require('./models/Movie');

const movies = [
    { id: '1', name: 'Inception', director_name: 'Christopher Nolan', production_house: 'Warner Bros.', release_date: '2010-07-16', rating: 8.8 },
    { id: '2', name: 'The Dark Knight', director_name: 'Christopher Nolan', production_house: 'Warner Bros.', release_date: '2008-07-18', rating: 9.0 }
  ];
  
  const resolvers = {
    Query: {
      movies: () => movies,
      movie: (_, { id }) => movies.find(movie => movie.id === id),
    },
    Mutation: {
      addMovie: (_, { name, director_name, production_house, release_date, rating }) => {
        const movie = { id: `${movies.length + 1}`, name, director_name, production_house, release_date, rating };
        movies.push(movie);
        return movie;
      },
      updateMovie: (_, { id, name, director_name, production_house, release_date, rating }) => {
        let movie = movies.find(movie => movie.id === id);
        if (!movie) return null;
        movie = { ...movie, name, director_name, production_house, release_date, rating };
        return movie;
      },
      deleteMovie: (_, { id }) => {
        const movieIndex = movies.findIndex(movie => movie.id === id);
        if (movieIndex === -1) return null;
        const deletedMovie = movies.splice(movieIndex, 1);
        return deletedMovie[0];
      }
    }
  };
  
  module.exports = resolvers;
  