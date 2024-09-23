import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeManagement from './Compents/RecipeManagement/RecipeManagement';
import RecipeListPage from './Compents/RecipeList/RecipeList';
import RecipeDetail from './Compents/RecipeDetail/RecipeDetail';
import RecipeEdit from './Compents/RecipeEdit/RecipeEdit';

const App = () => {
    const [recipes, setRecipes] = useState(() => {
        const savedRecipes = localStorage.getItem('recipes');
        return savedRecipes ? JSON.parse(savedRecipes) : [];
    });

    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);

    return (
      

                <Routes>
                    <Route path="/" element={<RecipeManagement recipes={recipes} setRecipes={setRecipes} />} />
                    <Route path="/recipe-list" element={<RecipeListPage recipes={recipes} />} />
                    <Route path="/recipe/:index" element={<RecipeDetail recipes={recipes} setRecipes={setRecipes} />} />
                    <Route path="/edit/:index" element={<RecipeEdit recipes={recipes} setRecipes={setRecipes} />} />
                </Routes>
  
    );
};

export default App;
