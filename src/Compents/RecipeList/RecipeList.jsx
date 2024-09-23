import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
    const navigate = useNavigate();

    return (
        <Container>
            <Row className="justify-content-end">
                <Col md={6} className="d-flex flex-column align-items-end fancy-box">
                    <h3 className="mt-4 text-left w-100 mb-3">Recipe List :</h3>
                    <ul className="list-unstyled w-100 fancy-list"> 
                        {recipes.map((recipe, index) => (
                            <li 
                                key={index} 
                                onClick={() => navigate(`/recipe/${index}`)} 
                                className="fancy-item"
                                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                            >
                                <span className="fancy-arrow" style={{ marginRight: '50px' }}>➤</span> 
                                <h2>{recipe.title}</h2>
                            </li>
                        ))}
                    </ul>
                    <p className="\">Click on a recipe name to view details</p>
                </Col>
            </Row>
        </Container>
    );
};

export default RecipeList;
