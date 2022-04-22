const searchFood = () => {
    const search = document.getElementById('search-field');
    const searchField = search.value;
    // console.log(searchField);
    search.value = ''
    if (searchField == '') {
        return alert('Please input valid name')
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchField}
        `
        fetch(url)
            .then(res => res.json())
            .then(data => searchResult(data.meals));
    }

}
const searchResult = meals => {
    const viewSearchResult = document.getElementById('search-result');
    viewSearchResult.innerHTML = ''
    if (meals.length == 0) {
        return alert('Please input valid name');
    }
    meals.forEach(meal => {


        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="searchViewResult(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        </div>
        `
        viewSearchResult.appendChild(div);
    })
}

const searchViewResult = mealId => {
    // console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetail(data.meals[0]));
}
const displayDetail = meal => {
    // console.log(meal)
    const displayViewDetail = document.getElementById('display-details');
    // console.log(displayViewDetail);
    const div = document.createElement('div');
    div.classList.add('card');
    // console.log(div)
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    displayViewDetail.appendChild(div);
}