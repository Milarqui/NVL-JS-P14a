var imagenes = ["Accion.png","Animacion.png","Anime.jpeg","Aventura.png","Comedia.png","Drama.png","Historica.jpg","Horror.png","Scifi.png","Superheroe.jpg","Thriller.png","Western.png"]
var Generos = ["Accion","Animacion","Anime","Aventura","Comedia","Drama","Historica","Horror","Ciencia ficcion","Superheroe","Thriller","Western"]
var peliculas = [
  {
    "Nombre": "El señor de los anillos",
    "Genero": "Accion",
    "Direccion": "Peter Jackson"
  },
  {
    "Nombre": "Regreso al Futuro",
    "Genero": "Accion",
    "Direccion": "Robert Zemeckis"
  },
  {
    "Nombre": "Los increibles 2",
    "Genero": "Animacion",
    "Direccion": "Brad Bird"
  },
  {
    "Nombre": "Star Wars IV: Una nueva esperanza",
    "Genero": "Ciencia ficcion",
    "Direccion": "George Lucas"
  },
  {
    "Nombre": "Super 8",
    "Genero": "Ciencia ficcion",
    "Direccion": "J. J. Abrams"
  },
  {
    "Nombre": "En busca del arca perdida",
    "Genero": "Aventura",
    "Direccion": "Steven Spielberg"
  },
  {
    "Nombre": "Vengadores",
    "Genero": "Superheroe",
    "Direccion": "Joss Whedon"
  },
  {
    "Nombre": "Megamind",
    "Genero": "Animacion",
    "Direccion": "Tom McGrath"
  },
  {
    "Nombre": "The Last: Naruto The Movie",
    "Genero": "Anime",
    "Direccion": "Tsuneo Kobayashi"
  },
  {
    "Nombre": "La cabaña en el bosque",
    "Genero": "Horror",
    "Direccion": "Drew Goddard"
  },
  {
    "Nombre": "Con la muerte en los talones",
    "Genero": "Thriller",
    "Direccion": "Alfred Hitchcock"
  },
  {
    "Nombre": "El gigante de hierro",
    "Genero": "Animacion",
    "Direccion": "Brad Bird"
  },
  {
    "Nombre": "Los caballeros de la mesa cuadrada",
    "Genero": "Comedia",
    "Direccion": "Terry Gilliam y Terry Jones"
  },
  {
    "Nombre": "La princesa Mononoke",
    "Genero": "Anime",
    "Direccion": "Hayao Miyazaki"
  },
  {
    "Nombre": "RoboCop",
    "Genero": "Accion",
    "Direccion": "Paul Verhoeven"
  },
  {
    "Nombre": "Skyfall",
    "Genero": "Accion",
    "Direccion": "Sam Mendes"
  },
  {
    "Nombre": "Batman",
    "Genero": "Superheroe",
    "Direccion": "Tim Burton"
  },
  {
    "Nombre": "El amanecer de los muertos vivientes",
    "Genero": "Horror",
    "Direccion": "George Romero"
  },
  {
    "Nombre": "Alien, el octavo pasajero",
    "Genero": "Ciencia ficcion",
    "Direccion": "Ridley Scott"
  },
  {
    "Nombre": "Air Force One",
    "Genero": "Accion",
    "Direccion": "Wolfgang Petersen"
  },
  {
    "Nombre": "28 días después",
    "Genero": "Horror",
    "Direccion": "Danny Boyle"
  },
  {
    "Nombre": "Spiderman: Un nuevo universo",
    "Genero": "Superheroe",
    "Direccion": "Bob Persichetti, Peter Ramsey y Rodney Rothman"
  },
  {
    "Nombre": "American History X",
    "Genero": "Drama",
    "Direccion": "Tony Kaye"
  },
  {
    "Nombre": "Sillas de montar calientes",
    "Genero": "Comedia",
    "Direccion": "Mel Brooks"
  },
  {
    "Nombre": "Lincoln",
    "Genero": "Historica",
    "Direccion": "Steven Spielberg"
  },
  {
    "Nombre": "Hasta que llego su hora",
    "Genero": "Western",
    "Direccion": "Sergio Leone"
  },
  {
    "Nombre": "La jungla de cristal",
    "Genero": "Accion",
    "Direccion": "John McTiernan"
  },
  {
    "Nombre": "El niño",
    "Genero": "Horror",
    "Direccion": "David Yarovesky"
  }
];
var target = document.getElementsByTagName("body")[0];
var lista = document.createElement("ul");
for (i in peliculas) {
  var pelicula = peliculas[i];
  var linea = document.createElement("li");
  var imagen = document.createElement("img");
  var value = imagenes[Generos.indexOf(pelicula["Genero"])];
  imagen.setAttribute("src",value)
  linea.innerText = pelicula["Nombre"] + " (" + pelicula["Direccion"] + ") ";
  linea.append(imagen);
  lista.appendChild(linea);
}
target.appendChild(lista);
