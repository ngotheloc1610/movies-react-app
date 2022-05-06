const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "a815d42a2a99649d22721b0843dc52c2",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
