const API_KEY = "ff474237ea7fea21e4eb700c1a116733";

const requests = {
    fetchTrending: `/trending/all/week/?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv/?api_key=${API_KEY}&with-networks=213`,
    fetchTopRated: `/movie/top_rated/?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movies/?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie/?api_key=${API_KEY}}&with_genres=10749`,
    fetchDocumentaries: `/movie/upcoming/?api_key=${API_KEY}}`,

}

export default requests