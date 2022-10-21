API_KEY = '8ZDWCzqq7DLLVy9klpx8pwNxRQvjVt3y'
url = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=cats`
const image = document.getElementsByClassName('image')[0]
const sec_img = document.getElementById('image')

fetch(url, {mode: 'cors'})
.then((response) => response.json())
.then((data) => image.src = data.data.images.original.url);

fetch(url, {mode: 'cors'})
.then((response) => response.json())
.then((data) => sec_img.src = data.data.images.original.url);
