import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const RecipeDetail = ({ recipes, setRecipes }) => {
    const { index } = useParams();
    const navigate = useNavigate();
    const recipe = recipes[index];

    const handleDelete = () => {
        const updatedRecipes = recipes.filter((_, i) => i !== parseInt(index));
        setRecipes(updatedRecipes);
        navigate('/recipe-list'); 
    };

    const handleEdit = () => {
        navigate(`/edit/${index}`);
    };

    if (!recipe) {
        return <p>Recipe not found.</p>;
    }

    return (
        <Container>
        <Row className="justify-content-end">
            <Col md={6} className="d-flex flex-column align-items-end">
                <div className="fancy-box1 mt-5 p-5 text-center">
                    <h2 className="mt-4 text-left">{recipe.title}</h2>
                    <p><strong className='me-4'>Ingredients:</strong> {recipe.ingredients}</p>
                    <p><strong className='me-4'>Instructions:</strong> {recipe.instructions}</p>
                    <p><strong className='me-4'>Cuisine Type:</strong> {recipe.cuisineType}</p>
                    <p><strong className='me-4'>Cooking Time:</strong> {recipe.cookingTime} mins</p>
                    <div className="button-group">
                        <Button variant="success" onClick={handleEdit}>Edit</Button>
                        <Button variant="danger" className="ms-2" onClick={handleDelete}>Delete</Button>
                        <Button variant="dark border border-light" className="ms-2" onClick={() => navigate('/recipe-list')}>Back to Recipes</Button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    );
};

export default RecipeDetail;
