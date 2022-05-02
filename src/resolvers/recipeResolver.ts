import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { recipeData } from "../data";
import { Recipe } from "../entities/Recipe";
import { RecipeDataType } from "../types/RecipeDataType";
import { randomUUID } from 'crypto'
import { ResponseType } from "../types/ResponseType";

@Resolver()
export class recipeResolver{
    @Query( (returns) => [Recipe])
    getRecipes(){
        return {recipe: recipeData}
    }

    @Query(() => ResponseType)
    getRecipe(@Arg("id") id: string): ResponseType {
    let recipe = recipeData.find((recipe) => recipe.id === id);

    if (recipe) {
      return { recipe };
    }

    return {
      error: {
        message: "Recipe not found",
      },
    };
  }


    @Mutation( returns => Recipe)
    addRecipes( @Arg("data") data: RecipeDataType ){
        let newRecipe = { ...data, id: randomUUID() }
        recipeData.push(newRecipe)
        if (newRecipe) {
            return {
              recipe: newRecipe,
            };
          }
          return {
            error: {
              message: "Could not create your recipe",
            },
          };
        }

    @Mutation( returns => Boolean)
    removeRecipes( @Arg("id") id: String){
        let recipeIndex = recipeData.findIndex( (recipe) => recipe.id == id )

        if(recipeIndex > -1){
            recipeData.splice(recipeIndex, 1)
            return true
        } return {
            error: {
              message: "Recipe not found",
            },
          };
    }

    @Mutation( returns => Recipe)
    updateRecipes( 
        @Arg("id") id: String,
        @Arg("data") data: RecipeDataType){
        let recipeIndex = recipeData.findIndex( (recipe) => recipe.id == id )

        if(recipeIndex > -1){
            recipeData[recipeIndex] = { ...data , id}
            return {recipe: recipeData[recipeIndex]}
        }
        return {
            error: {
              message: "Recipe not found",
            },
          };
    }

}