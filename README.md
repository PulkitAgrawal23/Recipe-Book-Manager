# Recipe Book Manager

A web application to **add, search, and manage recipes**. Users can add new recipes, mark favorites, and fetch recipes from the **Spoonacular API**.

## 🚀 Features
- Add and manage custom recipes
- Search recipes by name and category
- Fetch recipes from **Spoonacular API**
- Save favorite recipes
- Uses **localStorage** for data persistence

## 🛠️ Tech Stack
- **Frontend:** React.js
- **API:** Spoonacular API
- **State Management:** React Hooks (useState, useEffect)
- **Storage:** LocalStorage

## 🎯 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/Recipe-Book-Manager.git
cd Recipe-Book-Manager
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Get API Key (Spoonacular)
1. Go to [Spoonacular](https://spoonacular.com/food-api)
2. Sign up and get an API key

### 4️⃣ Run the Project
```sh
npm start
```

The app will be live at **http://localhost:3000**.

## 🏗️ Project Structure
```
📂 src
 ┣ 📂 components
 ┃ ┣ 📜 RecipeCard.js       # Displays individual recipes
 ┃ ┣ 📜 RecipeForm.js       # Form to add new recipes
 ┃ ┣ 📜 RecipeManager.js    # Main component handling logic
 ┃ ┣ 📜 SearchBar.js        # Search & category filter
 ┣ 📜 App.js               # Entry point
 ┣ 📜 index.js             # Renders App component
┗ 📜 styles.css            # Basic styling
```

