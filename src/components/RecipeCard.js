import React from "react";

const RecipeCard = ({ recipe, onFavorite, isFavorite }) => {
  return (
    <div className="recipe-card">
      {recipe.image && <img src={recipe.image} alt={recipe.title} className="recipe-image" />}
      
      {/* Clickable title linking to the full recipe */}
      <h3 className="recipe-title">
  <a href={recipe.url} target="_blank" rel="noopener noreferrer">
    {recipe.title}
  </a>
</h3>


      <p><strong>Category:</strong> {recipe.category || "N/A"}</p>
      <p><strong>Cooking Time:</strong> {recipe.cookingTime || "N/A"} mins</p>
      <p><strong>Servings:</strong> {recipe.servings || "N/A"}</p>

      <p><strong>Ingredients:</strong></p>
      <ul>
        {recipe.ingredients ? recipe.ingredients.split(",").map((item, index) => (
          <li key={index}>{item.trim()}</li>
        )) : <li>No ingredients available</li>}
      </ul>

      <p><strong>Description: </strong></p>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions || "No instructions available." }}></div>

      {/* Favorite Button */}
      <button onClick={() => onFavorite(recipe)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default RecipeCard;
