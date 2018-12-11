import React, {Component, Fragment} from 'react';

import {ImageComps} from './ImageCompsTextArea/ImageComps';
import {TextArea} from './ImageCompsTextArea/TextArea'

export class ImageCompsTextArea extends React.Component{

    render(){
        return(
            <div className='imageCompsTextArea'>
                <ImageComps
                    recipeData={this.props.recipelist}
                    newDesc={this.props.description}
                    comp= {this.props.comp}
                    quanty= {this.props.quanty}
                    unit= {this.props.unit}
                    rows= {this.props.rows}
                    updateData={this.props.updateData}
                    success={this.props.success}

                    handleRowPropsChange= {this.props.handleRowPropsChange}
                    handleRowQuantyChange= {this.props.handleRowQuantyChange}
                    handleRowUnitChange= {this.props.handleRowUnitChange}
                    handleAddRow= {this.props.handleAddRow}
                    handleRemoveRow= {this.props.handleRemoveRow}
                    src={this.props.src}
                    setSource={this.props.setSource}
                    title={this.props.title}
                    setTitle={this.props.setTitle}
                />
                <TextArea
                    valTxt={this.props.description}
                    myDesc={this.props.myDescription}
                />
            </div>
        )
    }
}






