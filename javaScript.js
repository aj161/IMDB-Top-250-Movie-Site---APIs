const fetchPromise = fetch('https://imdb-api.com/en/API/Top250Movies/k_41e87kr4');


//For IMDB API use 'https://imdb-api.com/en/API/Top250Movies/k_41e87kr4'
//Use FAKE API at 'https://mocki.io/v1/18bec0ff-85b6-4902-bcdf-aed6a9128dc9' is IMDB API Calls exceeded

let movies = document.querySelector('div');

fetchPromise.then((response) => {
  const dataJSON = response.json();
  dataJSON.then((array) => {
      console.log(array)
    
    console.log(array.items.length);
    let movieList = array.items;

    movieList.forEach(element => {
    movies.insertAdjacentHTML('beforeend', `    
    <article class="movieCard">
      <img src="${element.image}" alt="Image" />
      <div class="movieCardDetails">
        <h3>${element.title}</h3>
        <h4>${element.year}</h4>
          <p>IMDB Rating: ${element.imDbRating}</p>
      </div>`)
  });
  })
});