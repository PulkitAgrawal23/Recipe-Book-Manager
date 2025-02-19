import React, { useState } from "react";

const RecipeForm = ({ onSubmit }) => {
  const [recipe, setRecipe] = useState({
    title: "",
    category: "",
    cookingTime: "",
    servings: "",
    ingredients: "",
    instructions: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(recipe);
    setRecipe({
      title: "",
      category: "",
      cookingTime: "",
      servings: "",
      ingredients: "",
      instructions: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Title"
          value={recipe.title}
          onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
          required
        />

        <select
          value={recipe.category}
          onChange={(e) => setRecipe({ ...recipe, category: e.target.value })}
          required
        >
          <option value="">Select Category</option>
          <option value="main">Main Course</option>
          <option value="dessert">Dessert</option>
          <option value="appetizer">Appetizer</option>
        </select>

        <input
          type="number"
          placeholder="Cooking Time (mins)"
          value={recipe.cookingTime}
          onChange={(e) =>
            setRecipe({ ...recipe, cookingTime: e.target.value })
          }
          required
        />

        <input
          type="number"
          placeholder="Servings"
          value={recipe.servings}
          onChange={(e) => setRecipe({ ...recipe, servings: e.target.value })}
          required
        />

        <textarea
          placeholder="Ingredients (one per line)"
          value={recipe.ingredients}
          onChange={(e) =>
            setRecipe({ ...recipe, ingredients: e.target.value })
          }
          required
        />

        <textarea
          placeholder="Instructions"
          value={recipe.instructions}
          onChange={(e) =>
            setRecipe({ ...recipe, instructions: e.target.value })
          }
          required
        />

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
