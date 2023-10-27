const loadFoodData=async(searchText , dataLimit)=>{
    const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    const res=await fetch(url)
    const data=await res.json()
    displayFoodData(data.meals,dataLimit)

}

const displayFoodData=(foods,dataLimit)=>{
    const foodCardContainer=document.getElementById("card-container")
    foodCardContainer.innerText=""

// show less then ten
 const btnShowAll = document.getElementById("btn-show-all")
if( dataLimit && foods.length>10){
    foods=foods.slice(0,10)
    btnShowAll.classList.remove("d-none")

 }
 else{
    btnShowAll.classList.add("d-none")
 }

//  search no food found massage
    const NoFoodFoundDiv=document.getElementById("No-food-found")
    if(foods=== null || foods.length===0){
        NoFoodFoundDiv.classList.remove("d-none")
    }
   
    toggleSpinner(false)
// display food function

    for(const food of foods){
        const foodDiv=document.createElement("div")
        foodDiv.classList.add("food")

        foodDiv.innerHTML=`
        <div class="col">
                  <div class="card">
                    <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${food.strMeal}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <button onclick="loadFoodDetail(${food.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Detail
                    </button>
                      </div>
                  </div>
                </div>
        `
        foodCardContainer.append(foodDiv)
        console.log(food)
    }

   

}

// search btn function
const searchProcess=(dataLimit)=>{
    toggleSpinner(true)
    const searchField= document.getElementById("search-field")
    const searchText=searchField.value ;
    loadFoodData(searchText, dataLimit)
}

document.getElementById("btn-search").addEventListener("click", function(){
   searchProcess(10)
})

document.getElementById("btn-show-all").addEventListener("click", function(){
    searchProcess()
})

// toggle spinner function

const toggleSpinner=(isLoading)=>{
    const loader=document.getElementById("loader")
    if(isLoading){
        loader.classList.remove("d-none")
    }
    else if(isLoading===false){
         loader.classList.add("d-none")
    }
}


// modal detail button function starts


loadFoodData('')