let movie_card = document.querySelector(".moviecard");
let container = document.querySelector(".container");
let input1 = document.querySelector("#search");
// let val = input1.value;

input1.addEventListener("input", () => {
  
    // console.log(val);
    finalResult();
});

let finalResult=debouncing(fetchApi,1300);

function debouncing(callback,delay){
    let timer;
    return ()=>{
        if(timer){
            clearTimeout(timer)
        }
       timer= setTimeout(()=>{
            fetchApi()
        },delay)
    }
    
   
}

let apikey = "51ce1f17";
async function fetchApi() {
    let val = input1.value;
    // console.log(val);
  let data = await fetch(`
    https://www.omdbapi.com/?&apikey=${apikey}&s=${val}&page=1`);
  let result = await data.json();
  let arr = result.Search;
 
  movie_card.innerHTML = "";
  arr.forEach((element) => {
    let poster = element.Poster;
    let name = element.Title;
    let year = element.Year;
    console.log(poster, name, year);
    let new_div = document.createElement("div");
    new_div.classList.add("new-div");
    new_div.innerHTML = `
    <img src=${poster}/>
    <p class=name_of_movie>${name}</p>
    <p class="date">${year}</p>

    `;
    movie_card.appendChild(new_div);
  });
}

// fetchApi()
//    let result=data.;