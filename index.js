/* 
*/
const elements = [
    {
        name: "Harry Potter e la Pietra Filosofale",
        type: "movie",
        year: 2001,
        genre: "Fantasy",
        rating: 7.6
    },
    {
        name: "Harry Potter e la Camera dei Segreti",
        type: "movie",
        year: 2002,
        genre: "Fantasy",
        rating: 7.4
    },
    {
        name: "Godzilla vs. Kong",
        type: "movie",
        year: 2021,
        genre: "Fantascienza",
        rating: 6.4
    },
    {
        name: "Firebird",
        type: "movie",
        year: 2021,
        genre: "Drama",
        rating: 6.5
    },
    {
        name: "Interstellar",
        type: "movie",
        year: 2014,
        genre: "Fantascienza",
        rating: 8.6
    },
    {
        name: "The Big Bang Theory",
        type: "tv",
        year: 2007,
        genre: "Commedia",
        rating: 8.1,
        seasons: 12
    },
    {
        name: "Once Upon a Time",
        type: "tv",
        year: 2011,
        genre: "Fantasy",
        rating: 7.7,
        seasons: 7
    },
    {
        name: "Modern Family",
        type: "tv",
        year: 2009,
        genre: "Commedia",
        rating: 8.4,
        seasons: 11
    },
    {
        name: "Red, White & Royal Blue",
        type: "movie",
        year: 2023,
        genre: "Romance",
        rating: 8.4    
    }
]

/* Creare una classe Movie che contenga le informazioni sopra indicate. */
class Movie {
    constructor(name, type, year, genre, rating) {
        this.name = name;
        this.type = type;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
    }
    toString() {
        return `${this.name} è un film di genere ${this.genre}. E’ stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
    }
}

/* Creare una classe TvSeries che estenda la classe Movie e ne aggiunta la proprietà seasons. */

class TvSeries extends Movie {
    constructor(name, type, year, genre, rating, seasons) {
        super(name, type, year, genre, rating);
        this.seasons = seasons;
    }
    toString() {
        return `${this.name} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`;
    }
}

/* Tramite la funzione .map(), creare un nuovo array dove per ogni elemento dell’array di oggetti viene creata un istanza della classe Movie o TvSerie in base al type e salvata nel nuovo array. */

const newElements = elements.map((element) => {
    if(element.type === "movie") {
        return new Movie(element.name, element.type, element.year, element.genre, element.rating);
    } else if(element.type === "tv") {
        return new TvSeries(element.name, element.type, element.year, element.genre, element.rating, element.seasons);
    }
})

/* Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere. Prevedere un argomento per la lista dei film ed uno per il genere. */

const getAverageRating = (type, genre) => {
    let total = 0;
    let numberOfElements = 0;
    newElements.map((element) => {
        if(element.type === type && element.genre === genre) {
            numberOfElements++;
            total += element.rating;
        }
    })

    return `Media dei voti per il genere ${genre}: ${(total / numberOfElements).toFixed(1)}`;
}

/* Creiamo una funzione che restituisca la lista di tutti i generi dei film, senza che questi si ripetano. */

const getGenreList = () => {
    const list =  []
    newElements.forEach((element) => { 
        if(!list.includes(element.genre)) {
            list.push(element.genre)
        }
    })

    return list;
}

/* Creiamo una funzione che filtri i film in base ad un genere passato come argomento e ne ritorni un array con all’interno il risultato della funzione toString() di ogni film. */

const getFilteredByGenre = (genre) => {
    const list = newElements.map((element) => {
        if(element.genre.toLowerCase().trim() === genre.toLowerCase().trim()) {
            return element.toString()
        }
    })
    return list.filter((element) => element);
}

/* Eseguire tutto il codice da terminale tramite NodeJs e stampiamo nel terminale il risultato delle varie funzioni. */


console.log(getAverageRating("movie", "Fantasy"))
console.log(getGenreList())
console.log(getFilteredByGenre("Fantascienza"))
