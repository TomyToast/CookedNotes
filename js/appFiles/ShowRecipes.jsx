import React, {Component, Fragment} from 'react';
import UniqueId from 'react-html-id';

export class ShowRecipes extends React.Component{
    constructor(props){
        super(props)
        UniqueId.enableUniqueIds(this)
    }

    render(){

        const {recipelist} = this.props;

        let search = recipelist;


        if (this.props.fTxt !== ''){
            search = this.props.recipelist
            .filter((row)=> row.components
                .filter((comp) => (comp.comp
                    .toLowerCase()
                        .indexOf(this.props.fTxt
                            .toLowerCase()) > -1)
                ).length > 0)

        }
        return(
            <div className="showRecipes">
                <ul className='recipesList'>
                <input
                    onChange={this.props.findText}
                    value={this.props.fTxt}
                    type="text"
                    placeholder="Znajdź przepis wg. składnika..."
                    className='search'
                />
                <button className='recipeDelBtn' onClick={this.props.handlePrint}>Wydrukuj swoje przepisy</button>

                {
                    search.map((recipe, index) => {
                        return (
                            <li key={this.nextUniqueId()}
                                className="recipeShow"
                            >
                                <h4 className="recipeTitle">{recipe.title}</h4>
                                <div className='position'>
                                <img src={recipe.img}
                                     className="recipeImg"
                                />
                                <ul className="recipeCompTxtAreaList">
                                    <ul className="recipeCompList">
                                        {
                                            recipe.components.map((line, idx) => {
                                                return(
                                                    <li key={this.nextUniqueId()}
                                                        className='recipeComp'
                                                    >
                                                        {line.quanty} {line.unit} {line.comp}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </ul>
                                <textarea disabled={true} readOnly={true} className="recipeDescription">{recipe.description}</textarea>
                                <button onClick={this.props.handleRemoveRecipe(index)}
                                        className="recipeDelBtn"
                                >Usuń przepis</button>
                                </div>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}
