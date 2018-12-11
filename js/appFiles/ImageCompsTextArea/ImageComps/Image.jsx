import React, {Component, Fragment} from 'react';

export class Image extends React.Component{
    render(){
        return(
            <div className='image'>
                <input
                    className='title'
                    type="text"
                    placeholder={'tytuł'}
                    value={this.props.title}
                    onChange={this.props.setTitle}
                />
                <img className="img" src={this.props.src} alt="zdjęcie 200x200" />
                <button className="addImgBtn" onClick={this.props.setSrc}>Dodaj zdjęcie</button>
            </div>
        )
    }
}
