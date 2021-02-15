import React from 'react';

const Recipe = (props) => {
    const { 
        name, 
        servings, 
        cookTime, 
        instructions 
    } = props;

    return (
        <div>
            <div>
                <h3>{name}</h3>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div>
                <span>Cook Time:</span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>Servings:</span>
                <span>{servings}</span>
            </div>
            <div>
                <span>Instructions:</span>
                <div>{instructions}</div>
            </div>
        </div>
    );
};

export default Recipe;
