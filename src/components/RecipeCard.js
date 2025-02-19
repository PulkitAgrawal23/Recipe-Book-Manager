import React from "react";

const RecipeCard = ({ recipe, onFavorite, isFavorite }) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <p><strong>Ingredients:</strong></p>
      <pre>{recipe.ingredients}</pre>
      <p><strong>Instructions:</strong></p>
      <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
      <button onClick={() => onFavorite(recipe)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default RecipeCard;
