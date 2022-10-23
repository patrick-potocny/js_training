const API_KEY = "8ZDWCzqq7DLLVy9klpx8pwNxRQvjVt3y";
const url = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=cats`;
const images = document.getElementsByClassName("image");

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function loadGifs(url, images) {
  for (const img of images) {
    console.log('f start');
    const response  = fetch(url, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    })
    console.log('f end');
  }
}

loadGifs(url, images)