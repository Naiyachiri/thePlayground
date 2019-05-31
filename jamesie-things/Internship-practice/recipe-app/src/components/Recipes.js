import React from 'react';

import { Link } from 'react-router-dom';

const Recipes = (props) => (
    <div className="container">
        <div className="row">
            { props.recipes.map((recipe) => {
                return (
                    <div key={recipe.title} className="col-md-4" style={{ marginBottom:"2rem"}}>
                        <div className="recipe__box">
                            <a href={ recipe.source_url }>
                            <img 
                                className="recipe__box-img"
                                src={recipe.image_url} 
                                alt={recipe.title}/>
                            </a>
                            <div className="recipe__text">
                                <h5>
                                { recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
                                {/** special JS workaround to prevent varying title sizes from causing boxes to render unequally */}
                                </h5>
                                <p className="recipe__subtitle"> Publisher: &nbsp;
                                    <span>{ recipe.publisher }</span>
                                </p>
                            </div>
                            <button className="recipe__button">
                                <Link to={{ pathname: `/recipes/${recipe.recipe_id}`,
                                    state: { recipe: recipe.title}
                                }}>View Recipe</Link>
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);
export default Recipes;
