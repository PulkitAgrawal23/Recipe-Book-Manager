# Recipe Manager

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
git clone https://github.com/your-username/recipe-manager.git
cd recipe-manager
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Get API Key (Spoonacular)
1. Go to [Spoonacular](https://spoonacular.com/food-api)
2. Sign up and get an API key
3. Create a **.env** file in the project root and add:
   ```sh
   REACT_APP_SPOONACULAR_API_KEY=your_api_key_here
   ```

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
 ┃ ┗ 📜 api.js             # Handles API requests
 ┣ 📜 App.js               # Entry point
 ┣ 📜 index.js             # Renders App component
┗ 📜 styles.css            # Basic styling
```

