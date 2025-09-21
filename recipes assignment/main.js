// const API = "   https://www.themealdb.com/api/json/v1/1/search.php?s";

const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", searchMeal);

async function searchMeal() {
    // searchBtn.innerHTML = "Searching...";


    const mealInput = document.getElementById("meal-input").value;
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear old results

    if (!mealInput) {
        resultsDiv.innerHTML = "<p>Please enter a meal name.</p>";
        return;
    }

    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`);
        const data = await res.json();

        if (!data.meals) {
            resultsDiv.innerHTML = "<p>No results found.</p>";
            return;
        }

        data.meals.forEach(meal => {
            const mealDiv = document.createElement("div");
            mealDiv.classList.add("meal");

            mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h2>${meal.strMeal}</h2>
        <ul>${meal.strInstructions
                    .split("\n")
                    .filter(step => step.trim() !== "")
                    .map(step => `<li>${step}</li>`)
                    .join("")
                }
                </ul>
      `
            // const YT = document.createElement("button");
            // YT.classList.add("yt-btn");
            // YT.innerHTML = `<a href="${meal.strYoutube}">Watch on YouTube</a>`;
            // mealDiv.appendChild(YT);
            // ;

            resultsDiv.appendChild(mealDiv);
        });

        localStorage.setItem("lastMeals", JSON.stringify(data.meals));



    } catch (error) {
        resultsDiv.innerHTML = "<p>Something went wrong. Please try again.</p>";
        console.error(error);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const savedMeals = localStorage.getItem("lastMeals");
    if (savedMeals) {
        const resultsDiv = document.getElementById("results");
        const meals = JSON.parse(savedMeals);

        meals.forEach(meal => {
            const mealDiv = document.createElement("div");
            mealDiv.classList.add("meal");

            mealDiv.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h2>${meal.strMeal}</h2>
                <ul>${meal.strInstructions
                    .split("\n")
                    .filter(step => step.trim() !== "")
                    .map(step => `<li>${step}</li>`)
                    .join("")}
                </ul>
            `;

            const YT = document.createElement("button");
            YT.classList.add("yt-btn");
            YT.innerHTML = `<a href="${meal.strYoutube}">Watch on YouTube</a>`;
            mealDiv.appendChild(YT);

            resultsDiv.appendChild(mealDiv);
        });
    }
});
