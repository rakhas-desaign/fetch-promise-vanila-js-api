// fetch(resources,init);
// resources= url->alamat dari sumber yg akan di ambil/request object->representasi permintaan sumber

// init(optional)konfigurasi tambahan pada sebuah request berbentuk object/isi dari init sebuah method
// method,headers,body,mode,cache,referrer,referrerPolicy,integrity,keepalive,signal

// response (propery)
// headers,ok,redirect,status,statusText,type,url,body
// Response(method)
// clone(),error(),redirect(),blob(),formData(),json(),text()

const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', function () {
 const inputKeyword = document.querySelector('.input-keyword');
 fetch('http://www.omdbapi.com/?apikey=b8b8bddd&s=' + inputKeyword.value)
  .then(res => res.json())
  .then(res => {
   const movies = res.Search;
   let cards = '';
   movies.forEach(m => cards += showCards(m));
   const movieContainer = document.querySelector('.movies-container');
   movieContainer.innerHTML = cards;


   // ambil detail film
   const modalDetaiBtn = document.querySelectorAll('.modal-detail-button');
   modalDetaiBtn.forEach(btn => {
    btn.addEventListener('click', function () {
     const imdbid = this.dataset.imdbid;
     fetch('http://www.omdbapi.com/?apikey=b8b8bddd&i=' + imdbid)
      .then(res => res.json())
      .then(m => {
       const movieDetail = showMoviesDetail(m);
       const modalBody = document.querySelector('.modal-body');
       modalBody.innerHTML = movieDetail;

      });
    });
   });

  });
});




function showCards(m) {
 return `
<div class="col md-4 my-2">
             <div class="card">
                 <img src="${m.Poster}" class="card-img-top" alt="">
                 <div class="card-body">
                     <h5 class="card-title ">${m.Title}</h5>
                     <h6 class="card-subtitle text-muted mb-2">${m.Year}</h6>


                     <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#exampleModal" data-imdbid="${m.imdbID}">show detail</a>
                 </div>
             </div>
         </div>`;
};

function showMoviesDetail(m) {
 return `
 <div class="container-fluid">
  <div class="row">
      <div class="col-md-3">
          <img src="${m.Poster}" alt="gambar" class="img-fluid">
      </div>
      <div class="col-md">
          <ul class="list-group">
              <li class="list-group-item">
                  <h2>${m.Title}</h2>
              </li>
              <li class="list-group-item"><strong>DIRECTOR::</strong>${m.Director}</li>
              <li class="list-group-item"><strong>RELEASED::</strong>${m.Released}</li>
              <li class="list-group-item"><strong>GENRE::</strong>${m.Genre}</li>
              <li class="list-group-item"><strong>ACTOR::</strong>${m.Actors}</li>
              <li class="list-group-item"><strong>PLOT::</strong>${m.Plot}</li>
          </ul>
      </div>
   </div>
  </div>`;
};
