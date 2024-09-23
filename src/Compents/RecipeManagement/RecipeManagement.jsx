import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Navbar, Nav } from 'react-bootstrap';

const RecipeManagement = ({ recipes, setRecipes }) => {
    const [form, setForm] = useState({
        title: '',
        ingredients: '',
        instructions: '',
        cuisineType: '',
        cookingTime: 1,  
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipes = [...recipes, form];
        setRecipes(newRecipes);
        navigate('/recipe-list');  
        setForm({
            title: '',
            ingredients: '',
            instructions: '',
            cuisineType: '',
            cookingTime: 1,  
        });
    };

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
                        Add Recipe
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default RecipeManagement;
