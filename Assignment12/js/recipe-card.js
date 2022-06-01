class Recipe {
    constructor(title, servings, ingredients) {
        this.title = title;
        this.servings = servings;
        this.ingredients = ingredients;
        recipeDisplay = function() {
            console.log(`${this.title}\n
            Serves: ${this.servings}\n
            Ingredients:`);
            for (let item of this.ingredients) {
                console.log(`- ${item}\n `);
            }
        }
    }
}

const guacamole = new Recipe('Guacamole', 4, ['3 Avocados', '1 Lime', '1 Teaspoon Salt', '1/2 Cup Onion', '3 Tablespoons Cilantro', '2 Diced Tomatoes', '1 Pinch Ground Pepper']);
guac.recipeDisplay();