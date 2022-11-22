import React from "react"
import {Plus} from "react-bootstrap-icons"
function Category(props){
    return(
        <div id="Category">
            <h1>{props.title}</h1>
            <a id="Icon">
                <Plus/>
            </a>
            
            {ListRecipes(props)}
        </div>
    )
}

function ListRecipes(props){
    return(
        <div id="RecipeList">
            {props.recipes.map(r => {
                return(
                    <a href="/recipe/1">
                        <div id="Recipe">
                            <img src={r.image}/>
                            <p>{r.title}</p>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}



export default Category