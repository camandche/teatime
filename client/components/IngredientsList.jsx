import React from 'react'
import { connect } from 'react-redux'
import { fetchIngredients } from '../actions'
import { getIngredients } from '../api'
import {getRecipeIngredients} from './helpers/helpers'

class IngredientsList extends React.Component {
    

    render() {
        
        return (
            <>
                <ul>{getRecipeIngredients(this.props.ingredients, this.props.id).map(ingredient => <li key={ingredient.ingredient_name}>{ingredient.ingredient_name} x {ingredient.ingredient_quantity}{ingredient.measurement_name}</li>)}</ul>
            </>
        )
    }

}

function mapStateToProps(globalState) {
    return {
        ingredients: globalState.ingredients
    }
}

export default connect(mapStateToProps)(IngredientsList)