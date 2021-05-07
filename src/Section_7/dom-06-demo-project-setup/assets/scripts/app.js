// const addMovieModal = document.getElementById('add-modal');
// // another 2 ways
// // const addMovieModal = document.querySelector('#add-modal');
// // const addMovieModal = document.body.children[1];
// // console.log(addMovieModal);

// const backdrop = document.getElementById('backdrop');
// // another way
// // const backdrop = document.body.firstElementChild;

// const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
// const confirmAddMovieButton = cancelAddmovie.nextElementSibling;
// const userInputs = addMovieModal.querySelectorAll('input');
// // const userInputs = addMovieModal.getElementsByTagName('input');
// const toggleBackdrop = () => {
//     // classList.toggle() => this actually opens the model if it's current status is closed
//     //                       or actually closes the model if it's current status is opened
//     backdrop.classList.toggle('visible');
// }

// const startAddMovieButton = document.querySelector('header button');
// // another way
// // const startAddMovieButton = document.querySelector('header').lastElementChild;

// // Hint on classList :
// // The classList property returns the class name(s) of an element, as a DOMTokenList object.
// // This property is useful to add, remove and toggle CSS classes on an element.
// // The classList property is read-only, however, you can modify it by using the add() and remove() methods.
// const toggleMovieModal = () => {
//     addMovieModal.classList.toggle('visible');
//     // toggleBackdrop();
// };

// const cancelAddmovieHandler = () => {
//     toggleMovieModal();
// }

// const addMovieHandler = () => {
//     const titleValue = userInputs[0].value;
//     const imageUrlValue = userInputs[1].value;
//     const ratingValue = userInputs[2].value;

//     // trim() removes excess whitespaces before and after
//     if (
//       titleValue.trim() === "" ||
//       imageUrlValue.trim() === "" ||
//       ratingValue.trim() === "" ||
//       +ratingValue < 1 ||
//       +ratingValue > 5
//     ) {
//       alert("Please enter valid values (rating between 1 and 5).");
//     }
// };

// const backdropClickHandler = () => {
//     toggleMovieModal();
// }

// startAddMovieButton.addEventListener('click', toggleMovieModal);
// backdrop.addEventListener('click',backdropClickHandler);
// cancelAddMovieButton.addEventListener('click',cancelAddmovieHandler);
// confirmAddMovieButton.addEventListener('click',addMovieHandler);





// .......

// const addMovie = document.getElementById('add-modal');
// const addMovieButton = document.querySelector('header button');
// const backDrop = document.getElementById('backdrop');
// const cancelMovieButton = addMovie.querySelector('.btn--passive');
// const addNewMovie = cancelMovieButton.nextElementSibling;
// const userInputs = addMovie.querySelectorAll('input');
// const entryTextSection = document.getElementById('entry-text');
// const moviesList = [];

// const updateUI = () => {
//     if (moviesList.length === 0) {
//         entryTextSection.style.display = 'block';
//     }else {
//         entryTextSection.style.display = 'none';
//     }
// };

// const renderNewMovieElement = (title, url, rating) => {
//     const newMovieElement = document.createElement('li');
//     newMovieElement.className = 'movie-element';
//     newMovieElement.innerHTML = `
//         <div class="movie-element__image">
//             <img src="${url}" alt="${title}">
//         </div>
//         <div class="movie-element__info">
//             <h2>${title}</h2>
//             <p>${rating}/5 stars</p>
//         </div>
//     `;
//     const listRoot = document.getElementById('moive-list');
//     listRoot.append(newMovieElement);
// };

// const backDropHandler = () => {
//     backDrop.classList.toggle('visible');
// }

// const toggleMovieModal = () => {
//     addMovie.classList.toggle('visible');
//     backDropHandler();
// };

// const clearMovie = () => {
//     for(const usrIns of userInputs) {
//         usrIns.value = '';
//     }
// };

// const cancelMovieHandler = () => {
//     toggleMovieModal();
//     clearMovie();
// };

// const addMovieHandler = () => {
//     const movieTitle = userInputs[0].value;
//     const movieURL = userInputs[1].value;
//     const movieRating = userInputs[2].value;

//     if (
//       movieTitle.trim() === '' ||
//       movieURL.trim() === '' ||
//       movieRating.trim() === '' ||
//       +movieRating < 1 ||
//       +movieRating > 5 
//     ) {
//         alert('Please enter all the fields and movie rating range between 1 and 5');
//     }

//     const newMovie = {
//         title : movieTitle,
//         url : movieURL,
//         rating : movieRating
//     };

//     moviesList.push(newMovie);
//     console.log(moviesList);
//     toggleMovieModal();
//     clearMovie();
//     renderNewMovieElement(newMovie.title, newMovie.URL, newMovie.rating);
//     updateUI();
// };

// addMovieButton.addEventListener('click',toggleMovieModal);
// backDrop.addEventListener('click',toggleMovieModal);
// cancelMovieButton.addEventListener('click',cancelMovieHandler);
// addNewMovie.addEventListener('click',addMovieHandler);

const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const renderNewMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  // function() {}
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
