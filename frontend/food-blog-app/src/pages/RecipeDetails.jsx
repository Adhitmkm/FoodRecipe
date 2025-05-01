// src/pages/RecipeDetails.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function RecipeDetails() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:5000/recipe/${id}`)
            .then(res => setRecipe(res.data))
            .catch(err => console.error(err))
    }, [id])

    if (!recipe) return <div>Loading...</div>

    return (
        <div className="recipe-details">
            <h1>{recipe.title}</h1>
            <img src={`http://localhost:5000/images/${recipe.coverImage}`} alt={recipe.title} width="300px" />
            <p><strong>Time:</strong> {recipe.time}</p>
            <p><strong>Description:</strong> {recipe.description}</p>
            {/* Add more fields if needed */}
        </div>
    )
}
