import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Navbar, Nav } from 'react-bootstrap';


const RecipeEdit = ({ recipes, setRecipes }) => {
    const { index } = useParams();
    const navigate = useNavigate();
    const recipe = recipes[index];

    const [form, setForm] = useState(recipe);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedRecipes = recipes.map((r, i) => (i === parseInt(index) ? form : r));
        setRecipes(updatedRecipes);
        navigate(`/recipe/${index}`); // Navigate back to the detail page
    };

    if (!recipe) {
        return <p>Recipe not found.</p>;
    }

    return (
        <Container>
             <div className="d-flex justify-content-end mt-5">
                <Form onSubmit={handleSubmit} style={{ width: '40%' }}>
                    <Form.Group className="mb-3">
                    <h3 className='mb-4'>Recipe Add :</h3>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            name="title"
                            placeholder="Enter Recipe Title"
                            value={form.title}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control
                            name="ingredients"
                            placeholder="Enter Ingredients"
                            value={form.ingredients}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Instructions</Form.Label>
                        <Form.Control
                            name="instructions"
                            placeholder="Enter Instructions"
                            value={form.instructions}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Cuisine Type</Form.Label>
                        <Form.Control
                            name="cuisineType"
                            placeholder="Enter Cuisine Type"
                            value={form.cuisineType}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Cooking Time (in minutes)</Form.Label>
                        <Form.Control
                            type="number"
                            name="cookingTime"
                            value={form.cookingTime}
                            onChange={handleChange}
                            min="1" 
                            step="1"   
                            required
                        />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Edit Data
                    </Button>
                </Form>
            </div>
            <button onClick={() => navigate('/recipe-list')}>Cancel</button>
        </Container>
           
    );
};

export default RecipeEdit;
