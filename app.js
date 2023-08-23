const side = document.querySelector(".side");
const openBtn = document.querySelector(".openbtn");
const closeBtn = document.querySelector(".closebtn");

openBtn.addEventListener("click", function(){
    side.classList.toggle("showside");
})

closeBtn.addEventListener("click", function(){
    side.classList.remove("showside");
})
//movie page
const movie = [ 
    {
        id:1,
        name:"Spiderman: Across the Spider Verse",
        year:2023,
        rate:8.8,
        category:"Action",
        img:"images\\spiderman.jpeg"
    },  
    {
        id:2,
        name:"Barbie",
        year:2023,
        rate:7.4,
        category:"Romance",
        img:"images\\barbie.jpeg"
    },
    {
        id:3,
        name:"Red, White & Royal Blue",
        year:2023,
        rate:7.3,
        category:"Romance",
        img:"images\\red, white and royal blue.jpeg"
    },
    {
        id:4,
        name:"No Hard Feelings",
        year:2023,
        rate:6.5,
        category:"Romance",
        img:"images\\no hard feelings.jpeg"
    },
    {
        id:5,
        name:"Guardians of the Galaxy vol.3",
        year:2023,
        rate:8.0,
        category:"Action",
        img:"images\\guardians.jpeg"
    },
    {
        id:6,
        name:"Transformers:Rise of the Beast",
        year:2023,
        rate:6.1,
        category:"Action",
        img:"images\\transformers.jpeg"
    },
    {
        id:7,
        name:"They Cloned Tyrone",
        year:2023,
        rate:6.9,
        category:"Action",
        img:"images\\tyrone.jpeg"
    },
    {
        id:8,
        name:"Joy Ride",
        year:2023,
        rate:6.5,
        category:"Comedy",
        img:"images\\joy ride.jpeg"
    },
    {
        id:9,
        name:"Happiness for Beginners",
        year:2023,
        rate:6.0,
        category:"Comedy",
        img:"images\\happiness for beginner.jpeg"
    },
    {
        id:10,
        name:"Asteriod City",
        year:2023,
        rate:6.7,
        category:"Comedy",
        img:"images\\asteriod.jpeg"
    },
    {
        id:11,
        name:"The Super Mario Bros.Movie",
        year:2023,
        rate:7.1,
        category:"Comedy",
        img:"images\\Super_Mario_Bros.jpg"
    },
    {
        id:12,
        name:"Little Woman",
        year:2019,
        rate:7.8,
        category:"Romance",
        img:"images\\litle women.jpeg"
    },
]

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".btn");

//load items
window.addEventListener("DOMContentLoaded", function(){
    displayMovie(movie)
})
//filter items
filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
    const category = e.currentTarget.dataset.id;
    const showMovie = movie.filter(function(movieItem){
        if(movieItem.category === category){
            return movieItem;
        }
    })
    if(category === "all"){
        displayMovie(movie);
    }else{
        displayMovie(showMovie);
    }
    })
})

function displayMovie(movieItem){
    let showMovie = movieItem.map(function(item){
        return `<div class="movie-category">
        <a href="#">
        <img src="${item.img}" alt="${item.name}">
        </a>
        <div class="desc">
    
            <div class="title">
                <p class="name">${item.name}</p>
                <p class="year">${item.year}</p>
            </div>
    
            <div class="rating">
                <p class="love" title="Add to Favourite"><i class="fa-solid fa-heart"></i></p>
                <p><i class="fa-solid fa-star rate"></i> ${item.rate}</p>
            </div>
        </div>
        <!--desc ends-->
    </div>`;
    })
    showMovie = showMovie.join("");
    sectionCenter.innerHTML = showMovie;
}