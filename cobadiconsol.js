// promise
// object yang merepresentasikan keberhasilan/kegagalan sebuah event yg asyncronus di masa yg akan datang
// janji (terpenuhi/ingkar)
// statate (fulfilled/rejected/pending)
// menghasilkan callback (resolve/reject/finally)
// aksi (then/catch/finally) 
// .then (aksi yg di tepati)
// .catch(aksi yg di ingkari)
// .finally(aksi yg di pending beberapa waktu sebelum di tepati)
// .promise.all(jalankan beberapa seklaigus api/banyak janji)

// ini script contoh di console

// let ditepati = false;  di tangkap .catch or true .than 
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//  if (ditepati) {
//   resolve('janji ditepati');

//  } else {
//   reject('janji tidak di tepati');
//  }
// });

// console.log(janji1);cara pangil1

// janji1
//  .then(res => console.log('ok :' + res))
//  .catch(res => console.log('not ok :' + res));cara pangil2

// contoh 2
// let ditepati = true;
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//  if (ditepati) {
//   setTimeout(() => {
//    resolve('janji di tepati');
//   }, 2000)

//  } else {
//   setTimeout(() => {
//    resolve('janji tidak tepati');
//   }, 3000)

//  }
// });


// console.log(janji2.then(() => { console.log(janji2) }));cara pangil1
// janji2
//  .then(res => console.log('ok :' + res))
//  .catch(res => console.log('not ok :' + res));cara pangil2


// console.log('mulai');
// janji2
//  .finally(() => console.log('selesai menunggu'))
//  .then(res => console.log('ok :' + res))
//  .catch(res => console.log('not ok :' + res));
// console.log('selesai');

const drama = new Promise(resolve => {
 setInterval(() => {
  resolve([{
   judul: "drama",
   director: "agus",
   actor: "adit"
  }]);
 }, 1000);

});

const film = new Promise(resolve => {
 setInterval(() => {
  resolve([{
   judul: "avengers",
   director: "agus",
   actor: "adit"
  }]);
 }, 5000);

});


Promise.all([film, drama])
 // .then(res => console.log(res));
 .then(res => {
  const [film, drama] = res;
  console.log(film);
  console.log(drama);
 });