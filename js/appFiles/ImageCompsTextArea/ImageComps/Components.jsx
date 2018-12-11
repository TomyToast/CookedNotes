import React, {Component, Fragment} from 'react';
import UniqueId from 'react-html-id';

export class Components extends React.Component{
    constructor(props){
        super(props);
        UniqueId.enableUniqueIds(this);
    }

    render(){
        // if(this.props.success){}
        return(
            <form onSubmit={this.props.addRecipe}>
                {/*...*/}
                <button className="addCompBtn" type="button" onClick={this.props.handleAddRow}>Dodaj wiersz</button>
                <button className="addRecipeBtn">Dodaj przepis do bazy</button>
                {this.props.rows.map((line, idx) => (
                    <div key={this.nextUniqueId()}
                        className="compRow"
                    >
                        <input
                            type="text"
                            placeholder={`składnik ${idx + 1}`}
                            value={line.comp}
                            onChange={this.props.handleRowPropsChange(idx)}
                        />
                        <input
                            type="number"
                            step='0.1'
                            min="0"
                            placeholder={`ilość`}
                            value={line.quanty}
                            onChange={this.props.handleRowQuantyChange(idx)}
                        />
                        <input
                            type="text"
                            placeholder={`jednostka miary`}
                            value={line.unit}
                            onChange={this.props.handleRowUnitChange(idx)}
                        />
                        <button className="delCompBtn" type="button" onClick={this.props.handleRemoveRow(idx)}>Usuń</button>
                    </div>
                ))}
            </form>
        )
    }
}
