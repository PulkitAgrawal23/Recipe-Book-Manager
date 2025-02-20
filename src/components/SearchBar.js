import React, { useState } from "react";

const API_KEY = "YOUR_API_KEY"; 

const SearchBar = ({ searchTerm, setSearchTerm, onSearchResults }) => {
  const [loading, setLoading] = useState(false);

  const fetchRecipesFromAPI = async (query) => {
    if (!query) return;
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&addRecipeInformation=true&imageType=jpg&apiKey=${API_KEY}`
      );
      const data = await response.json();

      if (data.results) {
        const formattedRecipes = data.results.map((recipe) => ({
          id: recipe.id,
          title: recipe.title,
          url: `https://spoonacular.com/recipes/${recipe.title.replace(/ /g, "-")}-${recipe.id}`,
          category: recipe.dishTypes?.[0] || "General",
          cookingTime: recipe.readyInMinutes || "Unknown",
          servings: recipe.servings || "Unknown",
          instructions: recipe.summary || "No instructions available",
          ingredients: recipe.extendedIngredients
            ? recipe.extendedIngredients.map((ing) => ing.original).join("\n")
            : "No ingredients listed",
          image: recipe.image || "https://via.placeholder.com/300"
        }));        

        onSearchResults(formattedRecipes);
      } else {
        onSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      onSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => fetchRecipesFromAPI(searchTerm)} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
};

export default SearchBar;
