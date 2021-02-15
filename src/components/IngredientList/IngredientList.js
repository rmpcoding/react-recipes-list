import React from 'react'

const IngredientList = ({ingredients}) => {
    const ingredientElements = ingredients.map((ingredient) => {
        return <IngredientList key={ingredient.id} {...ingredient} />
    })

    return (
        <div>
            {ingredientElements}
        </div>
    )
}

export default IngredientList
