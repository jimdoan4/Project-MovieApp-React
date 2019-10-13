import axios from 'axios'

export function queryTVMaze (query) {
  console.log('about to search movies')
  const term = query.replace(/\s/, "+"); // replace any white space characters with a "+"
  const url = "https://api.tvmaze.com/search/shows?q=" + term; // acquiring api URL

  return axios.get(url).then(response => {  // HTTP request to get the data 
    console.log('raw response:', response)
    return response.data.map(result => {
      const {name, image, cast, genres, rating} = result.show;
      return {  // returning data from specific selection
        name,
        genres, 
        cast: cast && cast.person.name,
        rating: rating && rating.average,
        image: image && image.medium 
               || 'https://cdn.browshot.com/static/images/not-found.png'
        
      }
    })
  });
}