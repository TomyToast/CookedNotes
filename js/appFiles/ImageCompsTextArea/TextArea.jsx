import React, {Component, Fragment} from 'react';

export class TextArea extends React.Component{
    render(){
        return(
            <Fragment>
                <textarea
                    className="recipe"
                    placeholder="Dodaj opis"
                    value={this.props.valTxt}
                    onChange={this.props.myDesc}
                />
            </Fragment>
        )
    }
}