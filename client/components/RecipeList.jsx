import React from 'react'
import {connect} from 'react-redux'
import {fetchIngredients, fetchRecipes} from '../actions'
import {getIngredients, getRecipes} from '../api'

import RecipeListItem from './RecipeListItem'

class RecipeList extends React.Component {
  componentDidMount() {
    getRecipes()
      .then(recipes => {
        this.props.dispatch(fetchRecipes(recipes))
      })  
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return(
      <div className="recipe_list">
          {this.props.recipes.map(recipe => <div className="card" key={recipe.id}><RecipeListItem recipe={recipe}/></div>)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeList)
       