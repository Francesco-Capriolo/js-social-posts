/* Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: id del post, numero progressivo da 1 a n nome autore, foto autore, data in formato americano(mm - gg - yyyy), testo del post, immagine(non tutti i post devono avere una immagine), numero di likes.

Non è necessario creare date casuali, per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.Unsplash(https: //unsplash.it/300/300?image=<id>)

        Milestone 2 - Prendendo come riferimento il layout di esempio presente nell 'html, stampiamo i post del nostro feed.

        Milestone 3 - Se clicchiamo sul tasto "Mi Piace"
        cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like. **

        BONUS 1 - Formattare le date in formato italiano(gg / mm / aaaa) 2 - Gestire l 'assenza dell'
        immagine profilo con un elemento di fallback che contiene le iniziali dell 'utente (es. Luca Formicola > LF).
        3 - Al click su un pulsante "Mi Piace"
        di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.  */


const posts = [{
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const newPosts = [{
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=",
        "author": {
            "name": "Alessandro Biricco",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 15,
        "created": "2021-03-05"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=",
        "author": {
            "name": "Alessio Romani",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 85,
        "created": "2021-03-05"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=",
        "author": {
            "name": "Alex Codotto",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 43,
        "created": "2021-03-05"
    },
    {
        "id": 9,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=",
        "author": {
            "name": "Francesco Capriolo",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 42,
        "created": "2021-03-05"
    },
    {
        "id": 10,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=",
        "author": {
            "name": "Alessandro Piave",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 100,
        "created": "2021-03-05"
    },
    {
        "id": 12,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=",
        "author": {
            "name": "Alessandra Genovese",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 55,
        "created": "2021-03-05"
    }
];

posts.push(...newPosts);

let carouselContent = "";

function convertDigitIn(str) {
    return str.split('-').reverse().join('/');
}

for (let i = 0; i < posts.length; i++) {
    carouselContent += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class = "profile-pic" src="${posts[i]["author"]["image"]}"
                        alt = "${posts[i]["author"]["name"]}">
                    </div>
                    <div class="post-meta__data">
                        <div class = "post-meta__author">${posts[i]["author"]["name"]}</div>
                        <div class="post-meta__time">${convertDigitIn(posts[i]["created"])}</div>
                    </div>                    
                </div>
            </div>
            <div class = "post__text">${posts[i]["content"]}</div>
            <div class="post__image">
                <img src="${posts[i]["media"]}" alt= "">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id = "like-counter-1"
                        class = "js-likes-counter">${posts[i]["likes"]}</b> persone
                    </div>
                </div> 
            </div>            
        </div> `
};

const carouselWrapper = document.getElementById('container');
carouselWrapper.innerHTML = carouselContent;

//prendo lo span per cambiare il numero
let likes = document.querySelectorAll("b.js-likes-counter");

//prendo i vari bottoni per l'evento
const likesBtns = document.querySelectorAll("div.likes__cta");

//prendo le varie icone per cambiare il colore
const iconBtns = document.querySelectorAll("a.like-button");

//creo un array per sapere quale id post ho messo il like
const arrayId = [];

let count = false;

for (let i = 0; i < likesBtns.length; i++) {
    likesBtns[i].addEventListener("click", function () {
        //se contiene già la classe
        if (!iconBtns[i].classList.contains("like-button--liked")) {
            //aggiungo un 1 ogni volta che clicco
            posts[i]["likes"] += 1;
            //lo inserisco nell'html
            likes[i].innerHTML = posts[i]["likes"];
            console.log(posts[i]["likes"]);
            //inserisco quale id ho cliccato
            arrayId.push(posts[i]["id"]);
            console.log(arrayId);
            //aggiungo la classe per cambiare il colore
            iconBtns[i].classList.add("like-button--liked");
        } else {
            //elimino di un like ogni volta che clicco
            posts[i]["likes"] += -1;
            //lo inserisco nell'html
            likes[i].innerHTML = posts[i]["likes"];
            console.log(posts[i]["likes"]);
            //elimino quale id ho cliccato
            console.log(posts[i]["id"]);
            console.log(arrayId.indexOf(posts[i]["id"]));
            arrayId.splice(arrayId.indexOf(posts[i]["id"]));
            console.log(arrayId);
            //elimino la classe per cambiare il colore
            iconBtns[i].classList.remove("like-button--liked");
        }
    });
}