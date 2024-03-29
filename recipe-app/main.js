const meals = document.getElementById("meals");
//fav meals button

//function to get a random meal
async function getRandomMeal() {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const respData = await resp.json();

  const randomMeal = respData.meals[0];

  addMeal(randomMeal, true);
}

async function getMealById(id) {
  const meal = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
}

async function getMealBySearch(term) {
  const meals = await fetch(
    "www.themealdb.com/api/json/v1/1/search.php?f=" + term
  );
}

getRandomMeal();

function addMeal(mealData, random = false) {
  const meal = document.createElement("div");
  meal.classList.add("meal");

  meal.innerHTML = `
    <div class="meal-header">
        ${random ? 
        `<span class="random"> Random Recipe </span>` : '' }
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    </div>
    <div class="meal-body">
        <h4>${mealData.strMeal}</h4>
        <button class="fav-btn" id="fav-meals-button"><i class="fas fa-heart"></i>   </button>
    </div>
    `;

    const btn = meal.querySelector('.meal-body .fav-btn');

    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    })

    meals.appendChild(meal);
}
// la estupida comilla invertida ``

function addMealToLS(mealId) {
    const mealIds = getMealsFromLS();

    localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));
}

function getMealsFromLS(){
    const mealIds = JSON.parde(localStorage.getItem('mealIds'));
    return mealIds;
}