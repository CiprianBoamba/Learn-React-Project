import React from 'react'

export default function RecipeIngredientEdit(props) {

  const {
    ingredient, 
    handleIngredientChange,
    handleIngredientDelete
    } = props;

    function handleChange(changes) {
      handleIngredientChange(ingredient.id, {...ingredient, ...changes})
    }

  return (
    <>
      <input 
        type="text"
        value={ingredient.name}
        onChange={e => handleChange({name: e.target.value})}
        className="recipe-edit__input"
      />
      <input 
        type="text"
        value={ingredient.amount}
        onChange={e => handleChange({amount: e.target.value})}
        className="recipe-edit__input"
      />
        
      <button
        className="btn btn--danger"
        onClick={() => handleIngredientDelete(ingredient.id)}>
        &times;
      </button>
    </>
  )
}
