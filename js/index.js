const loadFoodData=async(searchText)=>{
    const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    const res=await fetch(url)
    const data=await res.json()
    displayFoodData(data.meals)

}

const displayFoodData=(foods)=>{
    const foodCardContainer=document.getElementById("card-container")
    foodCardContainer.innerText=""
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
                    </div>
                  </div>
                </div>
        `
        foodCardContainer.append(foodDiv)
    }

}

// search btn function
document.getElementById("btn-search").addEventListener("click", function(){
    const searchField= document.getElementById("search-field")
    const searchText=searchField.value ;
    loadFoodData(searchText)
    console.log(searchText)
})



loadFoodData('')