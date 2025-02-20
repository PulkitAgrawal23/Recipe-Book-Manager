import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipeForm from "./RecipeForm";
import SearchBar from "./SearchBar";

const RecipeManager = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [apiRecipes, setApiRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes = localStorage.getItem("recipes");
    const savedFavorites = localStorage.getItem("favorites");

    if (savedRecipes) setRecipes(JSON.parse(savedRecipes));
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [recipes, favorites]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: Date.now() }]);
    setShowForm(false);
  };

  const toggleFavorite = (recipe) => {
    if (favorites.find((fav) => fav.id === recipe.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== recipe.id));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  const handleSearchResults = (fetchedRecipes) => {
    setApiRecipes(fetchedRecipes);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="recipe-manager">
      {/* Left Side - Full Height Image */}
      <div className="image-container">
        <img src="/recipe-book.jpg" alt="Recipe Book" className="background-image" />
      </div>

      {/* Right Side - Fixed Recipe Form & List */}
      <div className="content-container">
        <h1>Recipe Book Manager</h1>
        <button onClick={() => setShowForm(!showForm)} className="add-recipe-btn">
          Add New Recipe
        </button>

        {showForm && <RecipeForm onSubmit={handleAddRecipe} />}

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onSearchResults={handleSearchResults}
        />

        <div className="recipe-grid">
          {[...apiRecipes, ...filteredRecipes].map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onFavorite={toggleFavorite}
              isFavorite={favorites.some((fav) => fav.id === recipe.id)}
            />
          ))}
        </div>

        {recipes.length === 0 && apiRecipes.length === 0 && <p>No recipes found. Try adding some!</p>}
      </div>
    </div>
  );
};

export default RecipeManager;
