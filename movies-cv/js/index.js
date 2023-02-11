
let moviesInner= document.getElementById("movies");
let search= document.getElementById("search");
let word= document.getElementById("word");
let paginaitionLi= document.getElementById("paginaitionLi");
let pageItem =document.getElementsByClassName("pageNUM");

console.log(pageItem);

let AllMovies=[];
//==========================function11111111=====//
async function GetAllMovies(type="now_playing",) {
   
let response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=290fbe16bc8aa22b8b9d65ed56cdfd0f&language=en-US&page=1`)
 
let result = await response.json();
AllMovies = result.results;
console.log(AllMovies);
DisplayAllMovies(AllMovies);

}

GetAllMovies()
//=================function2222222222===========//

function DisplayAllMovies(AllMovies) {
  cartoona=``;
  for (let i = 0; i < AllMovies.length; i++) {
    cartoona +=` <div class="col-md-4 mt-3">
    <div class="movie position-relative overflow-hidden">
        <img class="w-100" src="https://image.tmdb.org/t/p/w500${AllMovies[i].poster_path}" alt="">
        <div class="overlay position-absolute py-5">
            <h3>${AllMovies[i].title}</h3>
            <p>${AllMovies[i].overview}</p>
            <h3>${AllMovies[i].vote_average}</h3>
            <span>${AllMovies[i].release_date}</span>
        </div>
    </div>
</div>`
    
  }
  moviesInner.innerHTML=cartoona;
}
//====================array search==============//

search.addEventListener("keyup",()=>
{
  searchInput(search.value)
  console.log(search.value);
});

//=================function333333================//

function searchInput(search) {
  cartoona=``;
  
    for (let i = 0; i < AllMovies.length; i++) {
      //to lowercase
      if (AllMovies[i].title.toLowerCase().includes(search.toLowerCase())==true) 
      {
      cartoona +=` <div class="col-md-4 mt-3">
      <div class="movie position-relative overflow-hidden">
          <img class="w-100" src="https://image.tmdb.org/t/p/w500${AllMovies[i].poster_path}" alt="">
          <div class="overlay position-absolute py-5">
              <h3>${AllMovies[i].title}</h3>
              <p>${AllMovies[i].overview}</p>
              <h3>${AllMovies[i].vote_average}</h3>
              <span>${AllMovies[i].release_date}</span>
          </div>
      </div>
  </div>`
      
    }
    
   }
   moviesInner.innerHTML=cartoona;
}

//=================search by word====================//



//===========================side menu=================//
   let isOpen=true;
   let menuItems=$("ul li"); //console array 
  

    $("#close").click(()=>{
      let sideMenu =$("#sideMenu").outerWidth();//250
      let rightSide =$(".rightSide").outerWidth();//50
      let width =sideMenu-rightSide;

      if (isOpen) {
        $("#sideMenu").animate({left:0})

      for (let i = 0; i < menuItems.length; i++) {

        $(`.item${i}`).animate({paddingTop:"30px"},i*50+1000);
        
      }
        $("#close").removeClass(" fa-bars").addClass("fa-times");
        isOpen=false;

      }
      else{
       
        $("#sideMenu").animate({left:-width})
        $("#close").removeClass("fa-times").addClass("fa-bars");
        isOpen=true;
      }
    }

)
//////////////////////////////////////////// get movies from side menu///////////////

for (let i = 0; i < menuItems.length; i++) {

  menuItems[i].addEventListener('click',()=>{

    GetAllMovies( menuItems[i].getAttribute("MovieTitle"));
  })
 // console.log(menuItems[i].getAttribute("MovieTitle"));
}

//=====================pagination=================//

