import React from "react"
import NavBar from "../components/NavBar"
import Category from "../components/Category"


function CategoryPage(){

    let props = [
        {title: "Breakfast", recipes: [{image: "./Bread.jpg",title: "TEST1 TEST2 TEST3 TEST4 TEST5 TEST6 TEST7 TEST8 TEST9 TEST10 TEST11 TEST12 TEST13 TEST14 TEST15"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},]}, 
        {title: "Lunch", recipes: [{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},]}, 
        {title: "Dinner", recipes: [{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},]},
        {title: "Breakfast", recipes: [{image: "./Bread.jpg",title: "TEST1 TEST2 TEST3 TEST4 TEST5 TEST6 TEST7 TEST8 TEST9 TEST10 TEST11 TEST12 TEST13 TEST14 TEST15"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},]}, 
        {title: "Lunch", recipes: [{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},]}, 
        {title: "Dinner", recipes: [{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},]}

    ]


    return(
        <>
            <NavBar/>
            {CreateCategories(props)}
        </>
        
    )


    function CreateCategories(props){
        return(
            <div id= "Categories">
                {
                props.map((c) => {
                    return(
                        <Category title = {c.title} recipes={c.recipes}/>
                    )
                }
                )}
            </div>
        )
    }
}

export default CategoryPage