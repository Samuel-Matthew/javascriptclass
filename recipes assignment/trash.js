
async function displayRecipes(searchTerm = '') {
    try {
        const data = await getRecipe(searchTerm);
        const mainContainer = document.getElementById('searchTerm');
        mainContainer.innerHTML = '';

        data.meals.forEach(meal => {
            const div_card = document.createElement('div');
            div_card.className = 'card';

            const div_row = document.createElement('div');
            div_row.className = 'row';

            const div_column = document.createElement('div');
            div_column.className = 'column';

            const image = document.createElement('img');
            image.className = 'thumbnail';
            image.src = meal.strMealThumb;

            const title = document.createElement('h3');
            title.textContent = meal.strMeal;

            const wrapper = document.createElement('div');
            wrapper.className = 'text-center';

            wrapper.appendChild(image);
            div_card.appendChild(wrapper);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            mainContainer.appendChild(div_row);
        });
    } catch (error) {
        console.error("Error displaying recipes:", error);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // const searchBtn = document.getElementById('searchTerm');
    const searchInput = document.getElementById('searchTerm');

    searchBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const searchTerme = searchInput.value.trim();
        if (searchTerm) {
            await displayRecipes(searchTerme);
            searchInput.value = '';
    }
});

    // Load initial recipes
    displayRecipes();
});

getRecipe(API);