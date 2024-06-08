
const temaBtn = document.querySelector("#temaBtn");

temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


const products = [
    {
      name: 'HP Essentials 255 G8 AMD',
      price: 289,
      stars: 4,
      reviews: 250,
      seller: 'PcComponentes',
      image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
    }, {
        name: 'Apple iPhone 15 Pro MAX (256 GB) - Titanio Natural',
        price: 1299,
        stars: 4.6,
        reviews: 1501,
        seller: 'Apple',
        image: 'https://m.media-amazon.com/images/I/81izs2I2UvL._AC_SX679_.jpg'
      }, {
        name: 'Apple iPhone 15 Pro (128 GB) - Titanio Natural',
        price: 1055,
        stars: 4.4,
        reviews: 1800,
        seller: 'Apple',
        image: 'https://m.media-amazon.com/images/I/61q2mXfw6ML._AC_SX466_.jpg'
      }, {
        name: 'Apple iPhone 15 Plus (128 GB) - Rosa',
        price: 969,
        stars: 4.6,
        reviews: 410,
        seller: 'Apple',
        image: 'https://m.media-amazon.com/images/I/51Ai5hxhWPL._AC_SX466_.jpg'
      }, {
        name: 'Apple iPhone 14 Plus (128 GB) - Azul',
        price: 739,
        stars: 4.6,
        reviews: 1558,
        seller: 'Apple',
        image: 'https://m.media-amazon.com/images/I/51xFCGFuXmL._AC_SX466_.jpg'
      }, {
        name: 'Apple iPhone 14 (128 GB) - Azul',
        price: 729,
        stars: 4.6,
        reviews: 5505,
        seller: 'Apple',
        image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SX466_.jpg'
      }, {
        name: 'Apple iPhone 15 (128 GB) - Rosa',
        price: 819,
        stars: 4.5,
        reviews: 1943,
        seller: 'Apple',
        image: 'https://m.media-amazon.com/images/I/71CW36JRavL._AC_SX466_.jpg'
      }]

const accesorios = [{
    name: 'Apple Funda Transparente con MagSafe para el iPhone 15 ​​​',
    price: 46.90,
    stars: 4.5,
    reviews: 1885,
    seller: 'Apple',
    image: 'https://m.media-amazon.com/images/I/410mLbFKZRL._AC_SX466_.jpg'
  }, {
    name: 'Apple Adaptador de Corriente USB-C de 20 W ​​​​​​​(Modelo Anterior)',
    price: 19.89,
    stars: 4.8,
    reviews: 71.279,
    seller: 'Apple',
    image: 'https://m.media-amazon.com/images/I/61OWls8Zc7L._AC_SX385_.jpg'
  }, {
    name: 'Apple AirPods Pro (2.ª generación) con Estuche de Carga MagSafe (USB‑C) ​​​​​​​',
    price: 234,
    stars: 4.7,
    reviews: 2239,
    seller: 'Apple',
    image: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX466_.jpg'
  },
];


  const musicSection = document.querySelector("#musicSection");

  
  for (const product of products) {

    const article = document.createElement("article");
    //Creamos un h2
    const h2 = document.createElement("h2");
    //Le damos texto al h2
    h2.textContent = product.name;
    //Y lo metemos en el articulo
    article.appendChild(h2);
    //Creamos una p
    const p = document.createElement("p");
    //Le damos contenido al parrafo juntando el artista con el año
    p.textContent = "Precio: " + product.price + " - " + product.seller;
    //Y lo metemos en el articulo
    article.appendChild(p);
    console.log(article);
    //Creamos una imagen vacia
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    //Y lo metemos en el articulo
    article.appendChild(image);
    //Cada uno de estos articulos lo metemos en la seccion que recuperamos antes del bucle
    musicSection.appendChild(article);
  }

  const acces = document.querySelector("#acces");

  
  for (const acces of accesorios) {

    const article = document.createElement("article");
    //Creamos un h2
    const h2 = document.createElement("h2");
    //Le damos texto al h2
    h2.textContent = acces.name;
    //Y lo metemos en el articulo
    article.appendChild(h2);
    //Creamos una p
    const p = document.createElement("p");
    //Le damos contenido al parrafo juntando el artista con el año
    p.textContent = "Precio: " + acces.price + " - " + acces.seller;
    //Y lo metemos en el articulo
    article.appendChild(p);
    console.log(article);
    //Creamos una imagen vacia
    const image = document.createElement("img");
    image.src = acces.image;
    image.alt = acces.name;
    //Y lo metemos en el articulo
    article.appendChild(image);
    //Cada uno de estos articulos lo metemos en la seccion que recuperamos antes del bucle
    musicSection.appendChild(article);
  }

const footer = document.createElement("footer");
footer.textContent = "Copyright Amazing - 2024";
const main = document.querySelector("main");
main.appendChild(footer);
console.log(footer)