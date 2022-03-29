class Multimedia {
    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }

    setInicio() {
        return `Este método es para realizar un cambio en la URL del video`;
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        cargarVideo(this.url, this.id);
    }

    setInicio(tiempo) {
        let videito = document.getElementById(this.id);
        videito.setAttribute("src", `${this.url}?start=${tiempo}`)
    }
}


const cargarVideo = (() => {
    const establecervideo = (url, id) => {
        let cuadrodevideo = document.getElementById(id);
        cuadrodevideo.setAttribute('src', url);
    };
    return establecervideo;
})();

let musica = new Reproductor("https://www.youtube.com/embed/p7z5BJZ95hI", 'musica');
let pelicula = new Reproductor("https://www.youtube.com/embed/VYHeZCEFwhI", 'peliculas');
let serie = new Reproductor("https://www.youtube.com/embed/et2Llrpwfx8", 'series');


musica.playMultimedia();
musica.setInicio(50);
pelicula.playMultimedia();
pelicula.setInicio(40)
serie.playMultimedia();
serie.setInicio(30);
